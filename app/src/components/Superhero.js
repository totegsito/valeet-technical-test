import React from 'react';
import PropTypes from 'prop-types';

const Superhero = ({
  name,
  thumbnail,
  description,
}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`} alt={`${name} character placeholder`} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{name}</p>
        </div>
      </div>
      <div className="content">
        {description}
      </div>
    </div>
  </div>
);

Superhero.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string,
    path: PropTypes.string,
  }),
  description: PropTypes.string,
};

Superhero.defaultProps = {
  name: null,
  thumbnail: {},
  description: null,
};

export default Superhero;
