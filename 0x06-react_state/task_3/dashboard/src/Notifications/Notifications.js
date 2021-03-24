import React, { Component } from "react";
import closeicon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const btn = {
      position: "absolute",
      right: "1rem",
      margintop: "0.5rem",
      border: "none",
      background: "transparent",
      outline: "none"
    };

    const cicon = {
      width: "10px",
      height: "10px"
    };

    const showHeaderNoti = css(this.props.displayDrawer ? s.HeaderOff : s.HeaderOn);

    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer, 
      markNotificationAsRead,     
    } = this.props;

    return (
      <div className={css(s.notiDiv)}>
        <div className={css(s.menuItem, displayDrawer ? s.off : '')} id="menuItem" onClick={handleDisplayDrawer}>
          <p className={showHeaderNoti}>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(s.Notifications)} id="Notifications">
            <button
              id="cMenuItem"
              style={btn}
              aria-label="Close"
              onClick={ handleHideDrawer }
            >
              <img src={closeicon} style={cicon} />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(s.ulResponsive)}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  id={0}
                  value="No new notification for now"
                  type="no-new"
                  markAsRead={this.markAsRead}
                />
              ) : 
                <></>
              }
              {listNotifications.map((list) => (
                <NotificationItem
                  id={list.id}
                  key={list.id}
                  type={list.type}
                  value={list.value}
                  html={list.html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </div>
        ) : 
          <></>
        }
      </div>
    );
  }  
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
};

const opacity = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  }
};

const translate = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  }
};

const s = StyleSheet.create({
  Notifications: {
    border: "1px dashed #e0354b",
    padding: "5px 25px",
    '@media screen and (max-width: 900px)': {
      border: 'none',
      backgroundColor: '#ffff',
      width: '100%',
      height: '100%',
      zIndex: '1'
    }

  },
  menuItem: {
    marginBottom: "10px",
    textAlign: 'center',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [opacity, translate],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
      cursor: 'pointer'
    }
  },
  notiDiv: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "0.7rem",
    flexWrap: "wrap",
    alignItems: "flex-end",
    '@media screen and (max-width: 900px)': {
      width: '100%',
      height: '100%'
    }
  },
  HeaderOff: {
    marginRight: '8px',
    '@media screen and (max-width: 900px)': {
      display: 'none',
      backgroundColor: 'white'
    }
  },
  ulResponsive: {
    '@media screen and (max-width: 900px)': {
      padding: '0',
      fontSize: '20px',
      listStyle: 'none'
    }
  },
  off: {
    display: 'none'
  },
});

export default Notifications;
