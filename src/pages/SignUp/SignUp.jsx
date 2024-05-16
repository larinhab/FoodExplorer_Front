import { Container, Form, Section } from './SignUp.js'
import { LogoFoodExplorer }from '../../components/Logo/Logo.jsx'
import { Button } from '../../components/Button/Button.jsx'

import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import { useState } from 'react';

export default function SignUp(){
    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

  return (
    <Container>
      <LogoFoodExplorer></LogoFoodExplorer>

      <Section>
          <h1>Crie sua conta</h1>
          <div className='SignInForm'>
          <Form className='form'>

            <label for='name'><FiUser size='2rem'/> Nome
            </label>
            <input 
              name='name'
              placeholder='Exemplo: Maria da Silva' 
              type='text'  
              onChange={e => setName(e.target.value)}/>
          </Form>

          <Form>
            <label for='email'><MdOutlineEmail size='2rem'/> Email</label>
            <input 
              name='email'
              placeholder='Exemplo: exemplo@exemplo.com.br' 
              type='text'
              onChange={e => setEmail(e.target.value)}/>
          </Form>
           
          <Form>
            <label for='password'> <RiLockPasswordLine size='2rem'/>Senha </label>
            <input 
              placeholder='No mínimo 6 caracteres' 
              type='password'  
              onChange={e => setPassword(e.target.value)}/>
          </Form>
        </div>

        <Button title="Criar conta" onClick={""}></Button>
        <p>Já tenho uma conta</p>
        </Section>
    </Container>
  )
}

