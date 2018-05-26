import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loader from '../components/Loader';

const AppContainer = ({ children }) => (
  <div className="main-container">
    <Header />
    <Loader />
    <main>
      { children }
    </main>
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AppContainer;
