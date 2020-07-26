import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    // Renders the entire app on the DOM

    goBackHome = () => {
        //button to push history to go back to Home list
        this.props.history.push('/');
    }

    goToEdit = () => {
        //
        this.props.dispatch({ type: 'SET_DETAILS', payload: { ...this.props.reduxState.details } })
        //
        this.props.history.push('/edit');
    }

    render() {
        return (
            <div>
                {/* Conditional rendering for if update reducer is undefined, display
                what's in details reducer. This way when we return to details
                after editing, our updates show instead of what's in details */}
                {this.props.reduxState.update.length === 0 ?
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
                            {/* conditional rendering to avoid errors from asynchronicity */}
                            {this.props.reduxState.details.genres === undefined ?
                                <p></p>
                                : <p>
                                    Genres: {this.props.reduxState.details.genres.join(', ')}
                                </p>}

                            <p>
                                {this.props.reduxState.details.description}
                            </p>
                            <button
                                onClick={this.goToEdit}>
                                Edit details
                            </button>
                        </div>
                    </div>
                    // if returning from the update page, and update reducer has info
                    //display the following
                    : <div>
                        <h3>
                            Details for
        </h3>
                        <h1>
                            {this.props.reduxState.update.title}
                        </h1>
                        <button
                            onClick={this.goBackHome}>
                            Back to Movie List
                     </button>
                        <div>
                            <img
                                src={this.props.reduxState.details.poster}
                                alt={this.props.reduxState.update.title}
                            />
                            {/* conditional rendering to avoid errors from asynchronicity */}

                            {this.props.reduxState.details.genres === undefined ?
                                <p></p>
                                : <p>
                                    Genres: {this.props.reduxState.details.genres.join(', ')}
                                </p>}

                            <p>
                                {this.props.reduxState.update.description}
                            </p>
                            <button
                                onClick={this.goToEdit}>
                                Edit details
                        </button>
                        </div>
                    </div>}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);

