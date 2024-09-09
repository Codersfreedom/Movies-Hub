import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ChakraProvider>

        <App />
      </ChakraProvider>
    </HashRouter>
  </StrictMode>
)
