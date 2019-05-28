import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parceleReducer from './parcleReducer';

export default combineReducers({
    auth: authReducer,
    parcel: parceleReducer,
});
