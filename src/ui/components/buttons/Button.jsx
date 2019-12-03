import React from "react";

export default function Button({
  text,
  onClick = () => {},
  type = "button",
  purpose = "primary",
  className = ""
}) {
  return (
    <button
      className={`ln-btn--${purpose} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
