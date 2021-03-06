import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem'
class MovieList extends Component {
    // Renders the entire app on the DOM

    render() {
        return (
            <div>
                <h1>Joel's Movies</h1>
                {/* maps movies in database and 
                passes down props to MovieItem */}
                {this.props.reduxState.movies.map((movie, i) =>
                    <MovieItem key={i}
                        movie={movie}
                    />
                )
                }
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);

