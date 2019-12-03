import React from "react";

function Container({ children, className = "" }) {
  return <section className={`ln-container ${className}`}>{children}</section>;
}

export default Container;
