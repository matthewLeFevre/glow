import React from "react";

export function Title1({ children, className = "" }) {
  return <h1 className={`ln-h1 ${className}`}>{children}</h1>;
}
export function SubTitle({ children, className = "" }) {
  return <div className={`ln-h1--sub ${className}`}>{children}</div>;
}
export function Title2({ children, className = "" }) {
  return <h2 className={`ln-h2 ${className}`}>{children}</h2>;
}
export function Title3({ children, className = "" }) {
  return <h3 className={`ln-h3 ${className}`}>{children}</h3>;
}
export function Title4({ children, className = "" }) {
  return <h4 className={`ln-h4 ${className}`}>{children}</h4>;
}
export function Title5({ children, className = "" }) {
  return <h5 className={`ln-h5 ${className}`}>{children}</h5>;
}
export function Title6({ children, className = "" }) {
  return <h6 className={`ln-h6 ${className}`}>{children}</h6>;
}
