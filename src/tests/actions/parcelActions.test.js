import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
    createParcel, getUserParcelOrders
} from '../../actions/parcelActions';
import {
    CREATE_PARCEL_FAILURE,
    CREATE_PARCEL_SUCCESS,
    GET_PARCEL_ORDERS_SUCCESS,
    GET_PARCEL_ORDERS_FAILURE,

} from '../../actions/types';

jest.mock('react-notify-toast');
describe('Testing Articles', () => {
    const middlewares = [thunk];

    const mockStore = configureMockStore(middlewares);

    beforeEach(() => moxios.install(axios));
    afterEach(() => moxios.uninstall(axios));


    it('Testing creating parcel orders success', () => {
        const expectedResponse = {
            message: "Successfully created an order"
        };

        const expectedActions = [{
            type: CREATE_PARCEL_SUCCESS,
            payload: expectedResponse,
        }];
        const expectedRes = [
            {
                payload: "Successfully created an order",
                type: "CREATE_PARCEL_SUCCESS",
            }
        ]
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedResponse,
            });
        });
        const orderData = {
            parcel_weight: 4,
            parcel_pickup_address: "masaka",
            parcel_destination_address: "lyantode"
        }
        const historyMock = { history: { push: jest.fn() } };

        const store = mockStore({});
        return store.dispatch(createParcel(orderData, historyMock)).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedRes);
        });
    });

    it('Testing creating parcel orders failure', () => {
        const expectedResponse = {
            message: "One or More Fields Are Missing"
        }

        const expectedActions = [{
            type: CREATE_PARCEL_FAILURE,
            payload: expectedResponse,
        }];
        const expectedRes = [
            {
                payload: "One or More Fields Are Missing",
                type: "CREATE_PARCEL_FAILURE",
            }
        ]
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: expectedResponse,
            });
        });
        const orderData = {
            parcel_weight: 4,
            parcel_pickup_address: "masaka"
        }
        const historyMock = { history: { push: jest.fn() } };

        const store = mockStore({});
        return store.dispatch(createParcel(orderData, historyMock)).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedRes);
        });
    });

    it('Testing get user parcel success', () => {

        const expectedResponse = [
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
            },
            {
                "created_at": "Tue, 28 May 2019 09:31:21 GMT",
                "order_current_location": "Bukoto, Nakawa, Kampala, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Ntinda, Nakawa, Kampala, Uganda",
                "parcel_order_id": 3,
                "parcel_pickup_address": "Bukoto, Nakawa, Kampala, Uganda",
                "parcel_weight": 5,
                "price": 250000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            },
            {
                "created_at": "Tue, 28 May 2019 11:23:00 GMT",
                "order_current_location": "Kampala, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Jinja, Uganda",
                "parcel_order_id": 4,
                "parcel_pickup_address": "Kampala, Uganda",
                "parcel_weight": 6,
                "price": 300000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            },
            {
                "created_at": "Tue, 28 May 2019 11:30:12 GMT",
                "order_current_location": "Mutumba, Karuzi, Burundi",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Kasese, Uganda",
                "parcel_order_id": 5,
                "parcel_pickup_address": "Mutumba, Karuzi, Burundi",
                "parcel_weight": 5,
                "price": 250000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            },
            {
                "created_at": "Wed, 29 May 2019 08:47:09 GMT",
                "order_current_location": "Kampala, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Kasese, Uganda",
                "parcel_order_id": 6,
                "parcel_pickup_address": "Kampala, Uganda",
                "parcel_weight": 5,
                "price": 250000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            },
            {
                "created_at": "Wed, 29 May 2019 06:43:00 GMT",
                "order_current_location": "Kamuli, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Mukono, Uganda",
                "parcel_order_id": 7,
                "parcel_pickup_address": "Kamuli, Uganda",
                "parcel_weight": 0,
                "price": 0,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            },
            {
                "created_at": "Wed, 29 May 2019 11:17:31 GMT",
                "order_current_location": "Masaka, Uganda",
                "order_name": null,
                "order_status": "pending",
                "parcel_destination_address": "Lyantonde, Uganda",
                "parcel_order_id": 8,
                "parcel_pickup_address": "Masaka, Uganda",
                "parcel_weight": 7,
                "price": 350000,
                "receivers_contact": null,
                "receivers_names": null,
                "senders firstname": "Roy ",
                "senders lastname": "Wasibani",
                "senders phone contact": "0700162509",
                "senders_user_id": 5
            }
        ];

        const expectedActions = [{
            type: GET_PARCEL_ORDERS_SUCCESS,
            payload: [
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
                },
                {
                    "created_at": "Tue, 28 May 2019 09:31:21 GMT",
                    "order_current_location": "Bukoto, Nakawa, Kampala, Uganda",
                    "order_name": null,
                    "order_status": "pending",
                    "parcel_destination_address": "Ntinda, Nakawa, Kampala, Uganda",
                    "parcel_order_id": 3,
                    "parcel_pickup_address": "Bukoto, Nakawa, Kampala, Uganda",
                    "parcel_weight": 5,
                    "price": 250000,
                    "receivers_contact": null,
                    "receivers_names": null,
                    "senders firstname": "Roy ",
                    "senders lastname": "Wasibani",
                    "senders phone contact": "0700162509",
                    "senders_user_id": 5
                },
                {
                    "created_at": "Tue, 28 May 2019 11:23:00 GMT",
                    "order_current_location": "Kampala, Uganda",
                    "order_name": null,
                    "order_status": "pending",
                    "parcel_destination_address": "Jinja, Uganda",
                    "parcel_order_id": 4,
                    "parcel_pickup_address": "Kampala, Uganda",
                    "parcel_weight": 6,
                    "price": 300000,
                    "receivers_contact": null,
                    "receivers_names": null,
                    "senders firstname": "Roy ",
                    "senders lastname": "Wasibani",
                    "senders phone contact": "0700162509",
                    "senders_user_id": 5
                },
                {
                    "created_at": "Tue, 28 May 2019 11:30:12 GMT",
                    "order_current_location": "Mutumba, Karuzi, Burundi",
                    "order_name": null,
                    "order_status": "pending",
                    "parcel_destination_address": "Kasese, Uganda",
                    "parcel_order_id": 5,
                    "parcel_pickup_address": "Mutumba, Karuzi, Burundi",
                    "parcel_weight": 5,
                    "price": 250000,
                    "receivers_contact": null,
                    "receivers_names": null,
                    "senders firstname": "Roy ",
                    "senders lastname": "Wasibani",
                    "senders phone contact": "0700162509",
                    "senders_user_id": 5
                },
                {
                    "created_at": "Wed, 29 May 2019 08:47:09 GMT",
                    "order_current_location": "Kampala, Uganda",
                    "order_name": null,
                    "order_status": "pending",
                    "parcel_destination_address": "Kasese, Uganda",
                    "parcel_order_id": 6,
                    "parcel_pickup_address": "Kampala, Uganda",
                    "parcel_weight": 5,
                    "price": 250000,
                    "receivers_contact": null,
                    "receivers_names": null,
                    "senders firstname": "Roy ",
                    "senders lastname": "Wasibani",
                    "senders phone contact": "0700162509",
                    "senders_user_id": 5
                },
                {
                    "created_at": "Wed, 29 May 2019 06:43:00 GMT",
                    "order_current_location": "Kamuli, Uganda",
                    "order_name": null,
                    "order_status": "pending",
                    "parcel_destination_address": "Mukono, Uganda",
                    "parcel_order_id": 7,
                    "parcel_pickup_address": "Kamuli, Uganda",
                    "parcel_weight": 0,
                    "price": 0,
                    "receivers_contact": null,
                    "receivers_names": null,
                    "senders firstname": "Roy ",
                    "senders lastname": "Wasibani",
                    "senders phone contact": "0700162509",
                    "senders_user_id": 5
                },
                {
                    "created_at": "Wed, 29 May 2019 11:17:31 GMT",
                    "order_current_location": "Masaka, Uganda",
                    "order_name": null,
                    "order_status": "pending",
                    "parcel_destination_address": "Lyantonde, Uganda",
                    "parcel_order_id": 8,
                    "parcel_pickup_address": "Masaka, Uganda",
                    "parcel_weight": 7,
                    "price": 350000,
                    "receivers_contact": null,
                    "receivers_names": null,
                    "senders firstname": "Roy ",
                    "senders lastname": "Wasibani",
                    "senders phone contact": "0700162509",
                    "senders_user_id": 5
                }
            ],
        }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedResponse,
            });
        });
        const store = mockStore({});
        return store.dispatch(getUserParcelOrders()).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });

    it('Testing get user parcel failure', () => {

        const expectedResponse = "Errors have occured";

        const expectedActions = [{
            type: GET_PARCEL_ORDERS_FAILURE,
            payload: expectedResponse,
        }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: expectedResponse,
            });
        });
        const store = mockStore({});
        return store.dispatch(getUserParcelOrders()).then(() => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });

});
