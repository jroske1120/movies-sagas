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
        const { classes } = this.props;

        return (
            <div>
                <h1>Edit this Movie!</h1>
                {/* Conditional rendering for if update reducer is undefined, display
                what's in details reducer. This way when we return to details
                after editing, our updates show instead of what's in details */}
                {this.props.reduxState.update.length === 0 ?
                    <div>
                        <Grid
                            container direction="column"
                            justify="center"
                            alignItems="center">
                            <Card variant="outlined"
                                className={classes.card} >
                                <CardActionArea>
                                <Button
                                        variant="contained"
                                        onClick={this.goBackHome}>
                                        Back to Movies
                         </Button>
                                    <Button
                                        variant="contained"
                                        onClick={this.goToEdit}>
                                        Edit details
                            </Button>
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        image={this.props.reduxState.details.poster}
                                        alt={this.props.reduxState.details.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.props.reduxState.details.title}<hr color="black" />
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {this.props.reduxState.details.description}<hr />
                                        </Typography>
                                        {this.props.reduxState.details.genres === undefined ?
                                            <Typography></Typography>
                                            :
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Genres: {this.props.reduxState.details.genres.join(', ')}
                                            </Typography>}
                                    </CardContent>
                                   
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </div>
                    : <div>
                        <Grid
                            container direction="column"
                            justify="center"
                            alignItems="center">
                            <Card variant="outlined"
                                className={classes.card} >
                                <CardActionArea>
                                <Button
                                        variant="contained"
                                        onClick={this.goBackHome}>
                                        Back to Movie List
                         </Button>
                                    <Button
                                        variant="contained"
                                        onClick={this.goToEdit}>
                                        Edit details
                            </Button>
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        image={this.props.reduxState.details.poster}
                                        alt={this.props.reduxState.update.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.props.reduxState.update.title}<hr color="black" />
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {this.props.reduxState.update.description}<hr />
                                        </Typography>
                                        {this.props.reduxState.details.genres === undefined ?
                                            <Typography></Typography>
                                            :
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Genres: {this.props.reduxState.details.genres.join(', ')}
                                            </Typography>}
                                    </CardContent>
                                    
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Details));

