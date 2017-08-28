
import { fromJS } from 'immutable';
import {
    INTERFACES_LIST,
    INTERFACES_LAYOUT,
    BEGIN_GET_INTERFACES,
    INTERFACE_DELETE_DONE,
    INTERFACE_COPY_DONE
} from '../actions/types';

const defaultState = {
    isFetching: false,
    layout: 'grid',
    interfacesData: null,
    deleteFlag: null,
    copyFlag: null
};

export default (state = defaultState, action) => {
    switch(action.type){
        case INTERFACES_LAYOUT:
            return fromJS(state).set('layout', action.payload).toJS();
        case INTERFACES_LIST:
            return fromJS(state).set('interfacesData', action.payload)
                .set('deleteFlag', null)
                .set('copyFlag', null)
                .set('isFetching', false).toJS();
        case BEGIN_GET_INTERFACES:
            return fromJS(state).set('isFetching', true).toJS();
        case INTERFACE_DELETE_DONE:
            return fromJS(state).set('deleteFlag', action.payload).set('isFetching', false).toJS();
        case INTERFACE_COPY_DONE:
            return fromJS(state).set('copyFlag', action.payload).set('isFetching', false).toJS();
        case 'clear':
            return fromJS(state).set('copyFlag', null).set('deleteFlag', null).toJS();
        default:
            return state;
    }
};
