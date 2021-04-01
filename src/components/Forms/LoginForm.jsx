import React from 'react';
import Input from '@components/widgets/Input';
import CheckBox from '@components/widgets/CheckBox';
import SubmitButton from '@components/widgets/SubmitButton';
import google from '../../assets/images/google-icon.png';
import twitter from '../../assets/images/twitter-icon.png';

import {Link} from 'react-router-dom';

const LoginForm = ({handleChange, handleSubmit, handleInvalid, form, children}) =>(
  <>
    <form className="FormatForm__Form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
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
        Iniciar Sesión
      </SubmitButton>
    </form>
    <section className="FormatForm__Links">
      <div className="FormatForm__Links--between">
        <CheckBox
          label="Recuerdame"
          // className="FormatForm__Links--input" 
          handleChange={handleChange}
          name="remember_me" 
          value={form.remember_me} 
          required={true}
        />
        <Link to="/">
          Olvidé mi contraseña
        </Link>
      </div>
      <div className="FormatForm__Links--login-with">
        <Link to="/">
          <img src={google} alt="google-icon"/>
          <span>Inicia Sesión con Google</span>
        </Link>
        <Link to="/">
          <img src={twitter} alt="twitter-icon"/>
          <span>Inicia Sesión con Twitter</span>
        </Link>
      </div>
      <div className="FormatForm__Links--start">
        <span>
          ¿No tienes una cuenta? <Link to="/Signin">Regístrate</Link>
        </span>
      </div>
    </section>
  </>
)

export default LoginForm;