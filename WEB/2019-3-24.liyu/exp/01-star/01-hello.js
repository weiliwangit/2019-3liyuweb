const express = require('express')//返回一个函数
const app = express()//调用函数

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))