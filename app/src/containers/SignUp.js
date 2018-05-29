import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { signUp } from '../store/actions/user';

const SignUp = ({
  user,
  Layout,
  loading,
  onSignUpSubmit,
}) => (
  <Layout
    user={user}
    loading={loading}
    onSignUpSubmit={onSignUpSubmit}
  />
);

SignUp.propTypes = {
  Layout: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  onSignUpSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.user || {},
  loading: state.status.loading || false,
});

const mapDispatchToProps = {
  onSignUpSubmit: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
