import { Container, TagsContainer } from './style.js'

import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx';
import { useState, useEffect, useCallback } from "react";

import { useCart } from "../../context/CartContext";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tags } from '../../components/Tags/index.jsx'
import { Button } from '../../components/Button/index.jsx';
import { ButtonBack } from '../../components/ButtonBack/index.jsx'
import { ItensCount } from '../../components/ItensCount/index.jsx';

import { api } from '../../services/api.js';

export function Details() {
    const [ countValue, setCountValue ] = useState(1);
    const [ plate, setPlate ] = useState({})
    const { addToCart } = useCart()
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    
    
    const handleAddToCart = useCallback(() => {
        if(plate) {
            addToCart({ ...plate, quantity: countValue })
        } 
    }, [plate, countValue, addToCart])
    
    const handleCountChange = useCallback((newValue) => {
        setCountValue(newValue);
    }, [])

    const handleEditPlate = useCallback(() => {
        navigate(`/editplate/${id}`)
    }, [navigate, id])
    
    async function handleDeletePlate(){
        const confirm = window.confirm("Deseja realmente remover o prato?")
        if(confirm) {
            try{
                await api.delete(`/plates/${id}`)
                alert("Prato deletado com sucesso", 200)
                navigate(-1)
            }catch(error){
                console.error("Erro ao deletar prato:", error)
                alert("Erro ao deletar prato.")
            }
        }
    }
    
           if(!plate) {
             return <div>Prato não encontrado</div>
           }
        
        useEffect(() => {
            console.log("useEffect executando")
            async function searchPlate() {
                try {
                    const response = await api.get(`/plates/${id}`);
                    console.log("data:", response.data);
                    setPlate(response.data);
                } catch (error) {
                    console.error("Erro ao buscar prato.", error);
                }
            }
            searchPlate();
        }, []);
        
        return(
            <Container>
            <Header/>
            <ButtonBack/>

            <main>
                <div className="plate-container">
                    <img
                        src={`${api.defaults.baseURL}/files/${plate.image}`}
                        alt={`Imagem do ${plate.name}`}
                        className="plate-image"
                        />
                    <div className="plate-info">
                        <h1 className="plate-name">{plate.name}</h1>
                        <p className="plate-description">{plate.description}</p>

                    <TagsContainer>
                            {plate.ingredients &&
                                plate.ingredients.map((ingredient) => (
                            <Tags key={String(ingredient.id)} title={ingredient.name} />
                            ))}
                    </TagsContainer>
                    

                    <div className="add-cart">
                        {user && user.role === 'admin' ? (
                                <>
                                    <Button title="Excluir" onClick={ handleDeletePlate}></Button>
                                    <Button title="Editar prato" onClick={ handleEditPlate }></Button>
                                </>
                            ) : (
                                <>
                                    <ItensCount onCountChange={ handleCountChange }></ItensCount>
                                    <Button title={`Incluir - R$ ${plate.price}`} onClick={() => handleAddToCart(plate)}></Button>
                                </>
                    )}
                    </div>
                </div>
                </div>
            </main>

            <Footer/>
        </Container>
    )
}