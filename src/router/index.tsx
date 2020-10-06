import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Help, Home } from '../views';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/help' component={Help} />
      </Switch>
    </BrowserRouter>
  );
};
