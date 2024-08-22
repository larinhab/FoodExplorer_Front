import { LogoFoodExplorer }from '../../components/Logo/index.jsx'
import { Container, Form, Section } from './style.js'
import { Button } from '../../components/Button/index.jsx'

import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom"
import { api } from '../../services/api.js'
import { useState } from 'react';

export function SignUp(){
    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const navigate = useNavigate()

    function handleSignUp(){
      if(!name || !email || !password){
        return alert("Todos os campos são obrigatórios")
      }

      api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.message){
                alert(error.message)
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }

  return (
    <Container>
      <LogoFoodExplorer></LogoFoodExplorer>

      <Section>
          <h1>Crie sua conta</h1>
          <div className='SignInForm'>
          <Form className='form'>

            <label htmlFor='name'><FiUser size='2rem'/> Nome
            </label>
            <input 
              name='name'
              placeholder='Exemplo: Maria da Silva' 
              type='text'  
              onChange={e => setName(e.target.value)}
              autoComplete="name"
              required/>
          </Form>

          <Form>
            <label htmlFor='email'><MdOutlineEmail size='2rem'/> E-mail</label>
            <input 
              name='email'
              placeholder='Exemplo: exemplo@exemplo.com.br' 
              type='text'
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              required/>
          </Form>
           
          <Form>
            <label htmlFor='password'> <RiLockPasswordLine size='2rem'/>Senha </label>
            <input 
              placeholder='No mínimo 6 caracteres' 
              type='password'  
              onChange={e => setPassword(e.target.value)}
              autoComplete="password"
              required/>
          </Form>
        </div>

        <Button title="Criar conta" onClick={handleSignUp}></Button>

         <Link to="/">Já tenho uma conta</Link> 
          
        </Section>
    </Container>
  )
}

