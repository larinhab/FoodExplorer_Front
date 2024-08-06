import { Container } from "./styles";
import { Button } from '../Button'
import { ItensCount } from '../ItensCount'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import { data } from "../../utilis/data";

import 'swiper/css'
import 'swiper/css/bundle'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";

import { LuHeart } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utilis/roles.js'
import { useCart } from "../../context/CartContext";

register();

export function Card() {
    const [countValue, setCountValue] = useState(1);
    const { user } = useAuth()
    const { addToCart } = useCart()
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


    const renderSwiper = (items) => (
        <swiper-container
        slides-per-view="3"
        css-mode="true"
        space-between='32'
        loop='true'
        pagination={{ clickable: true }}
        navigation='true'
    >
        {items.map((item) =>(
            <swiper-slide key={item.id}>
                <div className="plate">

                    <div className="plate-info">
                        {user && user.role === 'admin' ? (
                                <LuClipboardEdit size={32} 
                                                onClick={handleEditPlate}
                                                style={{ position: 'absolute', top: '40', right: '70', cursor: 'pointer'}}>
                                                
                                                </LuClipboardEdit>
                            ) : (
                                <LuHeart size={32} style={{ position: 'absolute', top: '40', right: '70', cursor: 'pointer' }}/>
                            )}
                        <img
                            src={item.image}
                            alt={`Imagem do ${item.category}`}
                            onClick={() => handleDetails(item.id) }
                        />
                        <p className="plate-name">{item.name}  <MdKeyboardArrowRight size={18} /></p>
                        <p className="plate-description">{item.description}</p>
                        <p className="plate-price">R$ {item.price}</p>
                    </div>
                

                    <div className="add-cart">
                        {user && user.role === 'admin' ? (
                                <Button title="Excluir" onClick={ handleEditPlate }></Button>
                            ) : (
                                <>
                                <ItensCount onCountChange={ handleCountChange }></ItensCount>
                                <Button title="Incluir" onClick={() => handleAddToCart(item)}></Button>
                            </>
                            )}
                    </div>
                    </div>
                
            </swiper-slide>
        ))}
    </swiper-container>
    )
    return (
        <Container> 
            <h2>Refeições</h2>
            {renderSwiper(data.refeicao)}

            <h2>Bebidas</h2>
            {renderSwiper(data.bebidas)}

            <h2>Sobremesas</h2>
            {renderSwiper(data.sobremesas)}
        </Container>    
    )
}