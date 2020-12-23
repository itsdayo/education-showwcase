
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './../App';
import WelcomePage from './WelcomePage'
import HomePage from './HomePage'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/about" component={HomePage} /> 
    </Switch>
  </BrowserRouter>
);

export default Router;