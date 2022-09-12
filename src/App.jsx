import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Player from './components/containers/Player';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

const App = () => {
  const { Provider } = AppContext
  const state = useInitialState()

  return (
    <Provider value={state}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Signin' component={Signin} />
          <Route exact path="/Player/:id" component={Player} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  )
}

// const mapStateToProps = ({ search, myList, categories }) => ({
//   search,
//   myList,
//   categories,
// })

export default App;
