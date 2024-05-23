import { Container, Search } from './styles'
import { LogoFoodExplorer } from '../Logo/index'
import { Button } from '../Button'
import { Input } from '../Input'

import { FaCartPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

import { useAuth } from '../../hooks/auth';

export function Header({children}){
  const { signOut } = useAuth()

  return (
    <Container>
      <LogoFoodExplorer/>
      
      <Input icon={ IoIosSearch }
             placeholder="Busque por pratos ou ingredientes">
      </Input>


      <Button title="Pedidos" icon={ FaCartPlus }> </Button>

    <div className='icons'>
        <FaUserEdit size={32} onClick={""}/> 
        <RxExit size={32} onClick={ signOut }/>
    </div>
</Container>
  )
}
