import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <h1>Details Page</h1>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);

