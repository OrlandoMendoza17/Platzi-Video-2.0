import React from 'react';
import Searcher from '@components/widgets/Searcher';
import Layout from '@components/UI/Layout';
import {connect} from 'react-redux';
import MyList from '../components/UI/MyList';
import Categories from '../components/UI/Categories';
import Searches from '../components/UI/Searches';
// import PropTypes from 'prop-types';

const Home = ({search, myList, categories}) =>{
  debugger
  return(
    <Layout color="purple">
      <Searcher/>
      {
        !!search.playlist.length?
          <Searches {...search}/>
        :
          <>
            <MyList myList={myList}/>      
            <Categories categories={categories}/>
          </>
      }  
    </Layout>
  )
}

// Home.propTypes = {
  
// }

const mapStateToProps = ({search, myList, categories}) =>({
  search,
  myList,
  categories,
})

export default connect(mapStateToProps)(Home);