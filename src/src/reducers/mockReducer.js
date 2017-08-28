
import { fromJS } from 'immutable';
import {
    BEGIN_GET_PROJECTS,
    FAIL_GET_PROJECTS,
    GET_PROJECTS,
    PROJECT_LAYOUT,
    PROJECT_ADD,
    PROJECT_DELETE
} from '../actions/types';

const defaultState = {
    isFetching: false,
    layout: 'grid',
    projects: [],
    addProjectRet: null,
    deleteProjectRet: null
};

export default (state = defaultState, action) => {
    switch(action.type){
        case PROJECT_LAYOUT:
            return fromJS(state).set('layout', action.payload).toJS();
        case BEGIN_GET_PROJECTS:
            return fromJS(state).set('isFetching', true).toJS();
        case FAIL_GET_PROJECTS:
            return fromJS(state).set('isFetching', false).toJS();
        case GET_PROJECTS:
            return fromJS(state).set('projects', action.payload)
            .set('addProjectRet', null)
            .set('deleteProjectRet', null)
            .set('isFetching', false).toJS();
        case PROJECT_ADD:
            return fromJS(state).set('addProjectRet', action.payload).set('isFetching', false).toJS();
        case PROJECT_DELETE:
            return fromJS(state).set('deleteProjectRet', action.payload).set('isFetching', false).toJS();
        case 'clear':
            return fromJS(state).set('addProjectRet', null)
                .set('deleteProjectRet', null).toJS();
        default:
            return state;
    }
};
