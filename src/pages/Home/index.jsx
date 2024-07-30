import { Container } from './style'
import homeFrame from '../../assets/outras/home_frame.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'

export function Home(){
  return (
    <Container>
      <Header/>
      
      <main>
        <img className='home-img' src={homeFrame}/>
          <Card/>
      </main>

    <Footer/>
    </Container>
  )
}

