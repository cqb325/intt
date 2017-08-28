
import { fromJS } from 'immutable';
import {
    REMENBER_USER_NAME,
    LOGIN,
    BEGIN_LOGIN,
    FAIL_LOGIN,
    DONE_LOGIN
} from '../actions/types';

const defaultState = {
    isLogining: false,
    logined: false,
    userInfo: {
        userName: null
    }
};

export default (state = defaultState, action) => {
    switch(action.type){
        case REMENBER_USER_NAME:
            return fromJS(state).setIn(['userInfo', 'userName'], action.payload.target.value).toJS();
        case LOGIN:
            console.log(action);
            return fromJS(state).set('logined', action.payload).toJS();
        case BEGIN_LOGIN:
            return fromJS(state).set('isLogining', true).toJS();
        case FAIL_LOGIN:
            return fromJS(state).set('isLogining', false).toJS();
        case DONE_LOGIN:
            return fromJS(state).set('userInfo', action.payload).set('isLogining', false).toJS();
        default:
            return state;
    }
};
