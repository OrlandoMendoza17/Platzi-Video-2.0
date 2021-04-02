import React from 'react';
import Playlist from './PlayList';
import PropTypes from 'prop-types'

const Category = ({title, playlist}) =>(
  <section className="Category">
    <h3 className="Category__title">{title}</h3>
    <div className="Category__playlist">
      <Playlist playlist={playlist}/>
    </div>
  </section>
)

Category.propTypes = {
  title: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
}

export default Category;