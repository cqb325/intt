module.exports = {
    '/list': async function(){
        let projects = await this.ProjectService.list();
        this.json(projects);
    },

    '/exist': async function(){
        let {name} = this.params;
        let ret = await this.ProjectService.exist(name);
        this.ctx.set('Content-type', 'text/plain');
        this.send(ret);
    },

    '/add!POST': async function(){
        let {name, alias} = this.params;
        let ret = await this.ProjectService.add({name, alias});
        this.json(ret);
    },

    '/delete/:id': async function(){
        let {id} = this.params;
        let ret = await this.ProjectService.remove(id);
        console.log(ret);
        this.json(ret);
    }
}
