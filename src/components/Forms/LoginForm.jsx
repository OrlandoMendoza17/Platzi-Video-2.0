import React from 'react';
import Input from '@components/widgets/Input';
import SubmitButton from '../widgets/SubmitButton';

const LoginForm = ({handleChange, handleSubmit, handleInvalid, form, children}) =>(
  <div className="LoginForm">
    <form className="LoginForm__Form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
      <Input 
        className="LoginForm__Form--input" 
        handleChange={handleChange} 
        type="email"
        name="email" 
        placeholder="Correo" 
        value={form.email} 
        required={true}
      />
      <Input 
        className="LoginForm__Form--input" 
        handleChange={handleChange} 
        type="password" 
        name="password" 
        placeholder="Contraseña" 
        value={form.password} 
        required={true}
      />
      <SubmitButton>
        Aceptar
      </SubmitButton>
    </form>
    {
      children
    }
  </div>
)

export default LoginForm;