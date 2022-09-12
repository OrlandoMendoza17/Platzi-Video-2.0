import React from 'react';
import Searcher from '../components/widgets/Searcher';
import Layout from '../components/UI/Layout';
import MyList from '../components/UI/MyList';
import Categories from '../components/UI/Categories';
import Searches from '../components/UI/Searches';
import NotFoundSearches from '../components/UI/NoFoundSearches';
// import PropTypes from 'prop-types';

const Home = ({search, myList, categories}) =>{
  return(
    <Layout color="purple">
      <Searcher/>
      {
        search.input?
          (search.playlist.length > 0)?
          <Searches {...search}/>
            :
          <NotFoundSearches>
            No se encontraron resultados :(
          </NotFoundSearches>
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

// const mapStateToProps = ({search, myList, categories}) =>({
//   search,
//   myList,
//   categories,
// })

// export default connect(mapStateToProps)(Home);

export default Home;