import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

// local state = reduxState, whatever is left blank keeps old values
  state = {
    updatedInfo: {
      id: this.props.reduxState.details.id,
      title: this.props.reduxState.details.title,
      description: this.props.reduxState.details.description,
    }
  }

  goBack = () => {
    //back button brings us back to details page
    this.props.history.push('/details');
  }

  //handleChange currier to handle changes in inputs
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
    this.props.history.push('/details');
  }

  render() {
    return (
      <div className="App">
        <h1>Edit This Movie!</h1>
        <button 
        onClick={this.goBack}>
          Cancel
          </button>
        <form 
        onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={(event) => this.handleChange(event, "title")}
            placeholder="New Title" />
            <br></br>
          <textarea
            value={this.state.description}
            onChange={(event) => this.handleChange(event, "description")}
            placeholder="New Description" />
            <br></br>
          <input 
          type="submit" 
          placeholder="Save" />
        </form>
        <h1>
          Title:
          <br></br>
          {this.state.updatedInfo.title}
          </h1>
        <img 
        src={this.props.reduxState.details.poster}
        />
        <h5> Description:
          <br></br>
          {this.state.updatedInfo.description}
          </h5>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Edit);

