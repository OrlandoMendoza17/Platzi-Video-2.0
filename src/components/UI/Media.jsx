import React from 'react';
import playButton from '@images/play-icon.png';
import addButton from '@images/plus-icon.png';

const Media = ({details:{ title, image, year, ageRate, duration }}) =>(
  <div className="Media">
    <img className="Media__image" src={image} alt={title}/>
    <div className="Media__details">
      <div className="Media__details--buttons">
        <img className="MediaButton" src={playButton} alt="play-icon"/>
        <img className="MediaButton" src={addButton} alt="plus-icon"/>
      </div>
      <p className="Media__details--title">{title}</p>
      <p className="Media__details--features">{year} {ageRate} {duration}</p>
    </div>
  </div>
)

export default Media;