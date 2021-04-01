import React from 'react';

const Input = ({type, name, autoComplete, value, required, className, placeholder, handleChange, multiple}) =>(
  <label htmlFor={name}>
    <input 
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      name={name}
      id={name}
      value={value}
      multiple={multiple}
      autoComplete={autoComplete}
      required={required || false}
    />
  </label>
)

export default Input;
