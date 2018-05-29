import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setLoadingStatus } from '../store/actions/status';

const ComicListContainer = ({
  user,
  Layout,
  loading,
  superhero,
  setLoading,
  errorMessage,
  successMessage,
}) => (
  <Layout
    user={user}
    loading={loading}
    error={errorMessage}
    superhero={superhero}
    success={successMessage}
    setLoading={setLoading}
  />
);

ComicListContainer.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  Layout: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({}).isRequired,
  setLoading: PropTypes.func.isRequired,
  superhero: PropTypes.shape({}).isRequired,
};

ComicListContainer.defaultProps = {
  errorMessage: null,
  successMessage: null,
};

const mapStateToProps = state => ({
  user: state.user || {},
  superhero: state.superhero || {},
  loading: state.status.loading || false,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
});

const mapDispatchToProps = {
  setLoading: setLoadingStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicListContainer);
