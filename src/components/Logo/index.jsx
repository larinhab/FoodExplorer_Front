import React from 'react'
import polygno from '../../assets/svg/polygno.svg'
import { Container, Section } from './styles'

export function LogoFoodExplorer(){
  return (
    <Container>
        <Section>            
            <img src={polygno}/>
            <h2>food explorer</h2>
        </Section>
  
      {/* if(verifyAdminRole) {
      } 
    */}
    <p>admin</p>

    </Container>
  )
}
