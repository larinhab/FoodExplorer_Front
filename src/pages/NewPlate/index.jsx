import { Container, Form, Label, Select, ImageLabel } from './style'
import { useEffect, useState } from "react";

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { ButtonBack } from '../../components/ButtonBack'
import { IngredientTag } from '../../components/IngredientTag';

import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function NewPlate(){
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [isDisable, setIsDisable] = useState(true);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddPlateTags(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemovePlateTag(deleted){
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted))
    }

    async function handleImage(event) {
        const file = event.target.files[0];
        setImage(file);
    }

    async function handleCreatePlate(){
        const valueToPrice = Number(price.replace(",", "."));
        if(!name){
            return alert("Você deixou o nome vazio!")
        }

        if(!description){
            return alert("Você deixou a descrição do prato vazia!")
        }

        if(!price || valueToPrice <= 0 ){
            return alert("Você deve definir um preço!")
        }

        if(!ingredients){
            return alert("Você deixou um campo de marcador vazio!")
        }

        if(newIngredient){
            return alert("Você deixou um campo de marcador vazio!")
        }

        if (ingredients.length <= 0) {
            return alert("Adicione pelo menos um ingrediente!");
        }
        
        if(!image){
            return alert("Selecione uma imagem para o prato!")
        }

        const formData = new FormData();
            formData.append('name', name)
            formData.append('category', category)
            formData.append('price', valueToPrice)
            formData.append('description', description)
            formData.append('image', image)
            formData.append('ingredients', ingredients.join(','));
    
        try{
            await api.post("/plates", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            alert("Prato criado com sucesso", 200)
            navigate(-1)
        }catch(error){
            alert("Erro ao criar prato.");
            console.error(error);
        }
    }

    return(
        <Container>
            <Header/>
            <ButtonBack/>
            
            <main>
            <h1>Adicionar prato</h1>   
            
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
                            onChange={ handleImage }/>
                         </span>
                        </ImageLabel>
                    </div>


                <div>
                <Label htmlFor='name'>
                <p>Nome</p>
                <Input 
                    type="text" 
                    title="plate_name"
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
                    onChange={(e) => setCategory(e.target.value)}
                    value={ category }>
                    <option value="" disabled={ isDisable }>Selecione uma categoria</option>
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
                
            <div className="plate-tags">
                {ingredients &&
                    ingredients.map((ingredients, index) => (
                    <IngredientTag
                        key={String(index)}
                        value={ ingredients }
                        onClick={() => handleRemovePlateTag( ingredients )}>
                </IngredientTag>
                ))
            }

                <IngredientTag
                    $isNew
                    placeholder="Ex.: Alface"
                    value={ newIngredient }
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={ handleAddPlateTags }
            >
                </IngredientTag>
                </div>
                </Label>
                </div>

                <div className='price'>
                <Label htmlFor='price'>
                <p>Preço</p>
                <Input
                    type="number" 
                    title="plate_price" 
                    placeholder="R$ 00,00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
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
                    <Button title="Salvar alterações"
                            onClick={ handleCreatePlate }></Button>
                </div>
            
                </div>
                </Form>
                </main>
            <Footer/>
        </Container>
    )
}