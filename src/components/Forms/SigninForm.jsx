import React from 'react';
import Input from '../../components/widgets/Input';
import SubmitButton from '../../components/widgets/SubmitButton';
import PropTypes from 'prop-types';

const SigninForm = ({handleChange, handleSubmit, handleInvalid, form}) =>(
  <form className="FormatForm__Form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
    <Input 
      className="FormatForm__Form--input" 
      handleChange={handleChange} 
      type="text"
      name="name" 
      placeholder="Nombre" 
      value={form.name} 
      required={true}
    />
    <Input 
      className="FormatForm__Form--input" 
      handleChange={handleChange} 
      type="email"
      name="email" 
      placeholder="Correo" 
      value={form.email} 
      required={true}
    />
    <Input 
      className="FormatForm__Form--input" 
      handleChange={handleChange}
      type="password" 
      name="password" 
      placeholder="Contraseña" 
      value={form.password} 
      required={true}
    />
    <SubmitButton>
      Registrarme
    </SubmitButton>
  </form>
)

SigninForm.propTypes = {
  handleInvalid: PropTypes.func,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default SigninForm;