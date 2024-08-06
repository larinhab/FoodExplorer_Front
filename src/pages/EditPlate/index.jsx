import { Container, Form, Label, Select, ImageLabel } from './style'
import { useEffect, useState } from "react";

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { ButtonBack } from '../../components/ButtonBack'

import { IoCloudUploadOutline } from "react-icons/io5";

export function EditPlate(){
    return(
        <Container>
            <Header/>
            <ButtonBack/>
            
            <main>
            <h1>Editar prato</h1>   
            
            <Form>
            <div className="new-plate-container">
                <div className="first-container">
                    <div>
                        <p>Imagem do prato</p>
                        <ImageLabel htmlFor='image'> 
                        <IoCloudUploadOutline size={32}/>
                        <span>Selecione a imagem
                        <input 
                            type="file"
                            title="plate_img"
                            id='input-file'
                            onChange={(e) => setImage}/>
                         </span>
                        </ImageLabel>
                    </div>


                <div>
                <Label htmlFor='name'>
                <p>Nome</p>
                <Input 
                    type="text" 
                    title="plate_title"
                    placeholder="Ex.: Salada Ceasar"
                    onChange={(e) => setName(e.target.value)} />
                </Label>
                </div>
                
                <div>
                <Label htmlFor='category'>
                <p>Categoria</p>
                <Select
                    type="select" 
                    title="plate_category"
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebidas">Bebida</option>
                </Select>
                </Label>
                    </div>
                </div>

                <div className="second-container">
                <div>

                <Label htmlFor='ingredients'>
                <p>Ingredientes</p>
                <Input 
                    type="text" 
                    title="plate_tags"
                    placeholder="Tags"
                    onChange={(e) => setIngredients(e.target.value)} />
                </Label>
                </div>

                <div>
                <Label htmlFor='price'>
                <p>Preço</p>
                <Input
                    type="number" 
                    title="plate_price" 
                    placeholder="R$ 00,00"
                    onChange={(e) => setValue(e.target.value)}/>
                </Label>
                </div>
                </div>

                <Label htmlFor='description'>
                <p>Descrição</p>
                <TextArea 
                    title="plate_description"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={(e) => setDescription(e.target.value)}>
                </TextArea>
                </Label>
                
                <div className="last-container">
                    <Button title="Excluir Prato"></Button>
                    <Button title="Salvar alterações"></Button>
                </div>
            
                </div>
                </Form>
                </main>


            <Footer/>
        </Container>
    )
}