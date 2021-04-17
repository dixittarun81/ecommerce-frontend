import {LOGIN_REQUEST} from '../actions/types';

const INITIAL_STATE = {
    isLogIn: false
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return state = {...state, isLogIn: true, user: action.payload };
        default:
            return state;
    }
}

export default authReducer;



