import React from 'react';

function FormField({children, className = false}) {
  return <div className={`ln-field ${className ? className : ''}`}>{children}</div>;
}

export default FormField;