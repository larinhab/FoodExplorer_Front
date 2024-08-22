import { Input } from '../Input'
import { Button } from '../Button'
import { Container } from './styles'
import { LogoFoodExplorer } from '../Logo/index'

import { BsCartPlusFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { LuHeart } from "react-icons/lu";

import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useFavorites } from '../../context/FavoritesContext.jsx'

import { USER_ROLE } from '../../utilis/roles.js'

export function Header({ children }){
  const { favorites } = useFavorites()
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

  const handleFavoritesPage = () => {
    navigate(`/favorites`)
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
        { favorites.length > 0 && (
          <LuHeart size={32} 
                  onClick={ handleFavoritesPage } />
        )}
        <RxExit size={32} onClick={ signOut }/>
    </div>
</Container>
  )
}
