import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Main from '../components/Main';
import EditTodo from '../components/EditTodo';
import NotFound from '../components/NotFound';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/todo/edit/:id" component={EditTodo} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
