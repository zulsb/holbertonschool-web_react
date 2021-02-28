import React from "react";

function NotificationItem(prop) {
  if (prop.value)
    return <li noti-style={prop.type}>{prop.value}</li>;
  else
    return (
      <li
      noti-style={prop.type}
        dangerouslySetInnerHTML={prop.html}
      ></li>
    );
}

export default NotificationItem;
