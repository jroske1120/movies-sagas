import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    width: 350,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'silver',
  },
  media: {
    height: 450,
  },
};

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
    const { classes } = this.props;
    return (
      <div className="App">
        <h1>Edit This Movie!</h1>
        <Button
        variant="contained"
          onClick={this.goBack}>
          Cancel
          </Button>

          <TextField
            id="filled-basic"
            label="New Title"
            variant="filled"
            multiline
            rows={4}
            value={this.state.title}
            onChange={(event) => this.handleChange(event, "title")} />

          <TextField
            id="outlined-multiline-static"
            label="New Description"
            multiline
            rows={4}
            defaultValue={this.state.description}
            onChange={(event) => this.handleChange(event, "description")}
            variant="filled"
          />
          <Button
          variant="contained"
          onClick={this.handleSubmit}>
          Submit
          </Button>

        <Grid
          container direction="column"
          justify="center"
          alignItems="center">
          <Card variant="outlined"
            className={classes.card} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image={this.props.reduxState.details.poster}
                alt={this.props.reduxState.details.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.updatedInfo.title}<hr color="black" />
                </Typography>
                <Typography variant="body2" component="p">
                  {this.state.updatedInfo.description}<hr />
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Edit));

