module.exports = {
    '/list/:projectId': async function(){
        let {projectId} = this.params;
        let interfaces = await this.InterfaceService.list(projectId);
        this.json(interfaces);
    },

    '/detail/:id': async function(){
        let {id} = this.params;
        let intf = await this.InterfaceService.get(id);
        this.json(intf);
    },

    '/saveSchema!POST': async function(){
        let {schema, id} = this.params;
        let ret = await this.InterfaceService.saveSchema(id, schema);
        this.json(ret);
    },

    '/saveTemplate': async function(){
        let {template, id} = this.params;
        let ret = await this.InterfaceService.saveTemplate(id, template);
        this.json(ret);
    },

    '/add!POST': async function(){
        let ret = await this.InterfaceService.save(this.params);
        this.json(ret);
    },

    '/delete/:id': async function(){
        let {id} = this.params;
        let ret = await this.InterfaceService.remove(id);
        this.json(ret);
    },

    '/copy/:id': async function(){
        let {id} = this.params;
        let ret = await this.InterfaceService.copy(id);
        this.json(ret);
    },

    '/exist': async function(){
        let {url, prj_id, id} = this.params;
        let ret = await this.InterfaceService.exist(url, prj_id, id);
        this.ctx.set('Content-type', 'text/plain');
        this.send(ret);
    },

    '/url': async function(){
        let {url, id} = this.params;
        let ret = await this.InterfaceService.updateURL(url, id);
        this.json(ret);
    }
}
