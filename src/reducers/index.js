import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parcleReducer from './parcleReducer';

export default combineReducers({
    auth: authReducer,
    parcels: parcleReducer
});
