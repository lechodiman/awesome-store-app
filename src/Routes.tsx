import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './products/pages/Product';
import Products from './products/pages/Products';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/:productId">
          <Product />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
