import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './AppRoutes'
import { ThemeProvider } from '@mui/material'
import theme from './material'
import './styles/index.css'
import './styles/JG.scss'
import './styles/Card.scss'
import './styles/Navigation.scss'
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import { NewNav, JGx } from './components'
import { App } from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
