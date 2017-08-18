import React from 'react';
import Main from '../components/main';
import Home from '../components/home';
import Profile from '../components/profile';
import Router from 'react-router';

const Router = Router.Route;
const IndexRoute = Route.IndexRoute;

const Route = () => (
  <Route path="/" component={Main}>
    <Route path="//profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)

ReactDOM.render((
  <Route>
    <Main />
  </Route>
), document.getElementById('app'))