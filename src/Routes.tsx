import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './products/pages/Products';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
