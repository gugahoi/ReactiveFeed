import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

// Components
import Welcome from './components/Welcome';
import Feed from './components/Feed';
import App from './components/App';

var routes = (
    <Router history={createHistory()}>
        <Route path='/' component={App}>
            <IndexRoute component={Feed} />
            <Route path='/welcome' component={Welcome}></Route>
        </Route>
    </Router>
);

ReactDom.render(routes, document.querySelector('#main'));
