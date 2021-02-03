import React from 'react'
import Navbar from './Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search';
import Camera from './components/Camera';
import Heart from './components/Heart';
import User from './components/User';
import NavbarTop from './NavbarTop';

function App() {
  return (
    <div style={{ height: '1000vh' }}>
      <Router>
        <NavbarTop />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/camera'>
            <Camera />
          </Route>
          <Route path='/heart'>
            <Heart />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
