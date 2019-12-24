import React, { useState, useRef, useEffect } from "react";
let Link = undefined;
if (Link === undefined) {
  Link = <a href="#" />;
}

function Card({ children }) {
  return <div className="ln-card">{children}</div>;
}

export default Card;

export function CardMenu({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="ln-card-menu">
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className={`ln-card-menu__toggle ${toggle ? "open" : "closed"}`}
      >
        <i className="far fa-ellipsis-v ln-card-menu__icon" />
      </button>
      <ul className={`ln-card-menu--down ${toggle ? "open" : ""}`}>
        <li className="ln-card-menu--down__toggle">
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className={`ln-card-menu--down__toggle ${toggle ? "open" : ""}`}
          >
            <i className="far fa-times ln-card-menu__icon" />
          </button>
        </li>
        {children}
      </ul>
    </div>
  );
}

export function ActionBar({ children }) {
  return <div className="action-bar">{children}</div>;
}

export function CardHeader({ children }) {
  return <header className="ln-card__head">{children}</header>;
}

export function CardMenuItem({
  type = "externalLink",
  onClick,
  to,
  text,
  href
}) {
  return (
    <li className="ln-card-menu__item">
      {type === "externalLink" ? (
        <a className="ln-card-menu__link" href={href}>
          {text}
        </a>
      ) : (
        ""
      )}
      {type === "link" && Link !== undefined ? (
        <Link className="ln-card-menu__link" to={to}>
          {text}
        </Link>
      ) : (
        ""
      )}
      {type === "button" ? (
        <button type="button" className="ln-card-menu__link" onClick={onClick}>
          {text}
        </button>
      ) : (
        ""
      )}
    </li>
  );
}

export function CardImage({ src, alt }) {
  return <img src={src} alt={alt} className="ln-card__img" />;
}

export function CardBody({ children }) {
  return <div className="ln-card__body">{children}</div>;
}

export function CardFooter({ children }) {
  return <footer className="ln-card__footer">{children}</footer>;
}

{
  /* <img src="http://bluerimdesign.com/server_assets/_Building%20and%20brainstorming%20Problem-solving%20web%20applications%20that%20help%20you%20and%20others.png" alt="Building And Brainstorming Problem-solving Web Applications" className="ln-card__img"/>
<div className="ln-card__body">
<h4><a href="#">New Video</a></h4>
<span>Created: 10/8/12</span>
<p>Checkout this new video. It has lots of new content</p>
</div>
<footer className="ln-card__footer">
<ActionBar>
  <button className="action-bar__icon" type="button">
    <i className="fas fa-heart"></i>
  </button>
  <button className="action-bar__icon" type="button">
    <i className="fas fa-share"></i>
  </button>
  <button className="action-bar__icon" type="button">
    <i className="fas fa-comment"></i>
  </button>
  <button className="action-bar__icon" type="button">
    <i className="fas fa-cloud-download"></i>
  </button>
</ActionBar>
</footer> */
}
