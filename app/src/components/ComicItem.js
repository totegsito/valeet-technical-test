import React from 'react';
import PropTypes from 'prop-types';

const ComicItem = ({
  name,
  thumbnail,
  description,
}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt={`${name} placeholder`} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={`${thumbnail.path}/portrait_small.${thumbnail.extension}`} alt={`${name} placeholder`} />
          </figure>
        </div>
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

ComicItem.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string,
    path: PropTypes.string,
  }),
  description: PropTypes.string,
};

ComicItem.defaultProps = {
  name: null,
  thumbnail: {},
  description: null,
};

export default ComicItem;
