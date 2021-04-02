import React from 'react';
import PropTypes from 'prop-types';

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

CheckBox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default CheckBox;
