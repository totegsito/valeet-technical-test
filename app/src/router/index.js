import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../pages/App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

// eslint-disable-next-line react/prefer-stateless-function
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route path="" component={Home} />
          <Route
            path="login"
            component={Login}
          />
          <Route path="*" component={NotFound} />
        </App>
      </BrowserRouter>
    );
  }
}

export default Routes;
