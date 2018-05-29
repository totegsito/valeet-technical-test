import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comic from '../components/Comic';

const ComicContainer = ({
  comic,
}) => (
  <Comic
    {...comic}
  />
);

ComicContainer.propTypes = {
  comic: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  comic: state.comic || {},
});

export default connect(mapStateToProps)(ComicContainer);
