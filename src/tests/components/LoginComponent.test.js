import React from 'react';
import renderer from 'react-test-renderer';
import LoginComponent from '../../components/Auth/Login';

describe('Sample Articles Component', () => {
    let mountApp;
    const props = {
        handleSubmit: jest.fn(),
        handlePasswordChange: jest.fn(),
        handleUsernameChange: jest.fn(),
        username: 'Roy22',
        password: 'user123',
        errors: {
            
        },
    };
    beforeEach(() => {
        mountApp = renderer.create(<LoginComponent {...props} />);
    });

    it('Should render without crashing', () => {
        expect(mountApp).toMatchSnapshot();
    });
});
