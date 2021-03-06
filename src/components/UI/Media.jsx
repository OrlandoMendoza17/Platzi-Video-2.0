import React from 'react';
import playButton from '@images/play-icon.svg';
import addButton from '@images/plus-icon.svg';
import removeButton from '@images/remove-icon.svg';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addMedia, removeMedia} from '../../store/actions';
import {Link} from 'react-router-dom';

const Media = ({ type, media, dispatch }) =>{
  const {title, image, year, contentRating, duration, id} = media
  
  const handleAddMedia = () =>{
    dispatch(addMedia(media))
  }
  
  const handleRemoveMedia = () =>{
    dispatch(removeMedia(media))
  }
  
  return(
    <div className="Media">
      <img className="Media__image" src={image} alt={title}/>
      <div className="Media__details">
        <div className="Media__details--buttons">
          <Link to={`/Player/${id}`}>
            <img className="MediaButton" src={playButton} alt="play-icon"/>
          </Link>
          {
            type !== 'user' ?
              <img className="MediaButton" onClick={handleAddMedia} src={addButton} alt="plus-icon"/>
            :
              <img className="MediaButton" onClick={handleRemoveMedia} src={removeButton} alt="plus-icon"/>
          }
        </div>
        <p className="Media__details--title">{title}</p>
        <p className="Media__details--features">{year} {contentRating} {duration}</p>
      </div>
    </div>
  )
}

Media.propTypes = {
  media: PropTypes.object.isRequired,
}

export default connect()(Media);