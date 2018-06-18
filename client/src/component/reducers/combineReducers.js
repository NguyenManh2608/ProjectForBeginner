import {combineReducers} from "redux";

import {publisherToReducer} from "./publisherToReducer";
import {bookToReducer}      from "./bookToReducer";

export default combineReducers({publisherToReducer, bookToReducer});