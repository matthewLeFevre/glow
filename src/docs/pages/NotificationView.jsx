import React, { useState } from "react";
import { Title1 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";
import Notification, {
  NotificationContainer
} from "../../ui/components/notification/Notification";
import CodeSection from "../components/CodeSection";
import PropsTable from "../components/PropsTable";

export default function NotificationView() {
  let compProps = [
    { name: "notification", type: "object", default: "{}" },
    { name: "notifications", type: "array", default: "[]" },
    { name: "setNotifications", type: "function", default: "() => {}" },
    { name: "index", type: "int", default: "" }
  ];
  const [nots, setNots] = useState([
    {
      status: "confirm",
      message:
        "It looks as though we have a new update. Look up how to activate updates from account settings.",
      close: () => {
        alert("you want to close this notification");
      }
    },
    {
      status: "success",
      message: "Successful notification",
      close: () => {
        alert("you want to close this notification");
      }
    },
    {
      status: "caution",
      message: "Cautious notification",
      close: () => {
        alert("you want to close this notification");
      }
    },
    {
      status: "warning",
      message: "Warning notification",
      close: () => {
        alert("you want to close this notification");
      }
    }
  ]);
  const jsxCode = `
  <div className={\`ln-notification--\${status}\`}>
    <span className="ln-notification__message">{message}</span>
    <button 
      className="ln-notification__close" 
      onClick={closeNotification}
    >
      <i className="far fa-times"></i>
    </button>
  </div>`;
  return (
    <>
      <Title1>Notifications</Title1>
      <Paragraph>
        Use notifications to alert the user to when actions were successfully
        completed or when errors have occured.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          {nots.map((not, i) => (
            <Notification
              notification={not}
              key={i}
              index={i}
              notifications={nots}
              setNotifications={setNots}
            />
          ))}
        </DisplaySection>
      </DisplayCase>
      <CodeSection jsx={jsxCode} scss={false} />
      <PropsTable compProps={compProps} />
    </>
  );
}
