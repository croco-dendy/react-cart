import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Cart from '~/pages/Cart';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    {/* GitHub pages */}
    <Route exact path="/react-cart" component={Home} />
  </Switch>
);

export default Routes;
