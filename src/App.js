import React from "react";
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from 'react';
import Menu from './components/Menu/Menu';
import ItemListContainer from './components/Menu/ItemListContainer';
import ItemDetailContainer from './components/Menu/ItemDetailContainer';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Fragment>
      <Menu />
 
  <Switch>
    <Route exact path="/" component={ItemListContainer} />
    <Route path="/itemDetail/:id" component={ItemDetailContainer} />
    <Route path="category/:categoryId" component={ItemListContainer} />
  
  </Switch>
  </Fragment>
    
    </BrowserRouter>
    </div>)
    ;
  }
export default App;