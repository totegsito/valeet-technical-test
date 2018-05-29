import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoutesComponent from '../router';

import { logout } from '../store/actions/user';

const Routes = ({
  user,
  loading,
  errorMessage,
  successMessage,
  onLogoutSubmit,
}) => (
  <RoutesComponent
    user={user}
    loading={loading}
    error={errorMessage}
    success={successMessage}
    onLogoutSubmit={onLogoutSubmit}
  />
);

Routes.propTypes = {
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  user: PropTypes.shape({}).isRequired,
  onLogoutSubmit: PropTypes.func.isRequired,
};

Routes.defaultProps = {
  loading: false,
  errorMessage: null,
  successMessage: null,
};

const mapStateToProps = state => ({
  user: state.user || {},
  loading: state.status.loading || false,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
});

const mapDispatchToProps = {
  onLogoutSubmit: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
