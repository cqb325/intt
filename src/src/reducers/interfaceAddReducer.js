
import { fromJS } from 'immutable';
import {
    INTERFACE_SAVE_BEGIN,
    INTERFACE_SAVE_DONE
} from '../actions/types';

const defaultState = {
    isFetching: false,
    ret: null
};

export default (state = defaultState, action) => {
    switch(action.type){
        case INTERFACE_SAVE_BEGIN:
            return fromJS(state).set('isFetching', true).toJS();
        case INTERFACE_SAVE_DONE:
            return fromJS(state).set('ret', action.payload).set('isFetching', false).toJS();
        case 'clear':
            return fromJS(state).set('ret', null).toJS();
        default:
            return state;
    }
};
