import { Container, Form } from './style.js';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { ButtonBack } from '../../components/ButtonBack/index.jsx'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { FaUserEdit } from "react-icons/fa";

import { useState } from "react"
import { useAuth } from '../../hooks/auth.jsx';

export function Profile(){
    const { user, uptadeProfile } = useAuth() 
    const [ name, setName ] = useState(user.name) 
    const [ email, setEmail ] = useState(user.email)
    const [ passowordOld, setPasswordOld ] = useState()
    const [ passwordNew, setPasswordNew ] = useState()

    async function handleUptade(){
        const uptadeUser = { 
            name, 
            email,
            password: passwordNew,
            old_password: passowordOld
        }

        if(!passowordOld && !passwordNew){
            alert("Você precisa alterar sua senha para salvar!")
        }

        const userUpdated = Object.assign( user, uptadeUser)

        await uptadeProfile({ user: uptadeUser })
            
        navigate("/")
    }

    return(
        <Container>
            <Header/>
                <header>
                <ButtonBack/>
                </header>

                <Form>
                <div className="profile-container">
                    <FaUserEdit size={136} style={{ color: '#C4C4CC', marginLeft: '4rem'}}/>
                    <h2>Configurações de conta</h2>
                </div>
                
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange= {e => setName(e.target.value)}>
                </Input>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange= {e => setEmail(e.target.value)}>
                </Input>

                <Input
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}
                onChange= {e => setPasswordOld(e.target.value)}>
                </Input>

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange= {e => setPasswordNew(e.target.value)}>
                </Input>

                <Button title="Salvar" onClick={ handleUptade }></Button>
            </Form>

            <Footer/>
        </Container>
    )

}