import React from 'react';
import PropTypes from 'prop-types';
 
const Button = ({handleClick, type = 'button', children}) =>(
  <button onClick={handleClick} className={`Button ${type}`}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string
}

export default Button;