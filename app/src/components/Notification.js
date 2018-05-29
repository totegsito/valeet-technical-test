import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Notification extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  async handleClose() {
    await this.props.closeNotification(this.props.type);
  }

  render() {
    const { message, type } = this.props;
    return (
      <div className={`notification ${(type === 'error') ? 'is-danger' : 'is-success'}`}>
        <button className="delete" onClick={this.handleClose} />
        {message}
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['error', 'success']),
  closeNotification: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  message: null,
  type: 'error',
};

export default Notification;
