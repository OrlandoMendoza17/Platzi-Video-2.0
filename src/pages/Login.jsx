import React, {Component} from 'react';
import Layout from '@components/UI/Layout';
import LoginForm from '@components/Forms/LoginForm';
import FormatForm from '@components/Forms/FormatForm';
class Login extends Component{
  
  state = {
    form:{
      email: '',
      password: '',
      remember_me: '',
    }
  }
  
  handleSubmit = (event) =>{
    event.preventDefault()
    const { form } = this.state
    
    console.log(form.email)
    console.log(form.password)
  }
  
  handleChange = ({target}) =>{
    this.setState({
      form:{
        ...this.state.form,
        [target.name]: target.value
      }
    })
  }
  
  render(){
    const { handleChange, handleSubmit, state:{ form }} = this
    return(
      <Layout color="gradient" justify="justify-flex">
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
}

export default Login;