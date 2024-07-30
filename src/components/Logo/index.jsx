import polygno from '../../assets/svg/polygno.svg'
import { useNavigate } from 'react-router-dom'
import { Container, Section } from './styles'
import React from 'react'

export function LogoFoodExplorer(){
      const navigate = useNavigate()
      
      function handleBack(){
        navigate(-1)
      }
  return (
    <Container to="/" onClick={ handleBack }>
        <Section>            
            <img className="logo-img" src={polygno}/>
            <p className='logo-title'>food explorer</p>
        </Section>
  
      {/* if(verifyAdminRole) {
      } 
    */}
    <p>admin</p>

    </Container>
  )
}
