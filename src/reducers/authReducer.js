import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    UNAUTHENTICATED,

} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action) {
        case AUTHENTICATION_SUCCESS:
            return { ...state, authenticated: true };
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        case UNAUTHENTICATED:
            return { ...state, authenticated: false };
        default:
            return state;
    }
}
