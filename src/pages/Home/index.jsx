import { Container, HomeImage } from './style'
import { useState, useEffect } from "react";
import homeFrame from '../../assets/outras/homeFrame.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'

import { api } from '../../services/api'

export function Home(){
  const [allPlates, setAllPlates] = useState([]);

  const platesByCategory = {
    refeicao: allPlates.filter(plate => plate.category === "Refeição"),
    bebidas: allPlates.filter(plate => plate.category === "Bebidas"),
    sobremesa: allPlates.filter(plate => plate.category === "Sobremesa"),
  }

  useEffect(() => {
    async function fetchPlates() {
      try {
        const response = await api.get("/plates");
        setAllPlates(response.data);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }
    fetchPlates();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <HomeImage>
          <div className='banner-container'>
            <img src={homeFrame} />
            <div className="banner-p">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </HomeImage>

          <div className="category">
            <h1>Refeições</h1>
            <swiper-container
              slides-per-view="3"
              css-mode="true"
              space-between="32"
              loop="true"
              pagination={{ clickable: true }}
              navigation="true"
            >
              {platesByCategory.refeicao.map((plate, index) => (
                <swiper-slide key={`${plate.id}-${index}`}>
                  <Card plate={plate} />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        
          <div className="category">
            <h1>Bebidas</h1>
            <swiper-container
              slides-per-view="3"
              css-mode="true"
              space-between="32"
              loop="true"
              pagination={{ clickable: true }}
              navigation="true"
            >
              {platesByCategory.bebidas.map((plate, index) => (
                <swiper-slide key={`${plate.id}-${index}`}>
                  <Card plate={plate} />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
      
          <div className="category">
            <h1>Sobremesas</h1>
            <swiper-container
              slides-per-view="3"
              css-mode="true"
              space-between="32"
              loop="true"
              pagination={{ clickable: true }}
              navigation="true"
            >
              {platesByCategory.sobremesa.map((plate, index) => (
                <swiper-slide key={`${plate.id}-${index}`}>
                  <Card plate={plate} />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
      </main>

    <Footer/>
    </Container>
  )
}

