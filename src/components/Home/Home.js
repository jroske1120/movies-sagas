import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem'
class MovieList extends Component {
    // Renders the entire app on the DOM

    render() {
        return (
            <div className="App">
                <h1>MovieList Page</h1>

                    {this.props.movies.map((movie, i) =>
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
    movies: reduxState.movies
});

export default connect(mapReduxStateToProps)(MovieList);

