import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login } from '../store/actions/user';

const Login = ({
  user,
  Layout,
  loading,
  errorMessage,
  onLoginSubmit,
}) => (
  <Layout
    user={user}
    error={errorMessage}
    loading={loading}
    onLoginSubmit={onLoginSubmit}
  />
);


Login.propTypes = {
  Layout: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

Login.defaultProps = {
  errorMessage: null,
};

const mapStateToProps = state => ({
  user: state.user || {},
  loading: state.status.loading || false,
  errorMessage: state.status.error || null,
});

const mapDispatchToProps = {
  onLoginSubmit: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
