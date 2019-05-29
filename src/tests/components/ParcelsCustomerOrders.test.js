import React from 'react';
import renderer from 'react-test-renderer';
import CustomerOrders from '../../components/Parcels/CustomerOrders';;

describe('Sample Articles Component', () => {
    let mountApp;
    const props = {
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
    };
    beforeEach(() => {
        mountApp = renderer.create(<CustomerOrders {...props} />);
    });

    it('Should render without crashing', () => {
        expect(mountApp).toMatchSnapshot();
    });
});
