import React from 'react';
import Input from '@components/widgets/Input';
import SubmitButton from '@components/widgets/SubmitButton';

const FormatForm = ({title, children}) =>(
  <div className="FormatForm">
    <h2 className="FormatForm__title">{title}</h2>
    {
      children
    }
  </div>
)

export default FormatForm;