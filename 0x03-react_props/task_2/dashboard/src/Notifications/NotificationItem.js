import React from 'react';

function NotificationItem(props) {
  if (!props.value)
    return (<li data-notification-type={props.type} dangerouslySetInnerHTML={props.html} />);
  return (<li data-notification-type={props.type}>{props.value}</li>);
}

export default NotificationItem;
