import { Container } from './style'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { ButtonBack } from '../../components/ButtonBack'

import { IoCloudUploadOutline } from "react-icons/io5";

export function NewPlate(){
    return(
        <Container>
            <Header/>
            <ButtonBack/>
            
            <main>
            <form>

            <h1>Adicionar prato</h1>   

            <div className="new-plate-container">

                <Input 
                    type="file"
                    title="plate_img"
                    placeholder="Selecione uma imagem"
                    icon={ IoCloudUploadOutline }
                    />

                <Input 
                    type="text" 
                    title="plate_title"
                    placeholder="Título"
                    onChange={(e) => setTitle(e.target.value)} />

                <Input 
                    type="text" 
                    title="plate_tags"
                    placeholder="Tags"
                    onChange={(e) => setTitle(e.target.value)} />

                <Input 
                    type="radio" 
                    title="plate_category"
                    placeholder="Categoria"
                    onChange={(e) => setTitle(e.target.value)} />

                <Input
                    type="number" 
                    title="plate_price" 
                    placeholder="R$ 00,00"/>

                <TextArea 
                    title="plate_description"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={(e) => setDescription(e.target.value)}>
                </TextArea>
                
                <Button title="Excluir Prato"></Button>
                <Button title="Salvar alterações"></Button>
            
                </div>
                </form>
                </main>
            <Footer/>
        </Container>
    )
}