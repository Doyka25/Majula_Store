// Ojo: Este archivo es el punto de entrada de TODA
// tu aplicacion, aquello que no se usa en este archivo
// nunca se va a ejecutar por lo tanto nunca aparecera.

// Este tipo de importaciones se estilan colocar al inicio
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
