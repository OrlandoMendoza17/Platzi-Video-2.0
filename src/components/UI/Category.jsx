import React from 'react';
import Playlist from './PlayList';

const Category = () =>(
  <section className="Category">
    <h3 className="Category__title">Mi lista</h3>
    <div className="Category__playlist">
      <Playlist/>
    </div>
  </section>
)

export default Category;