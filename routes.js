import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Catalog from './components/Catalog';
import Single from './components/Single';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import NotMatched from './components/NotMatched';

const AppRoutes = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Route component={Header} />
      
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/type/:type(\w+)" component={Catalog} />
        <Route exact path="/notfound" component={NotFound} />

        <Route exact path="/notmatched" component={NotMatched} />
        <Route exact path="/:name(\w+)" component={Single} />

        <Redirect to="/notfound" component={NotFound} />
      </Switch>

      <Cart />
    </div>
  </BrowserRouter>
);

export default AppRoutes;