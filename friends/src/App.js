import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Login } from './components/Login'
import { PrivateRoute } from './utils/PrivateRoute';
import { Friend } from './components/Friend';


function App() {
  return (
    <Router>
    <div className="App">

      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/friend'>Friend List</Link></li>
      </ul>

    <Switch>
      {/* <Route component={Login} /> */}
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friend' component={Friend} />
    </Switch>

    </div>
    </Router>
  );
}

export default App;