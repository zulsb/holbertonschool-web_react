import React from 'react';

function NotificationItem(props) {
  if (!props.value)
    return (<li noti-style={props.type} dangerouslySetInnerHTML={props.html} />);
  return (<li noti-style={props.type}>{props.value}</li>);
}

export default NotificationItem;
