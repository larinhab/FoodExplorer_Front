import { Container } from "./styles";
import { Button } from '../Button'
import { ItensCount } from '../ItensCount'

import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from '../../hooks/auth'
import { useCart } from "../../context/CartContext";
import { useFavorites } from '../../context/FavoritesContext.jsx'

import { api } from "../../services/api.js";
import { USER_ROLE } from '../../utilis/roles.js'

import { data } from "../../utilis/data";

import 'swiper/css'
import 'swiper/css/bundle'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";

import { LuHeart } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

register();

export function Card({plate_id, item}) {
    const { favorites, addFavorite, removeFavorite, } = useFavorites()
    const [countValue, setCountValue] = useState(1);
    const { addToCart } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleCountChange = (newValue) => {
        setCountValue(newValue);
    }

    const handleAddToCart = useCallback((item) => {
        addToCart({ ...item, quantity: countValue || 1 });
    }, [])

    const handleDetails = (id) => {
        navigate(`plates/${id}`)
    }

    const handleEditPlate = (id) => {
        navigate(`/editplate/${id}`)
    }

    async function handleDeletePlate(){
        const confirm = window.confirm("Deseja realmente excluir esse prato?")

        if(confirm){
            await api.delete(`plates/${id}`)
            navigate(-1)
        }
    }

    const handleFavoritesToggle = (plate_id) => {
        console.log("handleFavoritesToggle foi chamada com plate_id:", plate_id);
        
        const favorite = favorites.find(fav => fav.plate_id === plate_id);
        if (favorite) {
            console.log("Removendo favorito com id:", favorite.id)
            removeFavorite(favorite.id);
        } else {
            console.log("Adicionando favorito com plate_id:", plate_id);
            addFavorite(plate_id);
        }
    }

    return (
        <Container>
            <div className="plate">
                <div className="plate-info">
                    {user && user.role === 'admin' ? (
                        <LuClipboardEdit size={32}
                            onClick={() => handleEditPlate(item.id)}
                            style={{ position: 'absolute', top: '15', right: '25', cursor: 'pointer' }}>

                        </LuClipboardEdit>
                    ) : (
                        <LuHeart size={32}
                            style={{
                                position: 'absolute', top: '15', right: '25', cursor: 'pointer',
                                fill: favorites.some(fav => fav.plate_id === item.id) ? '#82F3FF' : '',
                                color: favorites.some(fav => fav.plate_id === item.id) ? '#82F3FF' : ''
                            }}
                            onClick={() => handleFavoritesToggle(item.id)} />
                    )}
                    <img
                        src={item.image}
                        alt={`Imagem do ${item.category}`}
                        onClick={() => handleDetails(item.id)}
                    />
                    <p className="plate-name">{item.name}<MdKeyboardArrowRight size={32} /></p>
                    <p className="plate-description">{item.description}</p>
                    <p className="plate-price">R$ {item.price}</p>
                </div>


                <div className="add-cart">
                    {user && user.role === 'admin' ? (
                        <Button title="Excluir" onClick={handleDeletePlate}></Button>
                    ) : (
                        <>
                            <ItensCount onCountChange={handleCountChange}></ItensCount>
                            <Button title="Incluir" onClick={() => handleAddToCart(item)}></Button>
                        </>
                    )}
                </div>
            </div>

        </Container>
    )
}