import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeContextProvider from './Contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  /* 
  Habilitamos todas las funcionalidades de react router en nuestro proyecto
  */
  <ThemeContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeContextProvider>
)
