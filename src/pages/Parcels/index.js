import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createParcel } from '../../actions//parcelActions';
import CreateParcelsComponent from '../../components/Parcels/';

export class Parcels extends Component {

    constructor() {
        super();
        this.state ={
            order_pickup: '',
            order_dropoff: '',
            weight: 0,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFromPlace = this.handleFromPlace.bind(this);
        this.handleToPlace = this.handleToPlace.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
    }

    handleFromPlace = (event) => {
        this.setState({
            order_pickup: event.suggestion.value
        })
    }

    handleToPlace = (event) => {
        this.setState({
            order_dropoff: event.suggestion.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { createOrder } = this.props;
        const parcelData = {
            "parcel_weight": parseInt(this.state.weight),
            "parcel_pickup_address": this.state.order_pickup,
            "parcel_destination_address": this.state.order_dropoff
        }
        createOrder(parcelData, this.props);
    }

    handleWeightChange = (event) => {
        event.preventDefault();
        this.setState({
            weight: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <CreateParcelsComponent 
                    handleSubmit={this.handleSubmit}
                    handleFromPlace={this.handleFromPlace}
                    handleToPlace={this.handleToPlace}
                    handleWeightChange={this.handleWeightChange}
                 /> 
            </div>
        )
    }
}

Parcels.propTypes = {
    createOrder: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
});


export default connect(mapStateToProps, {
    createOrder: createParcel
})(Parcels);
