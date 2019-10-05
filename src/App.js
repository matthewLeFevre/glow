import React from 'react';
import './App.scss';
import Header from './ui/header/Header';
import View from './ui/view/View';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import ColorView from './ui/view/color/color-view';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={View} />
          <Route path="/color" exact={true} component={ColorView} />
        </Switch>
      </BrowserRouter>
      <footer></footer>
    </>
  );
}

export default App;
