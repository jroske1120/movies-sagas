import React, { Component } from 'react';
import './App.css';
//import Router 
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'

//Import components
import Home from '../Home/Home'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'


class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount () {
    this.props.dispatch({type: 'GET_MOVIES'});
  }

  render() {
    return (
      <div className="App">

        <Router>
          <nav>
            <li>
            <Link to='/'>Movie List</Link>
            </li>
          </nav>
        <Route exact path='/' component={Home}/>
        <Route exact path='/details' component={Details}/>
        <Route exact path='/edit' component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
