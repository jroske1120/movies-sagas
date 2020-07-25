import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

//Further imports
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    //click from getMovies in MovieList calls this
    yield takeEvery('GET_MOVIES', getMovieSaga)
    //click from handleClick in MovieList calls this
    // yield takeEvery('GET_DETAILS', getOneSaga)
    // yield takeEvery('GET_GENRES', getGenreSaga)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* getMovieSaga(action) {
    try {
        // get request that gets movies from database
        const response = yield axios.get('/movies')
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('issue with movie get saga:', error)
    }
}

function* getOneSaga(event) {
    console.log('getOneSaga', event)
    try {
        // get request that gets one movie from database based on id
        const response = yield axios.get(`/movies/${event.payload.id}`)
        yield put({ type: 'SET_DETAILS', payload: response.data })
    } catch (error) {
        console.log('issue with oneMovie get saga:', error)
    }
}

// function* getGenreSaga(event) {
//     console.log('getGenreSaga', event)
//     try {
//         const response = yield axios.get(`/genres/${event.payload.movie_id}`)
//         yield put({ type: 'SET_GENRES', payload: response.data })
//     } catch (error) {
//         console.log('issue with getGenreSaga get saga:', error)
//     }
// }


// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
// // Used to store the movie genres
// const genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GENRES':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        // genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
