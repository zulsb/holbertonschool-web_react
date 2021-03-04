import React from "react";
import closeicon from "../assets/close-icon.png";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

export const Notifications = ({ displayDrawer, listNotifications }) => {
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
    height: "10px"
  };

  return (
    <div className="noti">
      <div className="menuItem">Your notifications</div>
      { displayDrawer ?
        (<div className="Notifications">
          <button style={btn} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
            <img src={closeicon} style={cicon}/>
          </button>
          <p>Here is the list of notifications</p>
          <ul>
          {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type='no-new' />) : <></>}
            {listNotifications.map((list) => (<NotificationItem key={list.id} type={list.type} value={list.value} html={list.html} />))}
          </ul>
        </div>)
        : <></>
      }
    </div>
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};


export default Notifications;
