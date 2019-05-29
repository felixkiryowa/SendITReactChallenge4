import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    UNAUTHENTICATED,
    SIGNUP_SUCCESS

} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            return { ...state, authenticated: true };
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        case UNAUTHENTICATED:
            return { ...state, authenticated: false };
        case SIGNUP_SUCCESS:
            return { ...state, message:action.payload };
        default:
            return state;
    }
}
