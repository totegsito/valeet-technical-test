import React from 'react';
import PropTypes from 'prop-types';

const Comic = ({
  title,
  thumbnail,
  description,
  variantDescription,
}) => (
  <div className="card comic-card">
    {
      title ?
      [
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`} alt={`${title} character placeholder`} />
          </figure>
        </div>,
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            {description}
            {
              variantDescription &&
              [
                <br />,
                variantDescription,
              ]
            }
          </div>
        </div>,
      ]
      :
      (
        <div className="card-content">
          <h1> Select a comic</h1>
        </div>
      )
    }
  </div>

);

Comic.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string,
    path: PropTypes.string,
  }),
  description: PropTypes.string,
  variantDescription: PropTypes.string,
};

Comic.defaultProps = {
  title: null,
  thumbnail: {},
  description: null,
  variantDescription: null,
};

export default Comic;
