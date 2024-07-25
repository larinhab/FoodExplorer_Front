import { Container } from "./styles";
import { Button } from '../Button'
import { ItensCount } from '../ItensCount'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { data } from "../../utilis/data";

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/bundle'

import { MdKeyboardArrowRight } from "react-icons/md";
import { LuHeart } from "react-icons/lu";

register();

export function Card() {
    const [countValue, setCountValue] = useState(1);
    const navigate = useNavigate()

    const handleCountChange = (newValue) => {
        setCountValue(newValue);
      };

    const handleDetails = (id) => {
        navigate(`plates/${id}`)
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
            <swiper-slide key={item.id} onClick={() => handleDetails(item.id) }>
                <div className="plate">

                    <div className="plate-info">
                        <LuHeart size={32} style={{ position: 'absolute', top: '40', right: '70' }}/>
                        <img
                            src={item.image}
                            alt={`Imagem do ${item.category}`}
                        />
                        <p className="plate-name">{item.name}  <MdKeyboardArrowRight size={18} /></p>
                        <p className="plate-description">{item.description}</p>
                        <p className="plate-price">R$ {item.price}</p>
                    </div>
                

                    <div className="add-cart">
                        <ItensCount onCountChange={ handleCountChange }></ItensCount>
                            <Button title="Incluir"></Button>
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