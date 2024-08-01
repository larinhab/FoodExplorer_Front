import { Container, HomeImage } from './style'
import homeFrame from '../../assets/outras/homeFrame.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'

export function Home(){
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
          
          <Card/>
      </main>

    <Footer/>
    </Container>
  )
}

