import React from 'react'
import ReactDOM from 'react-dom/client'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import  GlobalStyles from './styles/global.js'

import './index.css'
import { Routes } from './routes'

import { AuthProvider } from './hooks/auth.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        
        <FavoritesProvider>

        <CartProvider>

        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>

        </CartProvider>
        </FavoritesProvider>
        
    </ThemeProvider>
  </React.StrictMode>,
)
