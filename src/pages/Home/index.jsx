import { Container, HomeImage } from './style'
import homeFrame from '../../assets/outras/homeFrame.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'

import { data } from "../../utilis/data";

export function Home(){
  const categories = [
    { title: "Refeições", items: data.refeicao },
    { title: "Bebidas", items: data.bebidas },
    { title: "Sobremesas", items: data.sobremesas }
    ];


  return (
    <Container>
      <Header/>
      
      <main>
        <HomeImage>
          <div className='banner-container'>
            <img src={homeFrame}/>
            <div className="banner-p">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </HomeImage>

          
        {categories.map((category, index) => (
                <div className="card-container" key={index}>
                    <h1>{category.title}</h1>
                    <swiper-container
                        slides-per-view="3"
                        css-mode="true"
                        space-between="32"
                        loop="true"
                        pagination={{ clickable: true }}
                        navigation="true"
                    >
                        {category.items.map((item) => (
                            <swiper-slide key={item.id}>
                                <Card plate_id={item.id} item={item} />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            ))}
      </main>

    <Footer/>
    </Container>
  )
}

