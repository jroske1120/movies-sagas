import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    // Renders the entire app on the DOM

    //get call to display specific movie that was clicked
    componentDidMount() {
        this.getMovieDetails();
    }

    getMovieDetails = () => {
        console.log('in getMovieDetails');
        //dispatch for one movie
        this.props.dispatch({ type: 'GET_DETAILS', payload: { id: this.props.match.params.id } })
    }

    render() {
        return (
            <div className="App">
                <h1>Details Page for {this.props.reduxState.details.title}</h1>
                <p>{this.props.reduxState.details.description}
                </p>
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);

