import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    UNAUTHENTICATED,
    SIGNUP_SUCCESS
} from '../../actions/types';
import authReducer from '../../reducers/authReducer';

describe('User Authentication Reducer', () => {

    it('Should return a  new state if receiving a type', () => {
        const initialState = {};
        const expectation = { authenticated: true };
        const action = {
            type: AUTHENTICATION_SUCCESS,
            payload: {
                "login_message": {
                    "message": "successfully loggedin",
                    "token_generated": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1NTkxMjExODd9.yANSIwEBpUT_boOaVlr2TU5TRJn8BVDyOhgsafHOg-8",
                    "user_role": "user",
                    "username": "Roy22"
                }
            },
        };

        const newState = authReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });

    it('Authentication failure reducer', () => {
        const initialState = {};
        const expectation = { error: "Invalid Username or Password" };
        const action = {
            type: AUTHENTICATION_ERROR,
            payload: "Invalid Username or Password",
        };

        const newState = authReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });

    it('Test Unauthenticated action', () => {
        const initialState = {};
        const expectation = { authenticated: false};
        const action = {
            type: UNAUTHENTICATED,
            payload: {
                "login_message": {
                    "message": "successfully loggedin",
                    "token_generated": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1NTkxMjExODd9.yANSIwEBpUT_boOaVlr2TU5TRJn8BVDyOhgsafHOg-8",
                    "user_role": "user",
                    "username": "Roy22"
                }
            },
        };

        const newState = authReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });

    it('Should return a  new state if receiving a type', () => {
        const initialState = {};
        const expectation = { "message": {
            "message": "You registered successfully, Please Login"
        } };
        const action = {
            type: SIGNUP_SUCCESS,
            payload: {
                "message": "You registered successfully, Please Login"
            },
        };

        const newState = authReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });
});
