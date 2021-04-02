import React from 'react';
import Media from './Media';
import PropTypes from 'prop-types';

const Playlist = ({playlist}) =>(
  <div className="Playlist">
    {
      playlist.map((media)=>(
        <Media media={media} key={media.id}/>
      ))
    }
  </div>
)

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired
}

export default Playlist