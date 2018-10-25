import './views/css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import {Provider, } from 'react-redux';
import {Route, BrowserRouter as Router, } from 'react-router-dom';
import {App, ErrorDisplay, } from './views/Components/index';
import {CurrentWeather, Home, } from './views/Containers/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Home}/>
        <Route exact path="/current-weather" component={CurrentWeather}/>
        <Route exact path="/error" component={ErrorDisplay}/>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root')
);

