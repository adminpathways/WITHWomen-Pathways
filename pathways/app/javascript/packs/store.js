import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';

/* eslint-disable no-underscore-dangle */
export default function configureStore(rootReducer, history) {
    const middlewares = [thunk, routerMiddleware(history)];
    let enhancers = applyMiddleware(...middlewares);
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) { // eslint-disable-line
        enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(...middlewares)); // eslint-disable-line
    }

    return createStore(rootReducer, enhancers);
}
/* eslint-enable */