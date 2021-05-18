const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
    //当请求时GET请求时，显示表单让用户填写
    if (ctx.method === 'GET') {
        console.log('GET');
        ctx.body = 'GET';
        //当请求时POST请求时
    } else if (ctx.method === 'POST') {
        //post请求
        let pastData = ctx.request.body;
        console.log('post', pastData);
        ctx.body = pastData;
    } else {
        ctx.body = '<h1>404!</h1>';
    }
})

app.listen(3000, () => {
    console.log('ok')
})
