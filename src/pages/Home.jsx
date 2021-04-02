import React from 'react';
import Searcher from '@components/widgets/Searcher';
import Category from '@components/UI/Category';
import Layout from '@components/UI/Layout';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

const Home = ({myList, categories}) =>{
  return(
    <Layout color="purple">
      <Searcher/>
      {
        !!myList.playlist.length &&
        <Category type='user' {...myList} />
      }
      {
        categories.map((category)=>(
          <Category type='category' {...category} key={category.id}/>
        ))
      }
    </Layout>
  )
}

// Home.propTypes = {
  
// }

const mapStateToProps = ({myList, categories}) =>({
  myList,
  categories,
})

export default connect(mapStateToProps)(Home);