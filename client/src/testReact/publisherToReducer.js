import {GET_PUBLISHER} from "./actions";

export function publisherToReducer(state = [], action) {
    if(action.type === GET_PUBLISHER) {
        return [...action.publishers]
    }

    return state;
}