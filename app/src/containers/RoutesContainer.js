import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoutesComponent from '../router';

const Routes = ({
  user,
  errorMessage,
}) => (
  <RoutesComponent
    user={user}
    error={errorMessage}
  />
);

Routes.propTypes = {
  user: PropTypes.shape({}).isRequired,
  errorMessage: PropTypes.string,
};

Routes.defaultProps = {
  errorMessage: null,
};

const mapStateToProps = state => ({
  user: state.user || {},
  errorMessage: state.status.error || null,
});

export default connect(mapStateToProps)(Routes);
