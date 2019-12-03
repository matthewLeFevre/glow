import React from 'react';

function Notification({notification: {status, message, close = () => {}}, setNotifications, notifications, index}) {
  function closeNotification () {
    // close();
    // Had to create a completly new array to get the ideal
    // functionality because an array must be a reference type
    let newNots = new Array(...notifications);
    newNots.splice(index, 1);
    setNotifications(newNots);
  }
  return (
    <div className={`ln-notification--${status}`}>
      <span className="ln-notification__message">{message}</span>
      <button className="ln-notification__close" onClick={closeNotification}>
        <i className="far fa-times"></i>
      </button>
    </div>
  );
}

export default Notification;

export function NotificationContainer({notifications, setNotifications}) {
  return (
    <div className="ln-notification-container">
      {notifications.map((notification, i, arr) => (
        <Notification notification={notification} notifications={arr} key={i} index={i} setNotifications={setNotifications} />
      ))}
    </div>
  );
}