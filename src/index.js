import './index.css';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import {ItemDetail, ItemCount, ItemDetailContainer,ItemList, ItemListContainer} from '../components/Menu';


ReactDOM.render(

  <Router>
    <div>
      <Switch>
      <Menu />
      <ItemDetail />
      <ItemCount />
      <ItemDetailContainer />
      <ItemList />
      <ItemListContainer />

        </Switch>
    </div>
  </Router>,
document.getElementById('root')
);


