import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers';

const defaultState ={};
const mw = [thunk];

const store = createStore(reducer, defaultState,
     compose(applyMiddleware(...mw),
    ));

export default store;