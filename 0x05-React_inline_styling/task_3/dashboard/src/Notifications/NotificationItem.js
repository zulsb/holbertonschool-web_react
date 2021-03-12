import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
  render() {
    if (!this.props.value)
      return (
        <li
          className={css(
            this.props.type === "default" ? s.default : s.urgent
          )}
          data-notification-type={this.props.type}
          dangerouslySetInnerHTML={this.props.html}
          onClick={() => {
            this.props.markAsRead(this.props.id);
          }}
        />
      );
    return (
      <li
        className={css(
          this.props.type === "default" ? s.default : s.urgent
        )}
        data-notification-type={this.props.type}
        onClick={() => {
          this.props.markAsRead(this.props.id);
        }}
      >
        {this.props.value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  id: NaN,
  type: "default",
  html: {},
  value: "",
  markAsRead: () => {}
};

const s = StyleSheet.create({
  default: {
    color: "#0000ff"
  },
  urgent: {
    color: "#ff0000"
  },
});

export default NotificationItem;
