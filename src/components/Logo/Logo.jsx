import React from 'react'
import polygno from '../../assets/svg/polygno.svg'
import { Container } from './Logo'

export function LogoFoodExplorer(){
  return (
    <Container>
            <img src={polygno}/>
            <h1>food explorer</h1>
    </Container>
    
  )
}
