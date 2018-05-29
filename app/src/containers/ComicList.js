import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCurrentComic } from '../store/actions/comic';
import { setLoadingStatus } from '../store/actions/status';

import ComicList from '../components/ComicList';

console.log(setCurrentComic);

const ComicListContainer = ({
  superhero,
  setLoading,
  onComicSelected,
}) => (
  <ComicList
    superhero={superhero}
    setLoading={setLoading}
    onComicSelected={onComicSelected}
  />
);

ComicListContainer.propTypes = {
  setLoading: PropTypes.func.isRequired,
  onComicSelected: PropTypes.func.isRequired,
  superhero: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  superhero: state.superhero || {},
});

const mapDispatchToProps = {
  setLoading: setLoadingStatus,
  onComicSelected: setCurrentComic,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicListContainer);
