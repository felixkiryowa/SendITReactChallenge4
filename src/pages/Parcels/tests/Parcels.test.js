import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Parcels } from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    parcelReducer: {
        parcels: [],
    },
};
const store = mockStore(initialState);


describe('Parcels Page Component', () => {
    let mountApp;
    it('Should render without crashing', () => {
        const props = {
            createOrder: jest.fn(),
            handleSubmit: jest.fn(),
            handleFromPlace: jest.fn(),
            handleToPlace: jest.fn(),
            handleWeightChange: jest.fn(),
        };
        mountApp = shallow(
            <Parcels {...props} />
              
        );
        expect(mountApp).toMatchSnapshot();
    });

    it('should call an onChange from place function', () => {
        const props = {
            createOrder: jest.fn(),
            handleSubmit: jest.fn(),
            handleFromPlace: jest.fn(),
            handleToPlace: jest.fn(),
            handleWeightChange: jest.fn(),
        };
        const event = {
            preventDefault: () => { },
            suggestion: {
                name: 'body',
                value: 'abc',
            },
        };
        const wrapper = mount(
            <Parcels {...props} />
        );
        const order_pickup = wrapper.find('#order_pickup').first();
        order_pickup.simulate('change', event);
        expect(event.suggestion.value).toEqual('abc');
    });

    it('should call an onChange destination place function', () => {
        const props = {
            createOrder: jest.fn(),
            handleSubmit: jest.fn(),
            handleFromPlace: jest.fn(),
            handleToPlace: jest.fn(),
            handleWeightChange: jest.fn(),
        };
        const event = {
            preventDefault: () => { },
            suggestion: {
                name: 'body',
                value: 'abc',
            },
        };
        const wrapper = mount(
            <Parcels {...props} />
        );
        const order_dropoff = wrapper.find('#order_dropoff').first();
        order_dropoff.simulate('change', event);
        expect(event.suggestion.value).toEqual('abc');
    });

    it('should call an onChange weight function', () => {
        const props = {
            createOrder: jest.fn(),
            handleSubmit: jest.fn(),
            handleFromPlace: jest.fn(),
            handleToPlace: jest.fn(),
            handleWeightChange: jest.fn(),
        };
        const event = {
            preventDefault: () => { },
            weight: {
                name: 'body',
                value: 3,
            },
        };
        const wrapper = mount(
            <Parcels {...props} />
        );
        const weight = wrapper.find('#weight').first();
        weight.simulate('change', event);
        expect(event.weight.value).toEqual(3);
    });


    it('should call a submit a form', () => {
        
        const props = {
            createOrder: jest.fn(),
            handleSubmit: jest.fn(),
            handleFromPlace: jest.fn(),
            handleToPlace: jest.fn(),
            handleWeightChange: jest.fn(),
        };

        const wrapper = mount(
            <Parcels {...props} />
        );

        const instance = wrapper.instance();
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(props.createOrder).toHaveBeenCalled();
    });

});
