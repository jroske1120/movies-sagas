import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class MovieList extends Component {
    // Renders the entire app on the DOM

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    handleClick = (id) => {
        console.log('in handleClick with id', id);
        this.props.history.push(`/details/${id}`);
    }

    render() {
        return (
            <div className="App">
                <Router>
                <h1>MovieList Page</h1>
                <ul>
                    {this.props.reduxState.movies.map((item, index) =>
                        <li key={index}>
                            <img
                                onClick={() =>
                                    this.handleClick(item.id)}
                                src={item.poster} />
                        </li>
                    )
                    }</ul>
                    </Router>
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);

