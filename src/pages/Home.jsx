import React from 'react';
import Searcher from '@components/widgets/Searcher';
import Category from '@components/UI/Category';
import Layout from '@components/UI/Layout';

const Home = () =>(
  <Layout>
    <Searcher/>
    <Category/>
    <Category/>
    <Category/>
  </Layout>
)

export default Home;