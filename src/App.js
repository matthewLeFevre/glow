import React from 'react';
import './App.scss';
import Header from './ui/header/Header';
import View from './ui/view/View';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import ColorView from './ui/view/color/color-view';
import Modal from './ui/modal/Modal';
import TypeView from './ui/view/TypeView';
import Home from './ui/view/Home';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/color" exact={true} component={ColorView} />
          <Route path="/type" exact={true} component={TypeView} />
        </Switch>
      </BrowserRouter>
      <footer></footer>
    </>
  );
}

export default App;
