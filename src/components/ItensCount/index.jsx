import { Container } from './style.js'
import { useState, useEffect } from 'react'

import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export function ItensCount({ onCountChange }) {
    const [count, setCount] = useState(1);
  
    useEffect(() => {
      if (count <= 0) {
        setCount(1);
      }
  
      if (count > 99) {
        setCount(99);
      }
  
      onCountChange(count);
    }, [count, onCountChange]);
  
    return (
      <Container>
        <LuMinus onClick={() => setCount((prevCount) => prevCount - 1)} />
        <span>{count}</span>
        <LuPlus onClick={() => setCount((prevCount) => prevCount + 1)} />
      </Container>
    );
  }