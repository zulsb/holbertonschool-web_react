import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    if (!this.props.value)
      return (
        <li
          data-notification-type={this.props.type}
          dangerouslySetInnerHTML={this.props.html}
          onClick={() => { this.props.markAsRead(this.props.id) }}
        />
      );
    return <li data-notification-type={this.props.type} onClick={() => { this.props.markAsRead(this.props.id) }}>{this.props.value}</li>;
  }
}
NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
}
NotificationItem.defaultProps = {
  id: NaN,
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {}
}
export default NotificationItem;
