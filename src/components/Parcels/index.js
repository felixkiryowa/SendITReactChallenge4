import React from 'react';
import Place from 'react-algolia-places';
import '../Auth/auth.scss';


const Dashboard = (
    {
        handleSubmit,
        handleFromPlace,
        handleToPlace,
        handleWeightChange,
    }
) =>  {
    return (
        <section className="testimonial py-5" id="testimonial" style={{marginTop:'150px'}}>
            <div className="container reg-container">
                <div className="row ">
                    <div className="col-md-3 py-5 custom-card-color text-white text-center ">
                        <div className=" ">
                            <div className="card-body">
                                <h2 className="py-3">Create Order</h2>
                                <p>
                                    Create Your Order, Any time of the day, Any whether and we shall deliver
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 py-5 border" style={{border:"2px solid red"}}>
                        <h4 className="pb-4">Please fill with your Order Details details</h4>
                        <form onSubmit={ handleSubmit }>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <Place
                                        className="search_box"
                                        id="order_pickup"
                                        name="order_pickup"
                                        placeholder="Parcel PickUp Location"
                                        onChange={ handleFromPlace }
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Place
                                        className="search_box"
                                        name="order_dropoff"
                                        id="order_dropoff"
                                        placeholder="Parcel DropOff Location"
                                        onChange={ handleToPlace }
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="weight"
                                        id="weight"
                                        placeholder="Parcel Weight"
                                        onChange={ handleWeightChange }
                                        
                                    />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <button type="submit" className="btn  float-right reg-button">
                                        Create Order
								    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  Dashboard;
