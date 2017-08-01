
const moment = require('moment');
const uuid = require('uuid');

const ProjectService = require('./ProjectService');

module.exports = {
    list: async function(proj_id) {
        let {Interface} = this.orm;
        let interfaces = await Interface.findAll({where: {prj_id: proj_id}, row: true, order: [['ct_time', 'desc']]});
        interfaces = interfaces.map(function(intf){
            let ret = intf.dataValues;
            ret.ct_time = moment(ret.ct_time).format('YYYY/MM/DD HH:mm:ss');
            return ret;
        });
        let project = await ProjectService.getProject(proj_id);
        return {
            project: project,
            interfaces: interfaces
        };
    },

    get: async function(id){
        let {Project, Interface} = this.orm;
        let intf = await Interface.find({where: {id: id}, row: true});
        if(intf){
            let ret = intf.dataValues;
            let project = await Project.find({where: {id: intf.prj_id}, row: true});
            ret.project = project.dataValues;
            return ret;
        }

        return intf;
    },

    saveSchema: async function(id, schema){
        let {Interface} = this.orm;

        let ret = await Interface.update({schema: schema}, {where: {id: id}});
        return {
            success: !!ret.length
        }
    },

    saveTemplate: async function(id, template){
        let {Interface} = this.orm;

        let ret = await Interface.update({template: template}, {where: {id: id}});
        return {
            success: !!ret.length
        }
    },

    save: async function(data){
        let {Interface} = this.orm;

        data.id = uuid.v4();
        data.ct_time = new Date();
        data.reqNum = 0;

        let ret = await Interface.create(data);
        if(ret){
            return {
                success: true
            }
        }else{
            return {
                success: false
            };
        }
    },

    remove: async function(id){
        let {Interface} = this.orm;
        let ret = await Interface.destroy({where: {id: id}});
        return {
            success: ret === 1
        }
    },

    copy: async function(id){
        let {Interface} = this.orm;
        let intf = await Interface.find({where: {id: id}, row: true});
        if(intf){
            let newInterface = intf.dataValues;
            newInterface.id = uuid.v4();
            newInterface.alias = newInterface.alias + '_' + new Date().getTime();
            newInterface.url = newInterface.url + '_' + new Date().getTime();
            newInterface.ct_time = new Date();
            newInterface.reqNum = 0;

            let ret = await Interface.build(newInterface).save();
            return {
                success: !!ret
            }
        }
        return {
            success: false
        };
    },

    updateReqNum: async function(id){
        let {Interface} = this.orm;
        let intf = await Interface.find({where: {id: id}, row: true});
        if(intf){
            let newInterface = intf.dataValues;
            let num = newInterface.reqNum ? newInterface.reqNum + 1 : 1;
            Interface.update({reqNum: num}, {where: {id: id}});
        }
    },

    exist: async function(url, prj_id, id){
        let {Interface} = this.orm;
        let interfaces = await Interface.findAll({where: {prj_id: prj_id, url: url, id: {
            ne: id
        }}, row: true});
        if(interfaces.length){
            return "false";
        }
        return "true";
    },

    updateURL: async function(url, id){
        let {Interface} = this.orm;
        let ret = await Interface.update({url: url}, {where: {id: id}});
        return {
            success: !!ret.length && ret[0] === 1
        }
    }
}
