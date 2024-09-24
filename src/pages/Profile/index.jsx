import { Container, Form } from './style.js';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { ButtonBack } from '../../components/ButtonBack/index.jsx'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { FaUserEdit } from "react-icons/fa";

import { useState } from "react"
import { api } from '../../services/api.js';
import { useAuth } from '../../hooks/auth.jsx';
import { useNavigate, useParams } from "react-router-dom";

export function Profile(){
    const { user, signOut, updateProfile  } = useAuth() 
    const [ name, setName ] = useState(user.name) 
    const [ email, setEmail ] = useState(user.email)
    const [ passwordOld, setPasswordOld ] = useState()
    const [ passwordNew, setPasswordNew ] = useState()
    const { id } = useParams()

    const navigate = useNavigate();

    async function handleUpdate(){
        const updateUser = { 
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        if(!passwordOld && !passwordNew){
            alert("Você precisa alterar sua senha para salvar!")
            return
        }

        try {
            await updateProfile({ user: updateUser })
            alert("Senha atualizada com sucesso, por favor faça login novamente!")
            signOut()
            navigate("/")
        } catch (error) {
            console.error("Erro ao atualizar senha", error)
        }
        
    }

    async function handleDeleteUser(id){
        const confirm = window.confirm("Deseja realmente excluir sua conta? :(")

        if(confirm){
            try{
                await api.delete(`/users/${id}`)
                signOut()
                navigate("/register")
            }catch(error){
                console.error("Erro ao excluir conta", error)
            }
        }
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
                onChange= {e => setName(e.target.value)}
                autoComplete="name">
                </Input>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange= {e => setEmail(e.target.value)}
                autoComplete="email"
                required>
                </Input>

                <Input
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}
                onChange= {e => setPasswordOld(e.target.value)}
                autoComplete="current-password"
                required>
                </Input>

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange= {e => setPasswordNew(e.target.value)}
                autoComplete="new-password"
                required>
                </Input>

                <div className="btn-container">
                    <Button title="Salvar" onClick={ handleUpdate }></Button>
                    <Button title="Excluir conta" onClick={ () => handleDeleteUser(user.id) }></Button>
                </div>
            </Form>

            <Footer/>
        </Container>
    )

}