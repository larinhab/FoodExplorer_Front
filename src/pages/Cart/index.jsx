import { Container } from './style.js';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button/index.jsx';
import { ButtonBack } from '../../components/ButtonBack/index.jsx'
import { TextArea } from '../../components/TextArea/index.jsx';

import { BsCartXFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';

import { useCart } from '../../context/CartContext.jsx';

export function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart()
    const navigate = useNavigate()

    const total = cartItems.reduce((acc, item) =>{
        const quantity = typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity, 10);
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('R$', '').replace(',', '.')) : item.price

        return acc + (price * quantity)
    }, 0)

    const totalFormatted = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const handlePayment = () => {
        navigate(`/payment`)
    }

    return(
        <Container>
            <Header/>

            <ButtonBack/>

            <main>
                <h2>Meus Pedidos</h2>
                <div className='cart-container'>
            {
                cartItems.length === 0 ? (
                <p>Você ainda não adicionou nenhum pedido!</p>
            ) : (
                <ul> 
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div className='cart-item'>
                                <div className='item-info'>
                                    <table>
                                        <tbody>
                                            <tr>
                                            <td>
                                                <img className='cart-image' src={item.image} alt={`Imagem do ${item.name}`}/>
                                            </td>
                                            <td>
                                               {item.name}
                                            </td>

                                            <td>
                                               {item.quantity}
                                            </td>

                                            <td>
                                               R${item.price}
                                            </td>
                                            <td>
                                                <Button title='Remover' onClick={() => removeFromCart(item.id)}></Button>
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
            {
            cartItems.length > 0 && (

                <div className='cart-closing'>
                    <div>
                        <p>Observação:</p>
                        <TextArea placeholder="Ex.: Sem cebola na minha salada :)"></TextArea>
                    </div>
                    <div className='cart-buttons'>
                    <p>Total: {totalFormatted} </p>
                        <Button title='Pagamento' 
                                icon={ BsFillCartCheckFill }
                                onClick={ handlePayment }></Button>
                        <Button title='Limpar carrinho' 
                                icon={ BsCartXFill } 
                                onClick={ clearCart }></Button>
                </div>
                    </div>
            )}
                </div>
            </main>
            
            <Footer/>
        </Container>
    )
}