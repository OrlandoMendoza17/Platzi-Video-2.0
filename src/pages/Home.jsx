import React from 'react';
import Searcher from '@components/widgets/Searcher';
import Category from '@components/UI/Category';
import Layout from '@components/UI/Layout';
import {categories} from '../assets/categories.json';

console.log(categories)

const Home = () =>(
  <Layout color="purple">
    <Searcher/>
    {
      categories.map((category)=>(
        <Category category={category} key={category.id}/>
      ))
    }
  </Layout>
)

export default Home;