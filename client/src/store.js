import useReducer from "./userReduer/userReducer"
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const devtool= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store=createStore(useReducer,compose(applyMiddleware(thunk),devtool))
export default store 