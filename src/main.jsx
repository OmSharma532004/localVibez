import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // Import BrowserRouter
import './index.css'
import App from './App.jsx'
import ScrollToTop from './Components/Common/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
