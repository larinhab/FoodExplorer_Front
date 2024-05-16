import { Header } from '../../components/Header'
import { Container } from './Home'

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

