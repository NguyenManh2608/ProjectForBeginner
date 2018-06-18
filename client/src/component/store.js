import {applyMiddleware, createStore} from 'redux';
import {bookAPI}                      from "./api/bookAPI";
import reducer                        from "./reducers/combineReducers";
import {publisherAPI}                 from "./api/publisherAPI";

const store = createStore(reducer, applyMiddleware(...[bookAPI,publisherAPI]));
export default store;
