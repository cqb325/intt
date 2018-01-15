var Mock = require("mockjs");

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 返回 ‘ok’
            resolve('ok');
        }, time);
    })
};

module.exports = {
    '/:projectName/*!ALL': async function(){
        let {projectName, callback} = this.params;
        var url = this.ctx.url;

        let resData = async (inter, data, lazyTime)=>{
            if(inter.jsonp){
                var callback = callback || "callback";
                var resStr = callback + "(" + JSON.stringify(data) + ")";
                this.send(resStr);
            }else {
                //跨域
                var origin = this.ctx.get('origin');
                this.ctx.set("Access-Control-Request-Headers", "Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, content-type, X-E4M-With");
                this.ctx.set("Access-Control-Request-Method", "GET, POST, OPTIONS");
                this.ctx.set("Access-Control-Allow-Origin", origin);
                this.ctx.set("Access-Control-Allow-Credentials", "true");

                if(lazyTime){
                    await sleep(lazyTime);
                }
                this.json(data);
            }

            this.InterfaceService.updateReqNum(inter.id);
        }

        let project = await this.ProjectService.getProjectByName(projectName);
        if(project){
            let interfaces = await project.getInterfaces();
            if(interfaces){
                let template = null;
                for (let i in interfaces){
                    let interFace = interfaces[i];
                    let reg = new RegExp(interFace.url);
                    if(url.indexOf(interFace.url) != -1 || reg.test(url)){
                        find = true;
                        template = interFace.template;
                        try{
                            template = JSON.parse(template);
                            let data = Mock.mock(template);
                            if(data.___list){
                                data = data.___list;
                            }

                            if (interFace.lazy) {
                                await resData(interFace, data, interFace.lazyTime);
                            } else {
                                resData(interFace, data);
                            }
                        }catch (e){
                            console.log(e);
                            this.json({status: 404, msg: "/"+url+"接口模板存在问题"});
                        }
                        break;
                    }
                }

                if(!template){
                    this.json({
                        status: 404,
                        msg: `no interface found in project ${projectName}`
                    });
                }
            }else{
                this.json({
                    status: 404,
                    msg: `no interface found in project ${projectName}`
                });
            }
        }else{
            this.json({
                status: 404,
                msg: `project ${projectName} is not found`
            });
        }
    }
}
