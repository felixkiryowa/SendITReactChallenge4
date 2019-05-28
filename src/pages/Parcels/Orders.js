import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserParcelOrders } from '../../actions//parcelActions';
import CustomerOrdersComponent from '../../components/Parcels/CustomerOrders';

class Orders extends Component {

  
    componentWillMount() {
        const { userOrders } = this.props;
        userOrders();
    }


    render() {
        console.log('come onooooooooooo.............',this.props.parcels);
        
        return (
            <div>
                <CustomerOrdersComponent parcelOrders={ this.props.parcels } />
            </div>
        )
    }
}

Orders.propTypes = {
    userOrders: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    parcels: state.parcels.parcels,
});


export default connect(mapStateToProps, {
    userOrders: getUserParcelOrders,
})(Orders);
