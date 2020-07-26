import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

class MovieItem extends Component {


    goToDetails = () => {
        // calls SET_DETAILS (details reducer) with 
        //payload of the selected movie's details
        this.props.dispatch({ type: 'SET_DETAILS', payload: { ...this.props.movie } })
        //Then pushes history and brings us to the selected movies' details
        this.props.history.push('/details');
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
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
                                onClick={this.goToDetails}
                                image={this.props.movie.poster}
                                alt={this.props.movie.title} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.movie.title}<hr color="black"/>
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {this.props.movie.description}<hr/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Genres: {this.props.movie.genres.join(', ')}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* This joins agg[genres] with comma to separate */}
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(MovieItem)));

