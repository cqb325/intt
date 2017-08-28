
import { createAction } from 'redux-actions';
import * as WebAPI from '../../api/index';
import { goBack } from 'react-router-redux';

import {
    INTERFACE_SAVE_BEGIN,
    INTERFACE_SAVE_DONE
} from '../types';

let actions = {
    /**
     * save Interface data
     * @return {[type]} [description]
     */
    save: (data) => async (dispatch, getState)=>{
        if (getState().mockState.isFetching){
            return;
        }

        dispatch(actions.beginFetch());

        let ret = await WebAPI.mockInterfaceAdd(data);
        dispatch(actions.doneFetch(ret));
    },

    /**
     * goBack after save interface success
     * @return {[type]} [description]
     */
    goBack: () => async (dispatch, getState)=>{
        dispatch(goBack());
    },

    /**
     * ajax begin
     * @return {[type]} [description]
     */
    beginFetch: ()=>({
        type: INTERFACE_SAVE_BEGIN
    }),

    /**
     * ajax done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneFetch: (ret) =>({
        type: INTERFACE_SAVE_DONE,
        payload: ret
    }),

    /**
     * clear module data
     * @return {[type]} [description]
     */
    clear: () => ({
        type: 'clear'
    })
};


export default actions;
