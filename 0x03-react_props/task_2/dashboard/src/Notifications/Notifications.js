import React from "react";
import "./Notifications.css";
import closeicon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

export const Noti = () => {
  const btn = {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    border: "none",
    background: "transparent",
    outline: "none",
  };

  const cicon = {
    width: "10px",
    height: "10px"
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={btn} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
        <img src={closeicon} alt="close-icon" style={cicon} />
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

export default Noti;
