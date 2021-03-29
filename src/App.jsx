import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';


const App = () =>(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Signin' component={Signin} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App;
