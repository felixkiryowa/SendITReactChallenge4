import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Register } from '../../Auth/Register';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    authReducer: {},
};
const store = mockStore(initialState);


describe('Register Page Component', () => {
    let mountApp;
    it('Should render without crashing', () => {
        const props = {
            signupUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleChange: jest.fn(),
            checkPasswordMatch: jest.fn(),
            checkValidPhoneNumber: jest.fn(),

        };
        mountApp = mount(
            <Router>
                <Provider store={store}>
                    <Register {...props} />
                </Provider>
            </Router>,
        );
        expect(mountApp).toMatchSnapshot();
    });

    it('should call an onChange function', () => {
        const props = {
            signupUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleChange: jest.fn(),
            checkPasswordMatch: jest.fn(),
            checkValidPhoneNumber: jest.fn(),

        };
        const event = {
            preventDefault: () => { },
            target: {
                name: 'body',
                value: 'abc',
            },
        };
        const wrapper = mount(
            <Register {...props} />,
        );
        const firstnameInput = wrapper.find('#FirstName').first();
        firstnameInput.simulate('change', event);
        expect(event.target.value).toEqual('abc');
    });

    it('should call a submit a form', () => {
        const props = {
            signupUser: jest.fn(),
            handleSubmit: jest.fn(),
            handleChange: jest.fn(),
            checkPasswordMatch: jest.fn(),
            checkValidPhoneNumber: jest.fn(),

        }; 
        const wrapper = mount(
            <Register {...props} />,
        );
        const instance = wrapper.instance();
        const checkPasswordMatch = jest.spyOn(instance, 'checkPasswordMatch');
        const checkValidPhoneNumber = jest.spyOn(instance, 'checkValidPhoneNumber');
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(props.signupUser).toHaveBeenCalled();
        expect(checkPasswordMatch).toHaveBeenCalled();
        expect(checkValidPhoneNumber).toHaveBeenCalled();
    });

});
