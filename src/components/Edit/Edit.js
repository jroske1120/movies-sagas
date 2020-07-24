import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <h1>Edit Page</h1>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Edit);

