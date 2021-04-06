import React, {useEffect} from 'react';
import Layout from '@components/UI/Layout';
import Button from '../widgets/Button';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import NotFound from '@pages/NotFound';
import {findVideo} from '../../store/actions';

const Player = ({player, history, findVideo, match}) => {
  // const isVideo = !!Object.keys(player).length
  // const videoId = match.params.id
  // console.log(videoId)
  
  // useEffect(() => {
    
  //   findVideo(videoId)
    
  // }, [])
  
  return(
    // isVideo ? 
    <Layout>
      <div className="Player">
        <video className="Player__video" autoPlay controls>
          <source src=""/>
        </video>
        <div className="Player__back">
          <Button handleClick={() => history.goBack()} type="bold">
            Regresar
          </Button>
        </div>
      </div>
    </Layout>
    // : <NotFound/>    
  )
}

const mapStateToProps = ({player}) =>({
  player
})

const mapDispatchToProps = {
  findVideo
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));