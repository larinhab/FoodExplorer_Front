import React from 'react'
import { Container, Section } from './styles'
import { useNavigate } from 'react-router-dom'
import polygno from '../../assets/svg/polygno.svg'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utilis/roles.js'

export function LogoFoodExplorer(){
      const navigate = useNavigate()
      const { user } = useAuth()
      
      function handleBack(){
        navigate(-1)
      }
      
  return (
    <Container to="/" onClick={ handleBack }>
        <Section>            
            <img className="logo-img" src={polygno}/>
            <p className='logo-title'>food explorer</p>
        </Section>

      {
        user && user.role === 'admin' && (
            <p>admin</p>
        )
      }
    </Container>
  )
}
