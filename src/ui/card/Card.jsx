import React from 'react';

function Card({title}) {
  return(
    <div className="ln-card">
      <header className="ln-card__head">
        <h3 className="ln-card__title">{title}</h3>
      </header>
    </div>
  );
}

export default Card;