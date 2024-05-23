import { Container, Form, Section } from './style.js'
import { LogoFoodExplorer }from '../../components/Logo/index.jsx'
import { Button } from '../../components/Button/index.jsx'

import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import { useAuth } from '../../hooks/auth.jsx';

import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return (
    <Container>
      <LogoFoodExplorer></LogoFoodExplorer>

      <Section>
          <h1>Faça Login</h1>
          <div className='SignInForm'>

          <Form>
            <label for='email'><MdOutlineEmail size='2rem'/> E-mail</label>
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

        <Button title="Entrar" onClick={ handleSignIn }></Button>

        <Link to="/register">Crie uma conta</Link>
        
        </Section>
    </Container>
  )
}

