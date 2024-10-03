import { Container, Section, Select, Label } from './style'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input/index.jsx'
import { ButtonBack } from '../../components/ButtonBack/index.jsx'

import qrCodePix from '../../assets/pay-info/qrcode-pix.png'

import { FaCopy, FaCheck } from "react-icons/fa"; 

import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";  

import { api } from '../../services/api.js'
import { useCart } from '../../context/CartContext.jsx'

export function Payment({plate}){
    const [ methodSelect, setMethodSelect ] = useState('pix')
    const [ isDisable, setIsDisable ] = useState(true);
    const [ cardName, setCardName ] = useState("")
    const [ cardNumber, setCardNumber ] = useState("");
    const [ cardValidate, setCardValidate ] = useState("");
    const [ cardCvv, setCardCvv ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ textCopied, setTextCopied ] = useState(false)

    const { cartItems } = useCart()

    const codeRef = useRef(null)
    const navigate = useNavigate()

    const handleCopy = () => {
      if (codeRef.current){
        const text = codeRef.current.innerText 
        navigator.clipboard.writeText(text)
        setTextCopied(true)
        setTimeout(() => setTextCopied(false), 5000)
      }
    }

    function redirectAfterPayment(){
      navigate('/')
    }

    function handleCardPayment() {
      if (cardNumber.length < 12 || cardValidate.length < 4 || cardCvv.length < 3) {
        alert("Dados do cartão inválido.");
        return;
      }
      redirectToPayment();
      setCardNumber("");
      setCardValidate("");
      setCvc("");
    }

    const total = cartItems.reduce((acc, item) => {
      const quantity = typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity, 10);
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace('R$', '').replace(',', '.')) : item.price;
      return acc + (price * quantity);
  }, 0);

    const totalFormatted = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
    <Container>
      <Header/>
    
      <ButtonBack/>
      <main>
        <form className='address'>
          <h2>Dados da entrega</h2>
          <div className='street'>
            <Label title='Endereço'>Endereço
              <Input type='text'
                      placeholder='Ex.: Rua das Flores'/>
            </Label>

            <Label title='Número'>Número 
              <Input type='number'
              placeholder='Ex.:25'/>
            </Label>
          </div>

          <div className="address-complement">
              <Label title='Complemento'>Complemento
                  <Input type='text'
                  placeholder='Ex.: Bloco 1 /Apto 901'/>
              </Label>

              <Label title='Referência'>Referência
                  <Input type='text'
                  placeholder='Ex.: Em frente ao posto de gasolina'/>
              </Label>
                  
          </div>

          <div className="city-complement">
              <Label title='Bairro'>Bairro
                  <Input type='text'
                  placeholder="Ex.: Centro"/>
              </Label>

              <Label title='Cidade'>Cidade
                  <Input type='text'
                  placeholder="Ex.: Porto Alegre"/>
              </Label>
          </div>

          <div className="county-complement">
              <Label title='Estado'>Estado
              <Select
                type="select"
                title="Estado"
                value={''}
              >
  <option value="" disabled={isDisable}>Selecione um estado</option>
  <option value="AC">Acre</option>
  <option value="AL">Alagoas</option>
  <option value="AP">Amapá</option>
  <option value="AM">Amazonas</option>
  <option value="BA">Bahia</option>
  <option value="CE">Ceará</option>
  <option value="DF">Distrito Federal</option>
  <option value="ES">Espírito Santo</option>
  <option value="GO">Goiás</option>
  <option value="MA">Maranhão</option>
  <option value="MT">Mato Grosso</option>
  <option value="MS">Mato Grosso do Sul</option>
  <option value="MG">Minas Gerais</option>
  <option value="PA">Pará</option>
  <option value="PB">Paraíba</option>
  <option value="PR">Paraná</option>
  <option value="PE">Pernambuco</option>
  <option value="PI">Piauí</option>
  <option value="RJ">Rio de Janeiro</option>
  <option value="RN">Rio Grande do Norte</option>
  <option value="RS">Rio Grande do Sul</option>
  <option value="RO">Rondônia</option>
  <option value="RR">Roraima</option>
  <option value="SC">Santa Catarina</option>
  <option value="SP">São Paulo</option>
  <option value="SE">Sergipe</option>
  <option value="TO">Tocantins</option>
              </Select>

              </Label>

              <Label title='País'>País
                  <Input type='text'
                  placeholder="Brasil"
                  value='Brasil'
                  readOnly
                  />
              </Label>
          </div>
                <Label className='saveAddress' title='Salvar Endereço'>Salvar como endereço principal
                <input className='saveAddressInput' type='checkbox'/>
              </Label>
        </form>

          <Section>
          <h2>Pagamento</h2>
          <div className='payment-method'>
            <Button title="Pix"
                    onClick={() => setMethodSelect('pix')}
                    icon={FaPix}
            />
            <Button title="Cartão de crédito"
                    onClick={() => setMethodSelect('credit')}
                    icon={FaRegCreditCard}
            />
          </div>
          
          {methodSelect === "pix" ? (
            <div className='qrCode'>
            <img
              src={qrCodePix}
              className='qrCodeImg'
            />

            <p ref={codeRef}>00020126330014BR.GOV.BCB.PIX0111851226370915204000053039865802BR5901N6001C62070503***6304BD4B</p>
            <Button title= {textCopied ? 'Código copiado'  : 'Copiar Código'}
                    icon={textCopied ? FaCheck : FaCopy  }
                    onClick={handleCopy}
             >    
            </Button>
          </div>
        ) : ( 

          <form className='payment'>
          <div className='custumer-info'>
          <Label title='cardName'>Nome do Titular
              <Input type="text" 
                      title='Nome do Titular'
                      placeholder='Ex.: Joana Oliveira Santos' 
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
              />
            </Label>
          </div>
          <div className='cardInfoNumbers'>
            <Label title='cardNumber'>Número do cartão
              <Input type="number" 
                     title='Número do Cartão' 
                     placeholder='0000 0000 0000 0000'
                     value={cardNumber}
                     onChange={(e) => setCardNumber(e.target.value)}
              />
            </Label>
            <Label title='cardValid'>Validade
              <Input type="month" 
                     title='Validade' 
                     placeholder='__/_____'
                     value={cardValidate}
                     onChange={(e) => setCardValidate(e.target.value)}
              />
            </Label>
          </div>
          <div className='cardFinalInfo'>
          <Label title="cardSecurityCode">CVV
              <Input type="number" 
                     title='CVV' 
                     placeholder='000'
                     maxLength="03"
                     value={cardCvv}
                     onChange={(e) => setCardCvv(e.target.value)}
              />
            </Label>

          <Label title="totalPrice">
                Valor total:
              <Input placeholder={totalFormatted} readOnly/>
          </Label>
          </div>
              <Label className='saveCard' title='Salvar Cartão'>Salvar Cartão
                <input className='saveCardInput' 
                       type='checkbox'
                       onClick={handleCardPayment}/>
              </Label>
        </form>
        )}
          
        </Section>

          <Button className="finishedBtn" 
                  title="Finalizar compra"
                  onClick={redirectAfterPayment}
          />
      </main>

    <Footer/>
    </Container>
  )
}

