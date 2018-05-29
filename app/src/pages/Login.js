/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.onLoginSubmit(this.state);
  }

  handleChange(field, val) {
    this.setState({
      ...this.state,
      [field]: val,
    });
  }

  render() {
    return (
      <section className="columns">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title is-1">Login</h1>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Username"
                id="registerEmailInput"
                onChange={e => this.handleChange('username', e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                type="password"
                className="input"
                placeholder="Password"
                id="registerPasswordInput"
                onChange={e => this.handleChange('password', e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={this.handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
};

export default Login;
