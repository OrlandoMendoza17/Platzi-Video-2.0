import React, { useState } from 'react';
import Layout from '../components/UI/Layout';
import LoginForm from '../components/Forms/LoginForm';
import FormatForm from '../components/Forms/FormatForm';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember_me: '',
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form.email)
    console.log(form.password)
  }

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <Layout page="Login" color="gradient" justify="justify-flex">
      <FormatForm title="Inicia Sesión">
        <LoginForm
          form={form}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </FormatForm>
    </Layout>
  )
}

export default Login;