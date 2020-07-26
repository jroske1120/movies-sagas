import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
    goToDetails = () => {
        // calls SET_DETAILS (details reducer) with 
        //payload of the selected movie's details
        this.props.dispatch({ type: 'SET_DETAILS', payload: {...this.props.movie }})
        //Then pushes history and brings us to the selected movies' details
        this.props.history.push('/details');
    }

    render() {
        return (
            <div className="App">
                {/* Each movie item has the image, title as alt text,
                and goes to its details when clicked */}
                <img
                    src={this.props.movie.poster}
                    alt={this.props.movie.title}
                    onClick={this.goToDetails} />
                <p>
                    {this.props.movie.title}
                </p>
                <p>
                    {/* This joins agg[genres] with comma to separate */}
                    Genres: {this.props.movie.genres.join(', ')}
                </p>
                <p>
                    {this.props.movie.description}
                </p>
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(MovieItem));

