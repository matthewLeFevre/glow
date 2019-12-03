import React from 'react';

function SelectInput({label, options, callback}) {
  return(
    <div className="ln-field">
      <label className="ln-label">{label}</label>
      <select required={true} type="text" className="ln-input full">
        <option value="">- Select -</option>
        {options.map((option, i) => {
          return <option key={i} value={option.value}>{option.name}</option>
        })}
      </select>
    </div>
  );
}

export default SelectInput;