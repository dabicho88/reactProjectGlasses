import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {EnvoltorioContextoGafa} from './components/ContextoGafas.jsx'
import './assets/css/estilos.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EnvoltorioContextoGafa>
        <App />
      </EnvoltorioContextoGafa>
    </BrowserRouter>
  </StrictMode>,
)
