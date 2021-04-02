import React from 'react';
import playButton from '@images/play-icon.png';
import addButton from '@images/plus-icon.png';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addMedia} from '../../store/actions';

const Media = ({ media, dispatch }) =>{
  const {title, image, year, ageRate, duration} = media
  
  const handleAddMedia = () =>{
    dispatch(addMedia(media))
  }
  
  return(
    <div className="Media">
      <img className="Media__image" src={image} alt={title}/>
      <div className="Media__details">
        <div className="Media__details--buttons">
          <img className="MediaButton" src={playButton} alt="play-icon"/>
          <img className="MediaButton" onClick={handleAddMedia} src={addButton} alt="plus-icon"/>
        </div>
        <p className="Media__details--title">{title}</p>
        <p className="Media__details--features">{year} {ageRate} {duration}</p>
      </div>
    </div>
  )
}

Media.propTypes = {
  media: PropTypes.object.isRequired,
}

export default connect()(Media);