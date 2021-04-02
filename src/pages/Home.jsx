import React from 'react';
import Searcher from '@components/widgets/Searcher';
import Category from '@components/UI/Category';
import Layout from '@components/UI/Layout';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

const Home = ({myList, categories}) =>(
  <Layout color="purple">
    <Searcher/>
    {
      !!myList.playlist.length &&
      <Category {...myList}/>
    }
    {
      categories.map((category)=>(
        <Category {...category} key={category.id}/>
      ))
    }
  </Layout>
)

// Home.propTypes = {
  
// }

const mapStateToProps = ({myList, categories}) =>({
  myList,
  categories,
})

export default connect(mapStateToProps)(Home);