import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SuperHero from '../components/Superhero';

const SuperHeroContainer = ({
  superhero,
}) => (
  <SuperHero
    {...superhero}
  />
);

SuperHeroContainer.propTypes = {
  superhero: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  superhero: state.superhero || {},
});

export default connect(mapStateToProps)(SuperHeroContainer);
