import React from 'react';

export function H1({children, className = ""}) {
  return (<h1 className={`ln-h1 ${className}`}>{children}</h1>);
}
export function SubH1({children, className = ""}) {
  return (<div className={`ln-h1--sub ${className}`}>{children}</div>);
}
export function H2({children, className = ""}) {
  return (<h2 className={`ln-h2 ${className}`}>{children}</h2>);
}
export function SubH2({children, className = ""}) {
  return (<div className={`ln-h2--sub ${className}`}>{children}</div>);
}
export function H3({children, className = ""}) {
  return (<h3 className={`ln-h3 ${className}`}>{children}</h3>);
}
export function SubH3({children, className = ""}) {
  return (<div className={`ln-h3--sub ${className}`}>{children}</div>);
}
export function H4({children, className = ""}) {
  return (<h4 className={`ln-h4 ${className}`}>{children}</h4>);
}
export function H5({children, className = ""}) {
  return (<h5 className={`ln-h5 ${className}`}>{children}</h5>);
}
export function H6({children, className = ""}) {
  return (<h6 className={`ln-h6 ${className}`}>{children}</h6>);
}