import React from 'react';
import FormField from './FormField';

function FloatingTextInput({label, callback, required = false, type, className}) {
  return (
    <FormField className={className}>
      <input required={required} type={type || 'text'} className="ln-input--floating full"/>
      <label className="ln-label--floating">{label}</label>
    </FormField>
  );
}

export default FloatingTextInput;