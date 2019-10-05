import React from 'react';

function FloatingTextInput({label, callback, required, type}) {
  return (
    <div className="ln-field">
      <input required={required || false} required={true} type={type || 'text'} className="ln-input--floating full"/>
      <label className="ln-label--floating">{label}</label>
    </div>
  );
}

export default FloatingTextInput;