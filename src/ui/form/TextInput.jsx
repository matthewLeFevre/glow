import React from 'react';

function TextInput({label, callback}) {
  return (
    <div className="ln-field">
      <label className="ln-label">{label}</label>
      <input required={true} type="text" className="ln-input full"/>
    </div>
  );
}

export default TextInput;