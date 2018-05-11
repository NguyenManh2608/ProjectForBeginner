import {applyMiddleware, createStore} from 'redux';
import {bookAPI} from "../testReact/bookAPI";
import reducer from "../testReact/index";
import {publisherAPI} from "./publisherAPI";

const store = createStore(reducer, applyMiddleware(...[bookAPI,publisherAPI]));
export default store;
