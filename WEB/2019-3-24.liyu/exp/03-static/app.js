const express = require('express')//返回一个函数
const app = express()//调用函数





//这个是模块化，把不同的人的请求分开写，如：使用者，博主。。。做出不同的请求
const usersRouter=require("./routers/users.js")
app.use("/users",usersRouter)





app.use(express.static('public'))//静态资源请求
//在只写127.。。。。。。：3000的情况下，会返回index.html，express已经封装好了，
// 所以建议在写首页页面时用index。html命名，如果不用index。html，则需要在输入
app.get('/get', (req, res) => res.send('get req'))//路由,第一个参数是ajax请求时的路径，
// 要做到前后台路径统一
app.post('/post', (req, res) => res.send('post req'))
app.put('/put', (req, res) => res.send('put req'))
app.delete('/delete',(req,res)=>res.send('delete req'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
