import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notification from '../components/Notification';
import { resetStatus } from '../store/actions/status';

const NotificationContainer = ({ message, type, closeNotification }) => (
  <Notification
    type={type}
    message={message}
    closeNotification={closeNotification}
  />
);

NotificationContainer.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error']),
  closeNotification: PropTypes.func.isRequired,
};

NotificationContainer.defaultProps = {
  type: 'error',
  message: null,
};

const mapStateToProps = state => ({
  message: state.status.error || state.status.success || null,
});

const mapDispatchToProps = {
  closeNotification: resetStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
