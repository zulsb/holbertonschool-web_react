import React, { Component } from "react";
import closeicon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  render() {
    const btn = {
      position: "absolute",
      right: "1rem",
      margintop: "0.5rem",
      border: "none",
      background: "transparent",
      outline: "none",
    };

    const cicon = {
      width: "10px",
      height: "10px",
    };

    return (
      <div className={css(s.notiDiv, s.notiDivResposive)}>
        <div className={css(s.menuItem)} id="menuItem">
          Your notifications
        </div>
        {this.props.displayDrawer ? (
          <div className={css(s.Notifications)} id="Notifications">
            <button
              style={btn}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeicon} style={cicon} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  id={0}
                  value="No new notification for now"
                  type="no-new"
                  markAsRead={this.markAsRead}
                />
              ) : (
                <></>
              )}
              {this.props.listNotifications.map((list) => (
                <NotificationItem
                  id={list.id}
                  key={list.id}
                  type={list.type}
                  value={list.value}
                  html={list.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const s = StyleSheet.create({
  Notifications: {
    border: "1px dashed #e0354b",
    padding: "5px 25px",
  },
  menuItem: {
    marginBottom: "10px",
  },
  notiDiv: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "0.7rem",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  notiDivResposive: {
    '@media screen and (max-width: 900px)': {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '6',
      display: 'block !important',
    }
  }
});

export default Notifications;
