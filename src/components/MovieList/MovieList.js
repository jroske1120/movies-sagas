import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    // Renders the entire app on the DOM

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        return (
            <div className="App">
                <h1>MovieList Page</h1>
                <ul>
                    {this.props.reduxState.movies.map((item, index) =>
                        <li key={index}>
                            <img src={item.poster} />
                        </li>
                    )
                    }</ul>
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);

