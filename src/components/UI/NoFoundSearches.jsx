import React from 'react';
import pikachu from '../../assets/images/pikachu.png'

const NotFoundSearches = () =>(
  <div className="NotFoundSearches">
    <div className="NotFoundSearches__image">
      <img src={pikachu} alt="pikachu-sorprendido"/>
    </div>
    <p className="NotFoundSearches__message">
      No se encontraron resultados :(
    </p>
  </div>
)

export default NotFoundSearches;