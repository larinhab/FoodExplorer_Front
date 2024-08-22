import { Container } from './style'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack/index.jsx';

import { data } from "../../utilis/data";
import { api } from '../../services/api.js';

import { useAuth } from '../../hooks/auth';
import { useCart } from "../../context/CartContext";
import { useFavorites } from '../../context/FavoritesContext.jsx'

export function Favorites(){
    const { favorites, removeFavorite, } = useFavorites()
    const { addToCart } = useCart()
    
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
                                                <img className='fav-image' src={`${api.defaults.baseURL}/images/${fav.image}`} alt={`Imagem do ${fav.name}`}/>
                                            </td>
                                            <td>
                                               {fav.name}
                                            </td>

                                            <td>
                                               {fav.quantity}
                                            </td>

                                            <td>
                                               R${fav.price}
                                            </td>
                                            <td>
                                                <Button title='Remover dos favoritos' onClick={() => removeFavorite(fav.id)}></Button>
                                                <Button title='Comprar novamente' onClick={() => addToCart }></Button>
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

