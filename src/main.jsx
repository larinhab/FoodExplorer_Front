import React from 'react'
import ReactDOM from 'react-dom/client'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import  GlobalStyles from './styles/global.js'

import './index.css'
import { AuthProvider } from './hooks/auth.jsx'
import { Routes } from './routes'

import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        
        <CartProvider>

        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>

        </CartProvider>
        
    </ThemeProvider>
  </React.StrictMode>,
)
