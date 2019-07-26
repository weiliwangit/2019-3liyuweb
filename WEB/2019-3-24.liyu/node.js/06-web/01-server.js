/*
const http=require("http")
const server=http.createServer((req,res)=>{
	//req 可读流
	// res 可写流
	res.end("good")
})
server.listen(3000,"127.0.0.1",()=>{
	console.log("server is running http://127.0.0.1:3000")
})
*//*
const http=require("http")
const path=require("path")
const fs=require('fs')
const 
//每一次请求都会执行createServer方法中的函数
const server=http.createServer((req,res)=>{
	//console.log(req.url)//记录请求地址

	const filePath=path.normalize(__dirname+"/"+req.url)
	// console.log(filePath)
	//读取文件
	fs.readFile(filePath,(err,data)=>{
		//返回数据
		if(err){
			res.setHeader()
			res.end("<h1>请求出错</h1>")//注意end里是字符串
		}else{
			res.end(data)
		}
	})
})




server.listen(3000,"127.0.0.1",()=>{
	console.log("server is running http://127.0.0.1:3000")
})
*/






const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('./mime.json')


//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
    console.log("url::",req.url)
    //静态资源的处理
    const filePath = path.normalize(__dirname+"/static/"+req.url)
    //1.读取文件
    fs.readFile(filePath,(err,data)=>{
        //2.返回数据
        if(err){
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')
        }else{
            //1.根据扩展名设置mime类型
            //.css text/css
            //.html text/html
            const extname = path.extname(filePath)//获取扩展名
            const mimeType = mime[extname] || 'text/plain'
            res.setHeader('Content-type',mimeType+";charset=UTF-8")//响应头的参数是告诉浏览器按照什么规则去解析
            res.end(data) 
        }
    })
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})