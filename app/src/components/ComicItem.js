/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const ComicItem = ({
  name,
  onClick,
  thumbnail,
}) => (
  <article className="media comic-item">
    <figure className="media-left">
      <p className="image is-48x48 is-2by3">
        <img

          src={`${thumbnail.path}/portrait_small.${thumbnail.extension}`}
          alt={`${name} cover placeholder`}
        />
      </p>
    </figure>
    <div className="media-content">
      <div className="content has-text-dark has-text-weith-bold is-uppercase">
        <a
          tabIndex="0"
          role="button"
          onClick={onClick}
          onKeyPress={onClick}
        >
          {name}
        </a>
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
  onClick: PropTypes.func.isRequired,
};

ComicItem.defaultProps = {
  name: null,
  thumbnail: {},
};

export default ComicItem;
