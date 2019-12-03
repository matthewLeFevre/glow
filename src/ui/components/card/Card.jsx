import React, {useState, useRef, useEffect} from 'react';

function Card({title}) {
  
  return(
    <div className="ln-card">
      <header className="ln-card__head">
        <h3 className="ln-card__title">{title}</h3>
        <CardMenu>
          <li className="ln-card-menu__item">
            <a className="ln-card-menu__link" href="#">Settings</a>
          </li>
          <li className="ln-card-menu__item">
            <a className="ln-card-menu__link" href="#">Details</a>
          </li>
          <li className="ln-card-menu__item">
            <a className="ln-card-menu__link" href="#">Delete</a>
          </li>
        </CardMenu>
      </header>
      <img src="http://bluerimdesign.com/server_assets/_Building%20and%20brainstorming%20Problem-solving%20web%20applications%20that%20help%20you%20and%20others.png" alt="Building And Brainstorming Problem-solving Web Applications" className="ln-card__img"/>
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
      </footer>
    </div>
  );
}

export default Card;

function CardMenu({children}) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="ln-card-menu">
      <button type="button" onClick={() => setToggle(!toggle)} className={`ln-card-menu__toggle ${toggle ? "open" : "closed"}`}>
        <i className="far fa-ellipsis-v ln-card-menu__icon" />
      </button>
      <ul className={`ln-card-menu--down ${toggle ? "open" : ""}`}>
        <li className="ln-card-menu--down__toggle">
          <button type="button" onClick={() => setToggle(!toggle)} className={`ln-card-menu--down__toggle ${toggle ? "open" : ""}`}>
            <i className="far fa-times ln-card-menu__icon" />
          </button>
        </li>
        {children}
      </ul>
    </div>
  );
}

function ActionBar({children}) {
  return(
    <div className="action-bar">{children}</div>
  );
}
