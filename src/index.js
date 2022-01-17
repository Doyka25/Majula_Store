// Ojo: Este archivo es el punto de entrada de TODA
// tu aplicacion, aquello que no se usa en este archivo
// nunca se va a ejecutar por lo tanto nunca aparecera.

// Este tipo de importaciones se estilan colocar al inicio
import './index.css';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';



ReactDOM.render(
  <Router>
    <div>
      <Switch>
      <Menu />
          {/* Páginas */}
          <Route exact path='/' component={Home} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/servicios' component={Servicios} /> 
          <Route path='/contacto' component={Contacto} /> 

        </Switch>
    </div>
  </Router>,
document.getElementById('root')
);


