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

    handleClick = (event, id) => {
        console.log('in handleClick with id', id);
        this.props.dispatch({ type: 'FETCH_MOVIES', payload: id});
    }

    render() {
        return (
            <div className="App">
                <Router>
                <h1>MovieList Page</h1>
                <ul>
                    {this.props.reduxState.movies.map((item, index) =>
                        <li key={index}>
                            <Link to={`/details/${item.id}`}><img
                                onClick={(event) =>
                                    this.handleClick(event, item.id)}
                                src={item.poster} /></Link>
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

