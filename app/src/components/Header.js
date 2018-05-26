/* eslint-disable */
import React from 'react';
import {
  Navbar,
} from 'react-bulma-components';
import {
  Link,
} from 'react-router-dom';


const Header = () => (
  <Navbar color="primary">
    <Navbar.Menu>
      <Navbar.Container position="end">
        <Link to="login" className="navbar-item">Login</Link>
        <Link to="register" className="navbar-item">Register</Link>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>

);

export default Header;
