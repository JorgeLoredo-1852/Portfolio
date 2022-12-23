import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './AppRoutes'
import './styles/index.css'
import './styles/Navbar.scss'
import './styles/Card.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
