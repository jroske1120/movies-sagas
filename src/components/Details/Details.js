import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  // Renders the entire app on the DOM

  //get call to display specific movie that was clicked
  componentDidMount(){
      this.getMovieDetails();
  }

  getMovieDetails(){
    console.log('in getMovieDetails');
    //dispatch for one movie
    this.props.dispatch({type: 'FETCH_ONE', payload: this.props.match.params.id })
  }

  render() {
    return (
      <div className="App">
      <h1>Details Page</h1>
      {JSON.stringify(this.props.match.params.id)}

      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);

