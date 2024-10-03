import { Container } from "./styles"
import { Button } from '../Button'
import { ItensCount } from '../ItensCount'

import { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useAuth } from '../../hooks/auth'
import { useCart } from "../../context/CartContext"
import { useFavorites } from '../../context/FavoritesContext.jsx'

import { api } from "../../services/api.js"

import 'swiper/css'
import 'swiper/css/bundle'
import { register } from 'swiper/element/bundle'

import { LuHeart } from "react-icons/lu"
import { LuClipboardEdit } from "react-icons/lu"
import { MdKeyboardArrowRight } from "react-icons/md"

register();

export function Card({ plate, onCountChange }) {
    const { favorites, addFavorite, removeFavorite, } = useFavorites()
    const [ countValue, setCountValue ] = useState(1);
    const { addToCart } = useCart()
    const { user } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate()

    const formatPrice = (price) => {
        const number = parseFloat(price)
        return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    }

    const handleCountChange = (newValue) => {
        setCountValue(newValue)
    }

    const handleAddToCart = useCallback(() => {
        if(plate) {
         addToCart({ ...plate, quantity: countValue })
         } 

         alert("Prato adicionado ao carrinho!")
       }, [plate, countValue, addToCart])

    const handleDetails = (id) => {
        navigate(`/plates/${id}`)
    }

    const handleEditPlate = (id) => {
        navigate(`/editplate/${id}`)
    }

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

    const handleFavoritesToggle = (plate_id) => {
        const favorite = favorites.find(fav => fav.plate_id === plate_id);
        if (favorite) {
            removeFavorite(favorite.id);
        } else {
            addFavorite(plate_id);
        }
    }

    return (
        <Container>
            <div className="plate">
                <div className="plate-info">
                    {user && user.role === 'admin' ? (
                        <LuClipboardEdit size={32}
                            onClick={() => handleEditPlate(plate.id)}
                            style={{ position: 'absolute', top: '15', right: '25', cursor: 'pointer' }}>

                        </LuClipboardEdit>
                    ) : (
                        <LuHeart size={32}
                            style={{
                                position: 'absolute', top: '15', right: '25', cursor: 'pointer',
                                fill: favorites.some(fav => fav.plate_id === plate.id) ? '#82F3FF' : '',
                                color: favorites.some(fav => fav.plate_id === plate.id) ? '#82F3FF' : ''
                            }}
                            onClick={() => handleFavoritesToggle(plate.id)} />
                    )}
                    <img
                        src={`${api.defaults.baseURL}/files/${plate.image}`} 
                        alt={`Imagem do ${plate.name}`}
                        onClick={() => handleDetails(plate.id)}
                    />
                    <p className="plate-name">{plate.name}<MdKeyboardArrowRight size={32} /></p>
                    <p className="plate-description">{plate.description}</p>
                    <p className="plate-price">{formatPrice(plate.price)}</p>
                </div>


                <div className="add-cart">
                    {user && user.role === 'admin' ? (
                        <Button title="Excluir" onClick={ handleDeletePlate }></Button>
                    ) : (
                        <>
                            <ItensCount onCountChange={ handleCountChange }></ItensCount>
                            <Button title="Incluir" onClick={() => handleAddToCart(plate)}></Button>
                        </>
                    )}
                </div>
            </div>

        </Container>
    )
}