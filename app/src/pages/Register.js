/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
    };

    this.handleChange = this.handleChange.bind(this);
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
          <h1 className="title is-1">Register</h1>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Username"
                id="registerEmailInput"
                onChange={e => this.handleChange('email', e.target.value)}
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
              <input
                type="password"
                className="input"
                placeholder="Confirm password"
                id="registerConfirmPasswordInput"
                onChange={e => this.handleChange('confirmPassword', e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
