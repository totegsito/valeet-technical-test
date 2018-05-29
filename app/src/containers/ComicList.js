import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notification from '../components/Notification';
import { getCurrentComic } from '../store/actions/superhero';

class ComicListContainer extends Component {
  componentWillMount() {
    this.props.
  }
}

const ComicListContainer = ({ superhero, type, closeNotification }) => (
  <Notification
    type={type}
    message={message}
    closeNotification={closeNotification}
  />
);

ComicListContainer.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error']),
  closeNotification: PropTypes.func.isRequired,
};

ComicListContainer.defaultProps = {
  type: 'error',
  message: null,
};

const mapStateToProps = state => ({
  message: state.status.error || state.status.success || null,
});

const mapDispatchToProps = {
  closeNotification: resetStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicListContainer);
