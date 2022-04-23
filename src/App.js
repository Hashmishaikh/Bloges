import React from 'react'
import './App.css';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import Post from './components/Post';
import Navbars from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbars />
      <br/>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/post' component={Post}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
