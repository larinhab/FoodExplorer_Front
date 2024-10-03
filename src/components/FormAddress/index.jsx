import { Form, Label, Select } from './style'
import { useState } from 'react';

import { Input } from "../Input"

export function FormAddress() {
    const [ isDisable, setIsDisable ] = useState(true);
  return (
    <Form className='address'>
          <h2>Dados da entrega</h2>
          <div className='street'>
            <Label htmlFor='Endereço'>Endereço
              <Input type='text'
                      placeholder='Ex.: Rua das Flores'/>
            </Label>

            <Label htmlFor='Número'>Número 
              <Input type='number'
              placeholder='Ex.:25'/>
            </Label>
          </div>

          <div className="address-complement">
              <Label htmlFor='Complemento'>Complemento
                  <Input type='text'
                  placeholder='Ex.: Bloco 1 /Apto 901'/>
              </Label>

              <Label htmlFor='Referência'>Referência
                  <Input type='text'
                  placeholder='Ex.: Em frente ao posto de gasolina'/>
              </Label>
                  
          </div>

          <div className="city-complement">
              <Label htmlFor='Bairro'>Bairro
                  <Input type='text'
                  placeholder="Ex.: Centro"/>
              </Label>

              <Label htmlFor='Cidade'>Cidade
                  <Input type='text'
                  placeholder="Ex.: Porto Alegre"/>
              </Label>
          </div>

          <div className="county-complement">
              <Label htmlFor='Estado'>Estado
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
        </Form>
  )
}
