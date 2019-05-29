import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
    signInAction,
    signupAction,
} from '../../actions/authActions';
import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS

} from '../../actions/types';

jest.mock('react-notify-toast');
describe('Testing Articles', () => {
    const middlewares = [thunk];

    const mockStore = configureMockStore(middlewares);

    beforeEach(() => moxios.install(axios));
    afterEach(() => moxios.uninstall(axios));


    it('Testing user authentication success', () => {
        const expectedResponse = {
             login_message: {
                message: "successfully loggedin",
                token_generated: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1NTkxMjExODd9.yANSIwEBpUT_boOaVlr2TU5TRJn8BVDyOhgsafHOg-8",
                user_role: "user",
                username: "Roy22"
            }
        };

        const expectedActions = [{
            type: AUTHENTICATION_SUCCESS,
            payload: expectedResponse,
        }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedResponse,
            });
        });
        const userData = {
            username: "Roy22",
            password: "user123"
        }
        const historyMock = { history: { push: jest.fn() } };

        const store = mockStore({});
        return store.dispatch(signInAction(userData, historyMock)).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });

    it('Testing user authentication failure', () => {
        const expectedResponse = {
             login_message: {
                message: "Invalid Username or Password"
            }
    
        };
        const expectedRes = [
            {
                payload: "Invalid Username or Password",
                type: "AUTHENTICATION_ERROR",
            }
        ]

        const expectedActions = [{
            type: AUTHENTICATION_ERROR,
            payload: expectedResponse,
        }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: expectedResponse,
            });
        });  
        const userData = {
            "username": "Roy22",
            "password": "user123"
        }
        const historyMock = { history: { push: jest.fn() } };

        const store = mockStore({});
        return store.dispatch(signInAction(userData, historyMock)).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedRes);
        });
    });


    it('Testing signup user success', () => {
        const userData = {
            first_name: "stella",
            last_name: "nakazzi",
            email: "stellanakazzi@gmail.com",
            phone_contact: "0700162509",
            username: "stella12",
            user_password: "user123",
            user_type: "user"
        };

        const expectedResponse = {   
            message: "You registered successfully, Please Login"
        };

        const expectedActions = [{
            type: SIGNUP_SUCCESS,
            payload: expectedResponse,
        }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedResponse,
            });
        });
      
        const historyMock = { history: { push: jest.fn() } };

        const store = mockStore({});
        return store.dispatch(signupAction(userData, historyMock)).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });


    it('Testing signup user failure', () => {
        const userData = {
            first_name: "stella",
            last_name: "nakazzi",
            email: "stellanakazzi@gmail.com"
        };

        const expectedResponse = {
            login_message: {
                message: "Error have occured"
            }
        };

        const expectedActions = [{
            type: SIGNUP_FAILURE,
            payload: expectedResponse,
        }];

        const expectedRes= [
            {
                payload: "Error have occured",
                type: "SIGNUP_FAILURE",
            }
        ]
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: expectedResponse,
            });
        });

        const historyMock = { history: { push: jest.fn() } };
        const store = mockStore({});
        return store.dispatch(signupAction(userData, historyMock)).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedRes);
        });
    });
});
