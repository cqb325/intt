
import { createAction } from 'redux-actions';
import * as WebAPI from '../../api/index';

import {
    BEGIN_GET_PROJECTS,
    FAIL_GET_PROJECTS,
    GET_PROJECTS,
    PROJECT_LAYOUT,
    PROJECT_ADD,
    PROJECT_DELETE
} from '../types';

let actions = {
    /**
     * Project List
     * @return {[type]} [description]
     */
    list: () => async (dispatch, getState)=>{
        if (getState().mockState.isFetching){
            return;
        }

        /** 通知开始获取操作 */
        dispatch(actions.beginFetch());

        let projects = await WebAPI.mockProjectList();
        dispatch(actions.doneFetch(projects));
    },

    /**
     * Ajax Begin
     * @return {[type]} [description]
     */
    beginFetch: ()=>({
        type: BEGIN_GET_PROJECTS
    }),

    /**
     * Ajax Fail
     * @param  {[type]} errMsg [description]
     * @return {[type]}        [description]
     */
    failFetch:　errMsg =>({
        type: FAIL_GET_PROJECTS,
        payload: new Error(errMsg),
        error: true
    }),

    /**
     * Ajax Done
     * @param  {[type]} projects [description]
     * @return {[type]}          [description]
     */
    doneFetch: (projects) =>({
        type: GET_PROJECTS,
        payload: projects
    }),

    /**
     * Project Layout
     * @param  {[type]} layout [description]
     * @return {[type]}        [description]
     */
    switchLayout: (layout) =>({
        type: PROJECT_LAYOUT,
        payload: layout
    }),

    /**
     * save Project
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    saveProject: (data) => async (dispatch, getState)=>{
        if (getState().mockState.isFetching){
            return;
        }

        dispatch(actions.beginFetch());
        let ret = await WebAPI.mockProjectAdd(data);
        dispatch(actions.doneAdd(ret));
    },

    /**
     * add Project done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneAdd: (ret)=>({
        type: PROJECT_ADD,
        payload: ret
    }),

    /**
     * delete Project by id
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    deleteProject: (id)=> async (dispatch, getState)=>{
        if (getState().mockState.isFetching){
            return;
        }

        dispatch(actions.beginFetch());

        let ret = await WebAPI.mockProjectDelete(id);
        dispatch(actions.doneDelete(ret));
    },

    /**
     * delete project done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneDelete: (ret)=>({
        type: PROJECT_DELETE,
        payload: ret
    }),

    /**
     * clear module data
     * @return {[type]} [description]
     */
    clear: ()=>({
        type: 'clear'
    })
};


export default actions;
