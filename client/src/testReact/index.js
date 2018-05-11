import {combineReducers} from "redux";

import {publisherToReducer} from "./publisherToReducer";
import {bookToReducer} from "./reducer";

export default combineReducers({publisherToReducer, bookToReducer});