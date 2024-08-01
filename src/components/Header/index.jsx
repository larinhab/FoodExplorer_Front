import { Container, Search } from './styles'
import { LogoFoodExplorer } from '../Logo/index'
import { Button } from '../Button'
import { Input } from '../Input'

import { BsCartPlusFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Header({children}){
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleCart = () => { 
    navigate(`/cart`)
  }

  const handleProfile = () => {
    navigate(`/profile`)
  }

  return (
    <Container>
      <LogoFoodExplorer/>
      
      <Input icon={ IoIosSearch }
             placeholder="Busque por pratos ou ingredientes">
      </Input>

      {/* if(verifyAdminRole) {
        <Button title="Novo prato" icon={ <LuPlus /> }> </Button>
      } 
      */}
      <Button title="Pedidos" icon={ BsCartPlusFill } onClick={ handleCart }> </Button>

    <div className='icons'>
        <FaUserEdit size={32} onClick={ handleProfile }/> 
        <RxExit size={32} onClick={ signOut }/>
    </div>
</Container>
  )
}
