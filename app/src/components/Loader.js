import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader as BulmaLoader } from 'react-bulma-components';


const Loader = ({ loading }) => (
  <div className={`loaderContainer ${loading ? '' : 'hidden'}`}>
    <BulmaLoader />
  </div>
);

Loader.displayName = 'Loader';

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};

const mapStateToProps = state => ({
  loading: state.status.loading,
});

export default connect(mapStateToProps)(Loader);
