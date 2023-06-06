import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { addBooksReducer } from './reducers/addBookReducer';
const reducer = combineReducers({
    books: addBooksReducer
})

const middleware = [thunk];


const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)) );


export default store