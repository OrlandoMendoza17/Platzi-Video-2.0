import React, {Component} from 'react';
import Layout from '@components/UI/Layout';
import FormatForm from '@components/Forms/FormatForm';
import SigninForm from '@components/Forms/SigninForm';

class Signin extends Component{
  state = {
    form:{
      name: '',
      email: '',
      password: '',
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
}

export default Signin;