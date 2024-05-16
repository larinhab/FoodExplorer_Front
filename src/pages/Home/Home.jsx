import { Container } from './Home'
import homeFrame from '../../assets/outras/home_frame.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function Home(){
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

