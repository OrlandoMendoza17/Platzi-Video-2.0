import React from 'react';
import Media from './Media';

const Playlist = ({playlist}) =>(
  <div className="Playlist">
    {
      playlist.map((media)=>(
        <Media details={media} key={media.id}/>
      ))
    }
  </div>
)

export default Playlist