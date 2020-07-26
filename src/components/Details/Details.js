import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    // Renders the entire app on the DOM

    goBackHome = () => {
        this.props.history.push('/');
    }

    goToEdit = () => {
        this.props.history.push('/edit');
        this.props.dispatch({ type: 'SET_DETAILS', payload: { ...this.props.reduxState.details } })
    }

    render() {
        return (
            <div>
                <h3>
                    Details for
            </h3>
                <h1>
                    {this.props.reduxState.details.title}
                </h1>
                <button
                    onClick={this.goBackHome}>
                    Back to Movie List
            </button>
                <div>
                    <img
                        src={this.props.reduxState.details.poster}
                        alt={this.props.reduxState.details.title}
                    />
                    <p>
                        Genres: {this.props.reduxState.details.genres.join(', ')}
                    </p>
                    <p>
                        {this.props.reduxState.details.description}
                    </p>
                    <button
                        onClick={this.goToEdit}>
                        Edit details
                </button>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);

