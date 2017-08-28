
import { createAction } from 'redux-actions';
import * as WebAPI from '../../api/index';

import {
    INTERFACES_LIST,
    BEGIN_GET_INTERFACES,
    INTERFACES_LAYOUT,
    INTERFACE_DELETE_DONE,
    INTERFACE_COPY_DONE
} from '../types';

let actions = {
    /**
     * interface list
     * @param  {[type]} projectId [description]
     * @return {[type]}           [description]
     */
    list: (projectId) => async (dispatch, getState)=>{
        if (getState().interfaces.isFetching){
            return;
        }

        /** 通知开始获取操作 */
        dispatch(actions.beginFetch());

        let list = await WebAPI.mockInterfaceList(projectId);
        dispatch(actions.doneFetch(list));
    },

    /**
     * Ajax begin
     * @return {[type]} [description]
     */
    beginFetch: ()=>({
        type: BEGIN_GET_INTERFACES
    }),

    /**
     * ajax done
     * @param  {[type]} projects [description]
     * @return {[type]}          [description]
     */
    doneFetch: (projects) =>({
        type: INTERFACES_LIST,
        payload: projects
    }),

    /**
     * interfaces list layout
     * @param  {[type]} layout [description]
     * @return {[type]}        [description]
     */
    switchLayout: (layout)=>({
        type: INTERFACES_LAYOUT,
        payload: layout
    }),

    /**
     * delete interface by id
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    deleteInterface: (id) => async (dispatch, getState)=>{
        if (getState().interfaces.isFetching){
            return;
        }

        dispatch(actions.beginFetch());

        let ret = await WebAPI.mockInterfaceDelete(id);
        dispatch(actions.doneDelete(ret));
    },

    /**
     * delete interface done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneDelete: (ret) =>({
        type: INTERFACE_DELETE_DONE,
        payload: ret
    }),

    /**
     * copy interface by id
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    copyInterface: (id) => async (dispatch, getState)=>{
        if (getState().interfaces.isFetching){
            return;
        }

        dispatch(actions.beginFetch());

        let ret = await WebAPI.mockInterfaceCopy(id);
        dispatch(actions.doneCopy(ret));
    },

    /**
     * copy interface done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneCopy: (ret) =>({
        type: INTERFACE_COPY_DONE,
        payload: ret
    }),

    /**
     * clear module data
     * @return {[type]} [description]
     */
    clear: () =>({
        type: 'clear'
    })
};


export default actions;
