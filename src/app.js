// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage.js';

// Wipes slate for browser stylings
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js is running');

// Redux store 
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

