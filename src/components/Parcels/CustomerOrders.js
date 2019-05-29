import React from 'react'

const CustomerOrders = ({ parcelOrders }) => {
    return (
        <div className="container table-responsive{-sm|-md|-lg|-xl}" style={{ marginTop: "150px" }}>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Pick up Address</th>
                        <th scope="col">Destination Address</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Price</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Manage Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcelOrders.length > 0 ? 
                            parcelOrders.map(order => {
                                return (
                                    <tr key={order.parcel_order_id}>
                                        <td>{order.parcel_pickup_address}</td>
                                        <td>{order.parcel_destination_address}</td>
                                        <td>{order.order_status}</td>
                                        <td>{order.price}</td>
                                        <td>{order.created_at}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-success btn-sm dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Action
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Edit <i className="far fa-trash-alt"></i></a>
                                                    <a className="dropdown-item" href="#">Cancel <i className="far fa-window-close"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            (
                                <tr>
                                    <td>
                                        <p align="center">
                                            <i className="no-orders">No Parcel Orders were found, Please create Order!!!!</i>
                                        </p>
                                    </td>
                                </tr>
                            )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CustomerOrders;
