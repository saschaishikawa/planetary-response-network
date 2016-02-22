import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { IndexPage, UploadPage } from './pages';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={IndexPage}/>
    <Route path='/upload' component={UploadPage}/>

  </Router>,
  document.getElementById('app-container')
);
