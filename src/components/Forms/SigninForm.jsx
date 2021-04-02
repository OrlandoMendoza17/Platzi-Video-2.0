import React from 'react';
import Input from '@components/widgets/Input';
import SubmitButton from '@components/widgets/SubmitButton';
import {Link} from 'react-router-dom';
import LoginButton from '@components/UI/LoginButton';

const SigninForm = ({handleChange, handleSubmit, handleInvalid, form, children}) =>(
  <>
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
  </>
)

export default SigninForm;