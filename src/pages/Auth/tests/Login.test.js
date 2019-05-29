import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Login } from '../../Auth/Login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    authReducer: {  },
};
const store = mockStore(initialState);


describe('Login Page Component', () => {
    let mountApp;
    it('Should render without crashing', () => {
        const props = {
            loginUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleUsernameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
        };
        mountApp = mount(
            <Router>
                <Provider store={store}>
                    <Login {...props} />
                </Provider>
            </Router>,
        );
        expect(mountApp).toMatchSnapshot();
    });

    it('should call an onChange username function', () => {
        const props = {
            loginUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleUsernameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
        };
        const event = {
            preventDefault: () => { },
            target: {
                name: 'body',
                value: 'abc',
            },
        };
        const wrapper = mount(
            <Login {...props} />,
        );
        const bodyInput = wrapper.find('.UsernameInput').first();
        bodyInput.simulate('change', event);
        expect(event.target.value).toEqual('abc');
    });

    it('should call an onChange password function', () => {
        const props = {
            loginUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleUsernameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
        };
        const event = {
            preventDefault: () => { },
            target: {
                name: 'body',
                value: 'abc',
            },
        };
        const wrapper = mount(
            <Login {...props} />,
        );
        const bodyInput = wrapper.find('.PasswordInput').first();
        bodyInput.simulate('change', event);
        expect(event.target.value).toEqual('abc');
    });

    it('should call a submit a form', () => {
        const props = {
            loginUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleUsernameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
        };
        const wrapper = mount(
            <Login {...props} />,
        );
        const instance = wrapper.instance();
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(props.loginUser).toHaveBeenCalled();
    });

});
