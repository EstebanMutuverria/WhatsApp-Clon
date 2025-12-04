import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  /* 
  Habilitamos todas las funcionalidades de react router en nuestro proyecto
  */
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
