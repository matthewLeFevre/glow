import React from 'react';

function Form({children, type = false}) {
  function submitForm(e) {
    e.preventDefault();
    alert('Form Submitted');
  }
  return (
    <form onSubmit={submitForm} className={`ln-form${type === 'grid' ? '--grid' : ''}`}>
      {children}
    </form>
  );
}

export default Form;