import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormContextProvider } from './context/FormContext';

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <FormContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </FormContextProvider>
  </React.StrictMode>,
);
