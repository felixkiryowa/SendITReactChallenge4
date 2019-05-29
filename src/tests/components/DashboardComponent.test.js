import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import DashboardComponent from '../../components/Parcels/index';

describe('Sample Articles Component', () => {
    let mountApp;
    const props = {
        handleSubmit: jest.fn(),
        handleFromPlace: jest.fn(),
        handleFromPlace: jest.fn(),
        handleWeightChange: jest.fn(),
        errors: {

        },
    };
    beforeEach(() => {
        mountApp = mount(<DashboardComponent {...props} />);
    });

    it('Should render without crashing', () => {
        expect(mountApp).toMatchSnapshot();
    });
});
