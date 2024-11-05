import { Container } from './style'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack/index.jsx'

import { api } from '../../services/api.js'

import { useEffect } from 'react'
import { useCart } from "../../context/CartContext"
import { useFavorites } from '../../context/FavoritesContext.jsx'

export function Favorites(){
    const { favorites, removeFavorite, fetchFavorites } = useFavorites()
    const { addToCart } = useCart()

    const formatPrice = (price) => {
        const number = parseFloat(price)
        return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    }

    useEffect(() => {
        fetchFavorites()
    }, [])
    
    return (
    <Container>
      <Header/>
    
      <ButtonBack/>
      <main>
        <h2>Meus Favoritos</h2>
        <div className="favorites-container">
        {
                favorites.length === 0 ? (
                <p>Você ainda não tem nenhum favorito!</p>
            ) : (
                <ul> 
                    {favorites.map((fav) => (
                        <li key={fav.id}>
                            <div className='fav-box'>
                                <div className='fav-info'>
                                    <table>
                                        <tbody>
                                            <tr>
                                            <td>
                                                <img className='fav-image' 
                                                     src={`${api.defaults.baseURL}/files/${fav.image}`} 
                                                     alt={`Imagem do ${fav.name}`}/>
                                            </td>
                                            
                                            <td>
                                               {fav.name}
                                            </td>
                                            <td>
                                               {formatPrice(fav.price)}
                                            </td>
                                            <td>
                                                <Button title='Comprar novamente' className="btn" onClick={() => addToCart({...fav, quantity: +1}) }></Button>
                                            </td>
                                            <td>
                                                <Button title='Remover dos favoritos' className="btn" onClick={() => removeFavorite(fav.id)}></Button>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>

      </main>

    <Footer/>
    </Container>
  )
}

