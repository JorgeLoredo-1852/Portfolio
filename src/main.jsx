import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './AppRoutes'
import { ThemeProvider } from '@mui/material'
import theme from './material'
import './styles/index.css'
import './styles/Navbar.scss'
import './styles/Card.scss'
import './styles/Navigation.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
