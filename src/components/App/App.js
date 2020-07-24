import React, { Component } from 'react';
import './App.css';
//import Router 
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'

//Import components
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">

        <Router>
          <nav>
            <li>
            <Link to='/'>Movie List</Link>
            </li>
            <li>
            <Link to='/details/:id'>Movie details</Link>
            </li>
            <li>
            <Link to='/edit'>Edit a Genre</Link>
            </li>
          </nav>
        <Route exact path='/' component={MovieList}/>
        <Route exact path='/details/:id' component={Details}/>
        <Route exact path='/edit' component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
