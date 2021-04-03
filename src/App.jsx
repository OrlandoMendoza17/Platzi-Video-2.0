import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import {connect} from 'react-redux';
import {setCategoriesStore} from './store/actions';

const App = ({dispatch, ...store}) =>{
  
  const [categories, setCategories] = useState([])
  
  debugger
  
  useEffect(() => {
    
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setCategories(data))
    
  }, [])

  console.log(categories)
  dispatch(setCategoriesStore(categories))
  
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home {...store} />
        </Route>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signin' component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = ({search, myList, categories}) =>({
  search,
  myList,
  categories,
})

// export default connect(mapStateToProps)(Home);

export default connect(mapStateToProps)(App);
