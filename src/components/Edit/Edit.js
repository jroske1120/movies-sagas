import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {


  state = {
    updatedInfo: {
      id: this.props.reduxState.details.id,
      title: '',
      description: ''
    }
  }

  goBack = () => {
    this.props.history.push('/details');
  }

  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      updatedInfo: {
        ...this.state.updatedInfo,
        [type]: event.target.value
      }

    })
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.dispatch({
      type: "ADD_NEW_INFO",
      payload: this.state.updatedInfo
    })
    // this.setState({
    //   updatedInfo: {
    //     title: '',
    //     description: ''
    //   }
    // })
    // this.props.history.push('/details');
  }

  // The details page should have the buttons:

  // - `Save` button, which should update the title and description in the database and bring the user to the Details Page

  // > Base functionality does not require the current values (the existing movie title and description) to populate in the input and textarea.

  // > Base functionality does not require the movie information to load correctly after refresh of the browser.
  render() {
    return (
      <div className="App">
        <h1>Edit Page</h1>
        {JSON.stringify(this.props.reduxState.details.id)}
        <button onClick={this.goBack}>Cancel (Goes back to Movie Details)</button>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={(event) => this.handleChange(event, "title")}
            placeholder="New Title" /><br></br>
          <textarea
            value={this.state.description}
            onChange={(event) => this.handleChange(event, "description")}
            placeholder="New Description" /><br></br>
          <input type="submit" placeholder="Save" />
        </form>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Edit);

