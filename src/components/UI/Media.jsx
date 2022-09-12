import React from 'react';
import playButton from '../../assets/images/play-icon.svg';
import addButton from '../../assets/images/plus-icon.svg';
import removeButton from '../../assets/images/remove-icon.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Media = ({ type, media }) => {
  const { title, image, year, contentRating, duration, id } = media

  const { addMedia, removeMedia } = useContext(AppContext)

  const handleAddMedia = () => {
    addMedia(media)
  }

  const handleRemoveMedia = () => {
    removeMedia(media)
  }

  return (
    <div className="Media">
      <img className="Media__image" src={image} alt={title} />
      <div className="Media__details">
        <div className="Media__details--buttons">
          <Link to={`/Player/${id}`}>
            <img className="MediaButton" src={playButton} alt="play-icon" />
          </Link>
          {
            type !== 'user' ?
              <img className="MediaButton" onClick={handleAddMedia} src={addButton} alt="plus-icon" />
              :
              <img className="MediaButton" onClick={handleRemoveMedia} src={removeButton} alt="plus-icon" />
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

export default Media;