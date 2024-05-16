import React from 'react'
import ReactDOM from 'react-dom/client'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import  GlobalStyles from './styles/global.js'

import App from './App.jsx'
import './index.css'
import SignUp from './pages/SignUp/SignUp.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)
