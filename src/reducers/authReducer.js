import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    UNAUTHENTICATED,
    SIGNUP_FAILURE,
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
        case SIGNUP_FAILURE:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}
