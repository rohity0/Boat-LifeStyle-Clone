import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AppContextProvider } from './Context/AppContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AppContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppContextProvider>
    </ChakraProvider>
);

