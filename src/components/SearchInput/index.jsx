import { Container } from './styles'
import { Input } from '../Input'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

export const SearchInput = () => {
  const [search, setSearch] = useState({})

  return (
    <Container>
      <Input
            icon={ IoIosSearch }
             placeholder="Busque por pratos ou ingredientes"
             onChange={(e) => setSearch(e.target.value)}>
      </Input>
    </Container>  
  )
}
