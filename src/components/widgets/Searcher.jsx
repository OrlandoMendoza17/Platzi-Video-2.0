import React, {Component} from 'react';
import InputNoLabel from '@components/widgets/InputNoLabel';
import {searchMedia} from '@store/actions';
import {connect} from 'react-redux';
class Searcher extends Component {
  
  state = {
    search: ''
  }
  
  handleChange = ({target}) =>{
    const {dispatch} = this.props
    
    this.setState({
      [target.name]: target.value
    })
    
    dispatch(searchMedia(target.value))
  }
  
  render(){
    const {handleChange, state:{ search }} = this
    return(
      <section className="Searcher">
        <h2 className="Searcher__title">¿Qué quieres ver hoy?</h2>
        <InputNoLabel 
          name="search"
          type="text"
          value={search}
          className="Searcher__input" 
          handleChange={handleChange} 
          placeholder="Buscar..." 
        />
      </section>
    )
  }
}

export default connect()(Searcher);