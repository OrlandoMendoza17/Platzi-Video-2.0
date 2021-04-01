import React from 'react';

const CheckBox = ({name, value, required, className, handleChange, label}) =>(
  <label htmlFor={name}>
    <input 
      className={className}
      onChange={handleChange}
      type="checkbox"
      name={name}
      id={name}
      value={value}
      required={required || false}
    />
    <span>{label}</span>
  </label>
)

export default CheckBox;
