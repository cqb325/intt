
const KoaAction = require('koa-action');
const app = new KoaAction();
app.run();

app.router.get('/', (ctx, next)=>{
    ctx.redirect('/project/list');
    next();
});
