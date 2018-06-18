import {GET_PUBLISHER, LOAD_PUBLISHER} from "../actions";
import axios                           from "axios";

export const publisherAPI = store=> next => action => {
    if(action.type === GET_PUBLISHER) {
        axios.get('/publishers').then(res => next({
            type: GET_PUBLISHER,
            publishers: res.data
        }))
    }
    else if(action.type === LOAD_PUBLISHER) {
        axios.get("/publishers").then(res => next({
            type    : LOAD_PUBLISHER,
            publishers: res.data
        }) )
    }
    else next(action);
};