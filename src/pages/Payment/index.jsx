import { Container, Section, Select, Label } from './style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input/index.jsx'
import { ButtonBack } from '../../components/ButtonBack/index.jsx'

import qrCodePix from '../../assets/pay-info/qrcode-pix.png'

import { FaCopy } from "react-icons/fa"; 
import { FaRegCopy } from "react-icons/fa"; 

import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";  

import { api } from '../../services/api.js'

export function Payment(){
    const [methodSelect, setMethodSelect ] = useState('pix')
    const [isDisable, setIsDisable] = useState(true);
    const [ cardName, setCardName ] = useState("")
    const [ cardNumber, setCardNumber ] = useState("");
    const [ cardValidate, setCardValidate ] = useState("");
    const [ cvv, setCvv ] = useState("");
    const [ price, setPrice ] = useState("");
    const navigate = useNavigate()

    function redirectAfterPayment(){
      navigate('/')
    }

    function handleCardPayment() {
      if (cardNumber.length < 12 || cardValidate.length < 4 || cvc.length < 3) {
        alert("Dados do cartão inválido.");
        return;
      }
      redirectToPayment();
      setCardNumber("");
      setCardValidate("");
      setCvc("");
    }

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
                  placeholder="Brasil"/>
              </Label>
          </div>
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

            <p>00020126330014BR.GOV.BCB.PIX0111851226370915204000053039865802BR5901N6001C62070503***6304BD4B</p>
            <Button title='Copiar Código'
                    icon={FaCopy}
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
              />
            </Label>
          </div>
          <div className='cardInfoNumbers'>
            <Label title='cardNumber'>Número do cartão
              <Input type="number" 
                     title='Número do Cartão' 
                     placeholder='0000 0000 0000 0000'
              />
            </Label>
            <Label title='cardValid'>Validade
              <Input type="month" 
                     title='Validade' 
                     placeholder='__/_____'
              />
            </Label>
          </div>
          <div className='cardFinalInfo'>
          <Label title="cardSecurityCode">CVV
              <Input type="number" 
                     title='CVV' 
                     placeholder='000'
                     maxLength="03"
              />
            </Label>

          <Label title="totalPrice">
                Valor total:
              <Input placeholder='R$00,00'/>
          </Label>
          </div>
          
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

