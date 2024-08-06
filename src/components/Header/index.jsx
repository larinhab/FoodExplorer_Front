import { Input } from '../Input'
import { Button } from '../Button'
import { Container } from './styles'
import { LogoFoodExplorer } from '../Logo/index'

import { BsCartPlusFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { RxExit } from "react-icons/rx";

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { USER_ROLE } from '../../utilis/roles.js'

export function Header({children}){
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const handleCart = () => { 
    navigate(`/cart`)
  }

  const handleProfile = () => {
    navigate(`/profile`)
  }

  const handleNewPlate = () => {
    navigate(`/newplate`)
  }

  return (
    <Container>
      <LogoFoodExplorer/>
      
      <Input icon={ IoIosSearch }
             placeholder="Busque por pratos ou ingredientes">
      </Input>

      { user && user.role === 'admin' ? (
          <Button title="Novo prato" 
                  size={28} 
                  icon={ LuPlus } 
                  onClick={ handleNewPlate }> 
          </Button>
        ) : (
          <Button title="Pedidos" 
                  icon={ BsCartPlusFill } 
                  onClick={ handleCart }> 
          </Button>
        )
      }

    <div className='icons'>
        <FaUserEdit size={32} onClick={ handleProfile }/> 
        <RxExit size={32} onClick={ signOut }/>
    </div>
</Container>
  )
}
