import { Container } from './style.js'

import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx';
import { useState, useEffect, useCallback } from "react";

import { useCart } from "../../context/CartContext";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button/index.jsx';
import { ButtonBack } from '../../components/ButtonBack/index.jsx'
import { ItensCount } from '../../components/ItensCount/index.jsx';

import { data } from "../../utilis/data";


export function Details() {
    const [countValue, setCountValue] = useState(1);
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const { id } = useParams()
    const { user } = useAuth()

    const item = Object.values(data)
    .flat() 
    .find((item) => item.id === parseInt(id));

    if(!item) {
        return <div>Prato não encontrado</div>
    }

    const handleAddToCart = useCallback((item) => {
        addToCart({ ...item, quantity: countValue }); 
      }, [])

    const handleCountChange = useCallback((newValue) => {
        setCountValue(newValue);
      }, [])

      const handleEditPlate = () => {
        navigate(`/editplate`)
      }

    return(
        <Container>
            <Header/>
            <ButtonBack/>

            <main>
                <div className="plate-container">
                    <img
                        src={item.image}
                        alt={`Imagem do ${item.name}`}
                        className="plate-image"
                    />
                    <div className="plate-info">
                        <h1 className="plate-name">{item.name}</h1>
                        <p className="plate-description">{item.description}</p>

                    <div className="add-cart">
                        {user && user.role === 'admin' ? (
                                <>
                                    <Button title="Excluir" onClick={ ''/**handleDeletePlate**/ }></Button>
                                    <Button title="Editar prato" onClick={ handleEditPlate }></Button>
                                </>
                            ) : (
                                <>
                                    <ItensCount onCountChange={ handleCountChange }></ItensCount>
                                    <Button title={`Incluir - R$ ${item.price}`} onClick={() => handleAddToCart(item)}></Button>
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