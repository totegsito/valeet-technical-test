import React from 'react';
import PropTypes from 'prop-types';

const ComicItem = ({
  id,
  name,
  thumbnail,
  description,
}) => (
  <a href={`/comic/${id}`}>
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={`${thumbnail.path}/portrait_small.${thumbnail.extension}`} alt={`${name} placeholder`} />
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
  </a>
);

ComicItem.propTypes = {
  id: PropTypes.oneOfType(['number', 'string']).isRequired,
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
