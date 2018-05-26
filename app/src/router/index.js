/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Loader from '../components/Loader';

// eslint-disable-next-line react/prefer-stateless-function
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar is-primary">
            <div className="navbar-brand">
              <NavLink className="navbar-item" to="/">Home</NavLink>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end" position="end">
                <NavLink to="login" className="navbar-item">Login</NavLink>
                <NavLink to="register" className="navbar-item">Register</NavLink>
              </div>
            </div>
          </nav>
          <Loader />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/login"
                component={Login}
              />
              <Route
                path="/register"
                component={Register}
              />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
