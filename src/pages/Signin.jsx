import React, { useState } from 'react';
import Layout from '../components/UI/Layout';
import FormatForm from '../components/Forms/FormatForm';
import SigninForm from '../components/Forms/SigninForm';

const Signin = () => {
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
    <Layout color="gradient" justify="justify-flex">
      <FormatForm title="Regístrate">
        <SigninForm
          form={form}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </FormatForm>
    </Layout>
  )
}

export default Signin;