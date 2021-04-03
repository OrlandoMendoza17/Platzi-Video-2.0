import React from 'react';
import Category from '@components/UI/Category';

const Categories = ({categories}) =>(
  <>
    {
      categories.map((category)=>(
        <Category type='category' {...category} key={category.id}/>
      ))
    } 
  </>
)

export default Categories;