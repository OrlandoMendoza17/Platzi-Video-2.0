import React, {Component} from 'react';
import Layout from '@components/UI/Layout';
import LoginForm from '@components/Forms/LoginForm';

class Home extends Component{
  
  state = {
    form:{
      email: '',
      password: ''
    }
  }
  
  handleSubmit = () =>{
    const { form } = this.state
    
    console.log(form.email)
    console.log(form.password)
  }
  
  handleChange = ({target}) =>{
    this.setState({
      [target.name]: target.value
    })
  }
  
  render(){
    const { handleChange, handleSubmit, state:{ form }} = this
    return(
      <Layout color="gradient">
        <LoginForm 
          form={form}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Layout>
    )
  }
}

export default Home;