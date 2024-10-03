import { Container } from './styles'
import { Input } from '../Input'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api';

export const SearchInput = ({plate}) => {
  const [ search, setSearch ] = useState('')
  const [ results, setResults ] = useState([])
  const { id } = useParams() 
  const navigate = useNavigate()

  const handleSearch = async (event) => {
    const query = event.target.value
    setSearch(query)

    if(query.trim() === ''){
      setResults([])
      return
    }

    try {
      const response = await api.get(`/plates?search=${query}`)
      setResults(response.data)
    } catch (error) {
      console.error("Erro ao buscar pratos e/ou ingredientes", error)
    }
  }

  const handleDetails = (id) => {
    navigate(`/plates/${id}`)
}

  return (
    <Container>
      <Input
            icon={ IoIosSearch }
             placeholder="Busque por pratos ou ingredientes"
             onChange={ handleSearch }
             value={search}>
      </Input>

      {
        results.length > 0 && (
          <div className='search-results'>
            <ul>
              {results.map((plate) => (
                <li key={plate.id}
                    onClick={() => handleDetails(plate.id)}>
                    {plate.name}
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </Container>  
  )
}
