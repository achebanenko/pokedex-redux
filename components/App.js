import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Catalog from './Catalog';
import Single from './Single';
import Cart from './Cart';
import NotFound from './NotFound';
import NotMatched from './NotMatched';

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Route component={Header} />
      
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/type/:type(\w+)" component={Catalog} />
        
        <Route exact path="/notmatched" component={NotMatched} />
        <Route exact path="/:name(\w+)" component={Single} />

        { /* 404 */}
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" component={NotFound} />
      </Switch>

      <Cart />
    </div>
  </BrowserRouter>
);

export default App;