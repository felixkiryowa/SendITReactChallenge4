import {
    CREATE_PARCEL_FAILURE,
    CREATE_PARCEL_SUCCESS,
    GET_PARCEL_ORDERS_SUCCESS,
    GET_PARCEL_ORDERS_FAILURE,
} from '../../actions/types';
import parcelReducer from '../../reducers/parcleReducer';

describe('Parcels  Reducer', () => {

    it('Should return a  new state if receiving a type', () => {

        const initialState = {
            parcels: [],
        };
        const expectation = {
                "parcels": [],
                "message": "Successfully created an order"
        };
        const action = {
            type: CREATE_PARCEL_SUCCESS,
            payload: "Successfully created an order",
        };

        const newState = parcelReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });

    it('Should return a  new state if receiving a type', () => {

        const initialState = {
            parcels: [],
        };
        const expectation = {
            "parcels": [],
            "error": "Order Not Successfully created, Please Retry"
        };
        const action = {
            type: CREATE_PARCEL_FAILURE,
            payload: "Order Not Successfully created, Please Retry",
        };

        const newState = parcelReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });

    it('Should return a  new state if receiving a type, get parcel orders', () => {

        const orders = [
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
            }
        ];


        const initialState = {
            parcels: [],
        };
        const expectation = {
            "parcels": [
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
                }
            ],
        };
        const action = {
            type: GET_PARCEL_ORDERS_SUCCESS,
            payload: orders,
        };

        const newState = parcelReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });


    it('Get parcel orders failure', () => {

        const initialState = {
            parcels: [],
        };
        const expectation = {
            "parcels": [],
            "error": "Order Not Successfully created, Please Retry"
        };
        const action = {
            type: GET_PARCEL_ORDERS_FAILURE,
            payload: "Order Not Successfully created, Please Retry",
        };

        const newState = parcelReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });

});
