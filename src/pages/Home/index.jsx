import { Container } from './style'
import homeFrame from '../../assets/outras/home_frame.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Home(){
  return (
    <Container>
      <Header/>
      <main>
        <img src={homeFrame}/>

      </main>

    <Footer/>
    </Container>
  )
}

