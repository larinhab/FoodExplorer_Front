import { Container } from "./styles";

import salad_ravanello from '../../assets/refeicoes/salad_ravanello.png'
import salad_ceasar from '../../assets/refeicoes/salad_ceasar.png'
import spaguetti_gambe from '../../assets/refeicoes/spaguetti_gambe.png'
import toast_parma from '../../assets/refeicoes/toast_parma.png'

import cooffe from '../../assets/bebidas/cooffe.png'
import juice_maracuja from '../../assets/bebidas/juice_maracuja.png'
import tea_annis from '../../assets/bebidas/tea_annis.png'
import tea_apple from '../../assets/bebidas/tea_apple.png'

import macarons from '../../assets/sobremesas/macarons.png'
import cake_damasco from '../../assets/sobremesas/cake_damasco.png'
import pastrie_peachy from '../../assets/sobremesas/pastrie_peachy.png'
import pie_ameixa from '../../assets/sobremesas/pie_ameixa.png'

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register();

export function Card({ }) {
    const refeicao = [
        {id: 1, category: 'refeição', name: 'Salada Ravanello', image: salad_ravanello , price: '29,90', description: '' },
        {id: 2, category: 'refeição', name: 'Salada Ceasar', image: salad_ceasar , price: '29,90', description: '' },
        {id: 3, category: 'refeição', name: 'Spaguetti Gambé', image: spaguetti_gambe , price: '59,90', description: '' },
        {id: 4, category: 'refeição', name: 'Torradas Parma', image: toast_parma , price: '39,90', description: '' },
    ]

    return (
        <Container> 
            <swiper-container
                slides-per-view="4"
                loop="true"
                css-mode="true"
                pagination="true"
                navigation="true"
            >
                {refeicao.map((item) =>(
                    <swiper-slide key={item.id}>
                        <img
                            src={item.image}
                            alt="Imagem do Prato"
                        />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <h3>R${item.price}</h3>
                    </swiper-slide>
                ))}

            </swiper-container>

        </Container>    
    )
}