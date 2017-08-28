
import { fromJS } from 'immutable';
import {
    INTERFACE_INFO,
    INTERFACE_BEGIN_GET,
    INTERFACE_REQUEST,
    INTERFACE_SCHEMA,
    INTERFACE_TEMPLATE,
    INTERFACE_URL_DONE
} from '../actions/types';

const defaultState = {
    isFetching: false,
    intf: {},
    data: null,
    schemaRet: null,
    templateRet: null,
    urlRet: null
};

export default (state = defaultState, action) => {
    switch(action.type){
        case INTERFACE_REQUEST:
            return fromJS(state).set('data', action.payload)
                .set('urlRet', null)
                .set('schemaRet', null)
                .set('templateRet', null)
                .set('isFetching', false).toJS();
        case INTERFACE_INFO:
            return fromJS(state).set('intf', action.payload)
                .set('urlRet', null)
                .set('schemaRet', null)
                .set('templateRet', null)
                .set('isFetching', false).toJS();
        case INTERFACE_BEGIN_GET:
            return fromJS(state).set('isFetching', true).toJS();
        case INTERFACE_SCHEMA:
            return fromJS(state).set('schemaRet', action.payload).set('isFetching', false).toJS();
        case INTERFACE_TEMPLATE:
            return fromJS(state).set('templateRet', action.payload).toJS();
        case INTERFACE_URL_DONE:
            return fromJS(state).set('urlRet', action.payload).set('isFetching', false).toJS();
        case 'clear':
            return fromJS(state)
                .set('schemaRet', null)
                .set('data', null)
                .set('urlRet', null)
                .set('templateRet', null).toJS();
        default:
            return state;
    }
};
