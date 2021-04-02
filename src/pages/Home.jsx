import React from 'react';
import Searcher from '@components/widgets/Searcher';
import Category from '@components/UI/Category';
import Layout from '@components/UI/Layout';
import videos from '../assets/categories.json';
// import PropTypes from 'prop-types';

const Home = () =>{
  const { categories } = videos;
  return(
    <Layout color="purple">
      <Searcher/>
      {
        categories.map((category)=>(
          <Category {...category} key={category.id}/>
        ))
      }
    </Layout>
  )
}

// Home.propTypes = {
  
// }

export default Home;