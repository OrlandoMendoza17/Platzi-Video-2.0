import React from 'react';

const NotFoundSearches = (props) =>(
  <section className="NotFoundSearches">
    <div className="NotFoundSearches__image">
      <img src="https://i.imgur.com/aFg4F7L.png" alt="pikachu-sorprendido"/>
    </div>
    <div className="NotFoundSearches__message">
      {props.children}
    </div>
  </section>
)

export default NotFoundSearches;