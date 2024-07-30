import { Container } from './style.js'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button/index.jsx';
import { ButtonBack } from '../../components/ButtonBack/index.jsx'
import { ItensCount } from '../../components/ItensCount/index.jsx';

import { data } from "../../utilis/data";


export function Details() {
    const [countValue, setCountValue] = useState(1);
    const navigate = useNavigate()
    const { id } = useParams()
    const item = Object.values(data)
    .flat() 
    .find((item) => item.id === parseInt(id));

    if(!item) {
        return <div>Prato não encontrado</div>
    }

    const handleCountChange = (newValue) => {
        setCountValue(newValue);
      };

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
                        <ItensCount onCountChange={ handleCountChange }></ItensCount>
                            <Button title={`Incluir - R$ ${item.price}`}></Button>
                    </div>
                </div>
                </div>
            </main>

            <Footer/>
        </Container>
    )
}