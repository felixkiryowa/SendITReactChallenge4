import React from 'react';
import renderer from 'react-test-renderer';
import RegisterComponent from '../../components/Auth/Register';

describe('Sample Articles Component', () => {
    let mountApp;
    const props = {
        handleChange: jest.fn(),
        handleSubmit:jest.fn(),
        errors: {

        },
    };
    beforeEach(() => {
        mountApp = renderer.create(<RegisterComponent {...props} />);
    });

    it('Should render without crashing', () => {
        expect(mountApp).toMatchSnapshot();
    });
});
