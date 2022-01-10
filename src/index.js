// Ojo: Este archivo es el punto de entrada de TODA
// tu aplicacion, aquello que no se usa en este archivo
// nunca se va a ejecutar por lo tanto nunca aparecera.

// Este tipo de importaciones se estilan colocar al inicio
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Menu from './componentes/Menu/Menu';
import Home from './componentes/Home/Home';
import Nosotros from './componentes/Nosotros/Nosotros';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
  <Router>
    <div>
      <Switch>

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


