/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

import Login from '../pages/Login';
import LoginContainer from '../containers/Login';

import ComicsList from '../pages/ComicsList';
import ComicsListContainer from '../containers/ComicsList';

import Notification from '../containers/Notification';

import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Loader from '../components/Loader';

// eslint-disable-next-line react/prefer-stateless-function
class Routes extends Component {
  render() {
    const { user, error } = this.props;
    console.log(user);
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar is-primary">
            <div className="navbar-brand">
              <NavLink className="navbar-item" to="/">Home</NavLink>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end" position="end">
                {
                  (!user || !user.isLoggedIn) &&
                  [
                    <NavLink key="login" to="login" className="navbar-item">Login</NavLink>,
                    <NavLink
                      key="register"
                      to="register"
                      className="navbar-item"
                    >
                      Register
                    </NavLink>,
                  ]
                }
              </div>
            </div>
          </nav>
          <Loader />
          <main className="container is-warning">
            {
              error &&
              <Notification message={error} />
            }
            <Switch>
              <Route
                exact
                path="/"
                render={props =>
                  (user.loggedIn ?
                    <ComicsListContainer {...props} Layout={ComicsList} /> :
                    <Home {...props} />)
                }
              />
              <Route
                path="/login"
                render={props => (
                  user.loggedIn ?
                    <Redirect to="/home" /> :
                    <LoginContainer {...props} Layout={Login} />
                )}
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

Routes.propTypes = {
  user: PropTypes.shape({}).isRequired,
  error: PropTypes.string,
};

Routes.defaultProps = {
  error: null,
};


export default Routes;
