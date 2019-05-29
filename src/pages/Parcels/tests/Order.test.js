import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Orders } from '../Orders';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    parcelReducer: {
        parcels: [],
    },
};
const store = mockStore(initialState);


describe('Orders Page Component', () => {
    let mountApp;
    const props = {
        userOrders: jest.fn(),
        parcelOrders: [
            {
                "created_at": "Tue, 28 May 2019 08:04:50 GMT",
                "order_current_location": "Kasese, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Kampala, Uganda",
                "parcel_order_id": 1,
                "parcel_pickup_address": "Kasese, Uganda",
                "parcel_weight": 4,
                "price": 200000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            },
            {
                "created_at": "Tue, 28 May 2019 08:04:50 GMT",
                "order_current_location": "Lugazi, Mukono, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Jinja, Uganda",
                "parcel_order_id": 2,
                "parcel_pickup_address": "Lugazi, Mukono, Uganda",
                "parcel_weight": 5,
                "price": 250000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            }
        ],
    }
    it('Should render without crashing', () => {
        mountApp = shallow(
            <Router>
                <Provider store={store}>
                    <Orders {...props} />
                </Provider>
            </Router>,
        );
        expect(mountApp).toMatchSnapshot();
    });

    it('Testing componentDidMount Method Called', () => {
        const spy = jest.spyOn(Orders.prototype, 'componentDidMount');
        shallow(<Orders {...props} />);
        expect(spy).toHaveBeenCalledTimes(1);
    });

});
