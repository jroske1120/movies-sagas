import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../components/App/App.js';
import registerServiceWorker from '../registerServiceWorker';
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
    yield takeEvery('ADD_NEW_INFO', updateMovieSaga)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* getMovieSaga(action) {
    try {
        // get request that gets movies from database
        const response = yield axios.get('/movies')
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('issue with movie PUT saga:', error)
    }
}

//Saga with axios PUT request to update the title and description
function* updateMovieSaga(action) {
    console.log('id coming in', action.payload, action.payload.id);
    try {
        // get request that gets movies from database
        const response = yield axios.put(`/movies/${action.payload.id}`, action.payload)
        yield put({ type: 'GET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('issue with movie get saga:', error)
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
