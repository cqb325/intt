
import { createAction } from 'redux-actions';
import * as WebAPI from '../../api/index';

import {
    INTERFACE_BEGIN_GET,
    INTERFACE_INFO,
    INTERFACE_REQUEST,
    INTERFACE_SCHEMA,
    INTERFACE_TEMPLATE,
    INTERFACE_URL_DONE
} from '../types';

let actions = {
    /**
     * get interface detail info
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    get: (id) => async (dispatch, getState)=>{
        if (getState().interface.isFetching){
            return;
        }

        // ajax start
        dispatch(actions.beginFetch());

        let intf = await WebAPI.mockInterfaceDetail(id);
        dispatch(actions.doneFetch(intf));
    },

    /**
     * request interface mock data
     * @param  {[type]} intf [description]
     * @return {[type]}      [description]
     */
    req: (intf) => async (dispatch, getState)=>{
        if (getState().interface.isFetching){
            return;
        }

        // let ret = await WebAPI.mockInterfaceMockData(intf);
        let requestConfig = {
			credentials: 'include',
			method: 'GET',
			headers: {
				'Accept': 'text/plain',
				'Content-Type': 'text/plain'
			},
			mode: "cors",
			cache: "force-cache"
		}
        let ret = await fetch(`/mock/${intf.project.name}/${intf.url}`, requestConfig);
        if(intf.jsonp){
            ret = await ret.text();
            ret = ret.substring(9, ret.length - 1);
            ret = JSON.parse(ret);
        }else{
            ret = await ret.json();
        }

        dispatch(actions.doneRequest(ret));
    },

    /**
     * ajax begin
     * @return {[type]} [description]
     */
    beginFetch: ()=>({
        type: INTERFACE_BEGIN_GET
    }),

    /**
     * ajax done
     * @param  {[type]} intf [description]
     * @return {[type]}      [description]
     */
    doneFetch: (intf) =>({
        type: INTERFACE_INFO,
        payload: intf
    }),

    /**
     * request mock data done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneRequest: (ret) =>({
        type: INTERFACE_REQUEST,
        payload: ret
    }),

    /**
     * save interface's template schema
     * @param  {[type]} id     [description]
     * @param  {[type]} schema [description]
     * @return {[type]}        [description]
     */
    saveSchema: (id, schema) => async (dispatch, getState) => {
        if (getState().interface.isFetching){
            return;
        }

        dispatch(actions.beginFetch());

        let ret = await WebAPI.mockInterfaceSchema(id, JSON.stringify(schema));
        dispatch(actions.doneSchema(ret));
    },

    /**
     * save interface's template schame done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneSchema: (ret) =>({
        type: INTERFACE_SCHEMA,
        payload: ret
    }),

    /**
     * save interface template
     * @param  {[type]} id       [description]
     * @param  {[type]} template [description]
     * @return {[type]}          [description]
     */
    saveTemplate: (id, template) => async (dispatch, getState) => {
        let ret = await WebAPI.mockInterfaceTemplate(id, template);
        dispatch(actions.doneTemplate(ret));
    },

    /**
     * save interface template done
     * @param  {[type]} ret [description]
     * @return {[type]}     [description]
     */
    doneTemplate: (ret) => ({
        type: INTERFACE_TEMPLATE,
        payload: ret
    }),

    updateURL: (id, url)=> async (dispatch, getState)=>{
        if (getState().interface.isFetching){
            return;
        }

        dispatch(actions.beginFetch());

        let ret = await WebAPI.mockInterfaceURL(id, url);
        dispatch(actions.doneURL(ret));
    },

    doneURL: (ret) =>({
        type: INTERFACE_URL_DONE,
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
