const http = require('http')
const fs = require('fs')//用来读取文件
const path = require('path')//
const url = require('url')//为了用url.parse方法才引入的核心模块
const querystring = require('querystring')

const swig = require('swig')

const { get,add } = require('./Model/item.js')
const mime = require('./mime.json')
//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
    //路由:根据不同的请求做不同的处理
    console.log(req.method+"::"+req.url)//req.url用来获取3000端口后输入的所有地址或参数
    
    const parsedUrl = url.parse(req.url,true)//把req.url转换成对象，便于获取地址或参数

    const pathname = parsedUrl.pathname//url.parse(req.url,true).pathname此属性指的是输入的地址不包含参数

    //路由处理
    
    //首页路由 / /index.html
    if(pathname == "/" || pathname == "/index.html"){
        //1.获取数据
        get()
        .then(data=>{
            //将数据分配到页面并返回页面
            const filePath = path.normalize(__dirname+"/static/index.html")
            //引入模版
            const template = swig.compileFile(filePath)//这个swig模板上有一个compileFile方法，该方法返回一个函数，
            // 此函数会在后台中读取filePath该文件，并以html的形式显示在后台
            
            const html = template({
                data:data
            })
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.end(html) 
        })
        .catch(err=>{
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')
        })
    }
    //添加路由
    else if(pathname == "/add"){//POST请求
        //1.获取参数
        let body = ''
        req.on('data',(chunk)=>{
            body+=chunk//这里接受的是一个字符串
        })
        req.on('end',()=>{
            const query = querystring.parse(body)//这里是把字符串转换成对象
            //2.根据参数生成任务对象并且写入到文件中
            add(query.task)
            .then(data=>{
                //3.如果写入成功,将新生成的任务对象返回到前端    
                res.end(JSON.stringify({
                    code:0,
                    message:'添加成功',
                    data:data
                }))
            })
            .catch(err=>{
               console.log("add task err::",err)
               res.end(JSON.stringify({
                    code:1,
                    message:'添加失败',
                }))                
            })
        })
    }
    //静态资源的处理
    else{
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
                const extname = path.extname(filePath)
                const mimeType = mime[extname] || 'text/plain'
                res.setHeader('Content-type',mimeType+";charset=UTF-8")
                res.end(data) 
            }
        })
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})