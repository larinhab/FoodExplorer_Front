import { Container, Form, Section } from './SignIn.js'
import { LogoFoodExplorer }from '../../components/Logo/Logo.jsx'
import { Button } from '../../components/Button'

import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <LogoFoodExplorer></LogoFoodExplorer>

      <Section>
          <h1>Faça Login</h1>
          <div className='SignInForm'>

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

        <Button title="Entrar" onClick={''}></Button>
        <p>Crie uma conta</p>
        </Section>
    </Container>
  )
}

