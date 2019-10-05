import React from 'react';

function Notification({notification: {status, details, close}}) {
  return (
    <div className={`ln-notification--${status}`}>
      <span className="ln-notification__detail">{details}</span>
      <div className="ln-notification__close" onClick={close}>
        <i className="far fa-times"></i>
      </div>
    </div>
  );
}

export default Notification;

export function NotificationContainer({notifications}) {
  return (
    <div className="ln-notification-container">
      {notifications.map(notification => (
        <Notification notification={notification} />
      ))}
    </div>
  );
}