const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const ChatBot = require('dingtalk-robot-sender');
const robot = new ChatBot({
    webhook: 'https://oapi.dingtalk.com/robot/send?access_token=fe775bb14aa7ca55601e11e1675c35f2b2b393f14a33f59ca78fc067d9356415'
});

app.use(bodyParser());

app.use(async (ctx) => {
    //当请求时GET请求时，显示表单让用户填写
    if (ctx.method === 'GET') {
        console.log('GET');
        ctx.body = 'GET';
        //当请求时POST请求时
    } else if (ctx.method === 'POST') {
        //post请求
        let postData = ctx.request.body;
        console.log('post', postData);
        // postData.action
        // postData.data
        // postData.data.issue
        // postData.data.issue.title

        let textContent = {
            "msgtype": "text",
            "text": {
                "content": JSON.stringify(postData)
            }
        }
        robot.send(textContent)
            .then((res) => {
                // TODO
            });

        ctx.body = pastData;
    } else {
        ctx.body = '<h1>404!</h1>';
    }
})

app.listen(3000, () => {
    console.log('ok')
})
