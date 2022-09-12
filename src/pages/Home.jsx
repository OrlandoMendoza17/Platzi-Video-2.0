import React, { useContext, useEffect } from 'react';
import Searcher from '../components/widgets/Searcher';
import Layout from '../components/UI/Layout';
import MyList from '../components/UI/MyList';
import Categories from '../components/UI/Categories';
import Searches from '../components/UI/Searches';
import NotFoundSearches from '../components/UI/NoFoundSearches';
import AppContext from '../context/AppContext';
// import PropTypes from 'prop-types';

const Home = () => {
  const { state, setCategoriesStore } = useContext(AppContext)
  const { search, myList, categories } = state

  useEffect(() => {

    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCategoriesStore(data.categories)
      })

  }, [])
  
  return (
    <Layout color="purple">
      <Searcher />
      {
        search.input ?
          (search.playlist.length > 0) ?
            <Searches {...search} />
            :
            <NotFoundSearches>
              No se encontraron resultados :(
            </NotFoundSearches>
          :
          <>
            <MyList myList={myList} />
            <Categories categories={categories} />
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

export default Home;