import React, {Component} from 'react';
import Media from './Media';

class Category extends Component{
  state = {
    playlistHeight: '280px' 
  }
  
  setHeight = (playlistHeight) =>{
    this.setState({ playlistHeight })
  }
  
  render(){
    const {setHeight, state: { playlistHeight }} = this;
    
    return(
      <section className="Category">
        <h3 className="Category__title">Mi lista</h3>
        <div className="Category__playlist" style={{height: playlistHeight}}>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
          <Media setHeight={setHeight}/>
        </div>
      </section>
    )
  }
}

export default Category;