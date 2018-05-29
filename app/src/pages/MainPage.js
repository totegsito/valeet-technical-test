import React from 'react';
// import PropTypes from 'prop-types';

import ComicContainer from '../containers/Comic';
import ComicListContainer from '../containers/ComicList';
import SuperHero from '../containers/Superhero';

const MainPage = () => (
  <div>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="column is-half-desktop is-offset-one-quarter">
            <SuperHero />
          </div>
        </div>
      </div>
    </div>
    <h2 className="title is-2">Daredevil comics</h2>
    <div className="columns">
      <div className="column is-half-desktop">
        <ComicListContainer />
      </div>
      <div className="column is-half-desktop">
        <ComicContainer />
      </div>
    </div>
  </div>
);


export default MainPage;
