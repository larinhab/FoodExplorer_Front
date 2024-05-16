import React from 'react'
import polygno from '../../assets/svg/polygno.svg'
import { Container } from './styles'

export function LogoFoodExplorer(){
  return (
    <Container>
            <img src={polygno}/>
            <h2>food explorer</h2>
    </Container>
  )
}
