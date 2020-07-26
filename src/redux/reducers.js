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

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

const update = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_INFO':
            return [...state, action.payload];
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        update
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
