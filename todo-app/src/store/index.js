import { createStore, applyMiddleware, compose } from 'redux';
import todos from '../reducers/todos';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todos, composeEnhancers(applyMiddleware(thunk)));

export default store;
