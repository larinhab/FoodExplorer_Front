import React from 'react'
import ReactDOM from 'react-dom/client'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import  GlobalStyles from './styles/global.js'

import './index.css'
import { AuthProvider } from './hooks/auth.jsx'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        
        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
