import React, {Component} from 'react';
import Layout from '@components/UI/Layout';
import Button from '../widgets/Button';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import NotFound from '@pages/NotFound';
import {findVideo, unsetVideo, setCategoriesStore} from '../../store/actions';
import {getCategories} from '../../utils/Api';

class Player extends Component {
  
  componentDidMount(){
    const { player, categories, findVideo, match } = this.props
    const videoId = match.params.id
    // console.log(videoId)
    const thereAreCategories = !!categories.length
    const isVideo = !!Object.keys(player).length
    
    debugger
    
    if(thereAreCategories && !isVideo){
      
      console.log('there are')
      findVideo(videoId)
      
    }else if(!isVideo){
      console.log('there are not')
      this.fetchCategories(videoId)
    }
  }
    
  fetchCategories = async (videoId) =>{
    const { findVideo, setCategoriesStore } = this.props
    const categories = await getCategories()
    console.log('hola')
    setCategoriesStore(categories)
    debugger
    findVideo(videoId)
  }
  
  goBack = () =>{
    const {unsetVideo, history} = this.props
    unsetVideo()
    history.goBack()
  }
  
  render(){
    
    const {player, history} = this.props
    const isVideo = !!Object.keys(player).length
    console.log(player)
    return(
      isVideo 
        ? <Layout>
            <div className="Player">
              <video poster={player.image} className="Player__video" autoPlay controls>
                <source src={player.source}/>
              </video>
              <div className="Player__back">
                <Button handleClick={this.goBack} type="bold">
                  Regresar
                </Button>
              </div>
            </div>
          </Layout> 
        : 
          <NotFound/>
    )
  }
}

const mapStateToProps = ({player, categories}) =>({
  player, categories
})

const mapDispatchToProps = {
  findVideo,
  unsetVideo,
  setCategoriesStore,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));