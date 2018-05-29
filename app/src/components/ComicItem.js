import React from 'react';
import PropTypes from 'prop-types';

const ComicItem = ({
  name,
  thumbnail,
  description,
}) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt={`${name} cover placeholder`} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong>
          <br />
          {description}
        </p>
      </div>
    </div>
  </article>
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
