
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomePage from './WelcomePage'
import HomePage from './HomePage'
import {Provider} from 'react-redux';
import {store} from './../components/state/store'
const Router = () => (
    <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/about" component={HomePage} /> 
    </Switch>
  </BrowserRouter>
  </Provider>
);

export default Router;