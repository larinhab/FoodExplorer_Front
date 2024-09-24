import { Container, Form, Label, Select, ImageLabel } from './style'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { ButtonBack } from '../../components/ButtonBack'
import { IngredientTag } from '../../components/IngredientTag';

import { IoCloudUploadOutline } from "react-icons/io5";

export function EditPlate(){
    const navigate = useNavigate()
    const { id } = useParams()

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [isDisable, setIsDisable] = useState(true);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    useEffect(() => {
        async function fetchPlate() {
            try{
                const response = await api.get(`/plates/${id}`)
                const plate = response.data
                setName(plate.name)
                setCategory(plate.category)
                setPrice(plate.price)
                setDescription(plate.description)
                setIngredients(plate.ingredients)
                setImage(plate.image)
            }catch(error){
                console.error("Erro ao buscar prato:", error)
                alert("Erro ao carregar as informações do prato.")
            }
        }
        fetchPlate()
    }, [id])

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

    const handleCategory = (category) => {
        setCategory(category);
    };

    async function handleDeletePlate(){
        const confirm = window.confirm("Deseja realmente remover o prato?")
        if(confirm) {
            try{
                await api.delete(`/plates/${id}`)
                alert("Prato deletado com sucesso", 200)
                navigate(-1)
            }catch(error){
                console.error("Erro ao deletar prato:", error)
                alert("Erro ao deletar prato.")
            }
        }
    }
    
    async function handleUpdatePlate() {
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
                await api.patch(`/plates/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                alert("Prato atualizado com sucesso", 200)
                navigate(-1)
            }catch(error){
                alert("Erro ao atualizar prato.");
                console.error(error);
            }
        }

    return(
        <Container>
            <Header/>
            <ButtonBack/>
            
            <main>
            <h1>Editar prato</h1>   
            
            <Form>
            <div className="edit-plate-container">
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
                    placeholder= { name }
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
                    ingredients.map((ingredient, index) => (
                    <IngredientTag
                        key={(index)}
                        value={ ingredient.name }
                        onClick={() => handleRemovePlateTag( ingredient )}>
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
                    placeholder={ description }
                    onChange={(e) => setDescription(e.target.value)}>
                </TextArea>
                </Label>
                
                <div className="last-container">
                    <Button title="Excluir Prato" onClick={ handleDeletePlate }></Button>
                    <Button title="Salvar alterações" onClick={ handleUpdatePlate }></Button>
                </div>
            
                </div>
                </Form>
                </main>


            <Footer/>
        </Container>
    )
}