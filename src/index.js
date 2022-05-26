import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { KinoProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KinoProvider>
         <App />   
    </KinoProvider>
  </React.StrictMode>
);

