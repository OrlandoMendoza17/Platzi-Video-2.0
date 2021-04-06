import React from 'react';
import PropTypes from 'prop-types';
 
const Button = ({type = 'button', children}) =>(
  <button className={`Button ${type}`}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string
}

export default Button;