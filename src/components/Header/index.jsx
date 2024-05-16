import { Container, Search } from './styles'
import { LogoFoodExplorer } from '../Logo/Logo'
import { Button } from '../Button/styles'

import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

export function Header(){
  return (
    <Container>
    <LogoFoodExplorer/>
    <Search>{children}</Search> 

    <Button title="Pedidos"></Button>
    
    <div>
    <FaUserEdit size='2rem' />
    <RxExit size='2rem' />
    </div>
</Container>
  )
}
