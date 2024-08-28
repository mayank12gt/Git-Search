import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  //random comment
  <React.StrictMode>

   <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
