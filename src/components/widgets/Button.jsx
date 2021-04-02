import React from 'react';
import PropTypes from 'prop-types';
 
const Button = ({type, children}) =>(
  <button className={`Button ${type || ''}`}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string
}

export default Button;