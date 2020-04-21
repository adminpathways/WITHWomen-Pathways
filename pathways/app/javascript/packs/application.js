/* eslint-env node */
/*
 * This file is automatically compiled by Webpack, along with any other files
 * present in this directory. You're encouraged to place your actual application logic in
 * a relevant structure within app/javascript and only use these pack files to reference
 * that code so it'll be compiled.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import configureStore from './store';
import Routes from '../components/routes';
import rootReducer from '../reducers/rootReducer';
import {PersistGate} from 'redux-persist/integration/react';
import ScrollToTop from '../components/ScrollToTop';
import ReactGA from 'react-ga';

require('@rails/ujs').start();
require('turbolinks').start();
const componentRequireContext = require.context('components', true);
const ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);

const persistConfig = {
    key: 'root-pathways',
    storage
};

ReactGA.initialize('UA-147426622-1');

const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(persistedReducer, history);
const persistor = persistStore(store);

const ReactApp = () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <ScrollToTop>
                    <Routes/>
                </ScrollToTop>
            </Router>
        </PersistGate>
    </Provider>;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<ReactApp name='React'/>,
        document.getElementById('main').appendChild(document.createElement('div')));
});