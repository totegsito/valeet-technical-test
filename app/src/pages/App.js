/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bulma-components';

import Header from '../components/Header';
import Loader from '../components/Loader';

class AppContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="main-container">
        <Header />
        <Loader />
        <main>
          <Container>
            { children }
          </Container>
        </main>
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({})]).isRequired,
};

export default AppContainer;
