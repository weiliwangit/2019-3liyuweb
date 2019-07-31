const express = require('express')//返回一个函数
const app = express()//调用函数
app.use(express.static('public'))//静态资源请求
app.get('/', (req, res) => res.send('Hello World!'))//路由
app.listen(3000, () => console.log('Example app listening on port 3000!'))
