import React from 'react';

function CheckBoxInput({label}) {
  return (
    <div className="ln-field">
      
      <label className="ln-label--checkbox" htmlFor="">
        <input className="ln-input--checkbox" type="checkbox"/>
        <span className="ln-input--checkbox__box"></span>
        <span className="ln-input--checkbox__text">{label}</span>
      </label>
    </div>
  );
}

export default CheckBoxInput;