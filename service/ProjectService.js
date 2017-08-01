
const moment = require('moment');
const uuid = require('uuid');

module.exports = {
    list: async function() {
        let {Project} = this.orm;
        let projects = await Project.findAll({order: [['ct_time', 'desc']]});
        let ret = [];
        for(var i in projects){
            let project = projects[i];
            let proj = project.dataValues;
            proj.ct_time = moment(proj.ct_time).format('YYYY/MM/DD HH:mm:ss');
            let interfaces = await project.getInterfaces();
            proj.interfaceNum = interfaces.length;
            ret.push(proj);
        }
        return ret;
    },

    /**
     * 获取project
     * @param  {[type]} id [description]
     * @return {[type]}      [description]
     */
    getProject: async function(id){
        let {Project} = this.orm;
        let project = await Project.find({where: {id: id}, row: true});
        return project;
    },

    /**
     * 获取project
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getProjectByName: async function(name){
        let {Project} = this.orm;
        let project = await Project.find({where: {name: name}, row: true});
        return project;
    },

    exist: async function(name){
        let {Project} = this.orm;
        let projects = await Project.findAll({where: {name: name}, row: true});
        if(projects.length){
            return "false";
        }
        return "true";
    },

    add: async function(data){
        let {Project} = this.orm;
        data.id = uuid.v4();
        data.ct_time = new Date();
        let ret = await Project.build(data).save();
        if(ret){
            data = ret.dataValues;
            data.ct_time = moment(data.ct_time).format('YYYY/MM/DD HH:mm:ss');
            data.interfaceNum = 0;
            return data;
        }
        return null;
    },

    remove: async function(id){
        let {Project} = this.orm;
        let ret = await Project.destroy({where: {id: id}});
        return {
            success: ret === 1
        }
    }
}
