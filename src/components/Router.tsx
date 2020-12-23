
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './../App';
import WelcomePage from './WelcomePage'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      {/* <Route path="/store/:storeId" component={App} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;