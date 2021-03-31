import React from 'react';
import Playlist from './PlayList';

const Category = ({category}) =>(
  <section className="Category">
    <h3 className="Category__title">{category.title}</h3>
    <div className="Category__playlist">
      <Playlist playlist={category.playlist}/>
    </div>
  </section>
)

export default Category;