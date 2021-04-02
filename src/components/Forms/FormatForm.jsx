import React from 'react';
import PropTypes from 'prop-types';

const FormatForm = ({title, children}) =>(
  <div className="FormatForm">
    <h2 className="FormatForm__title">{title}</h2>
    {
      children
    }
  </div>
)

FormatForm.propTypes = {
  title: PropTypes.string
}

export default FormatForm;