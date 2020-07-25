import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
    goToDetails = () => {
        this.props.history.push('/details');
        this.props.dispatch({type: 'SELECT_DETAILS', payload: {...this.props.movie}})
    }

    render() {
        return (
            <div className="App">
                <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.genres.join(', ')}</p>
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(MovieItem));

