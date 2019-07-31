/*
const http=require("http")1引入http
const server=http.createServer((req,res)=>{//2在http的基础上创建一个服务
	req可读流
	res可写流
	res.end("ok")
})
server.listen(3000,"127.0.0.1",()=>{3服务创建好了需要明确服务是在哪个端口
	console.log("server is running htttp://127.0.0.1:3000")
})



fs.writeFileSync('./01.txt','hello',{flag:'a'})

fs.writeFile('./01.txt','hello',{flag:'w'},err=>{
    if(err){
        console.log('write file error:',err)
    }else{
        console.log('write file success')
    }
})

const writeFile = util.promisify(fs.writeFile)

writeFile('./01.txt','hello',{flag:'a'})
.then(data=>{
    console.log('write file success')
})
.catch(err=>{
    console.log('write file error:',err)
})







const data = fs.readFileSync('./01.txt',{encoding:'utf8'})
console.log(data)

fs.readFile('./01.txt',{flag:'r',encoding:'utf8'},(err,data)=>{
    if(err){
        console.log('read file err:',err)
    }else{
        console.log(data)
    }
})

const readFile = util.promisify(fs.readFile)

readFile('./01.txt',{flag:'r',encoding:'utf8'})
.then(data=>{
    console.log(data) 
})
.catch(err=>{
    console.log('read file err:',err)    
})

*/
const http=require("http")
const fs=require("fs")//4读取文件
const path=require("path")//格式化路径
const util=require("util")//为转化成promise做铺垫
const url=require("url")//为了用url.parse（）方法，该方法会把路径解析成URL对象，对象里面包含pathname：问号前面的地址，query：问号后面的参数表
const mime=require("./mime.json")//这个文件不需要导出么？
const server=http.createServer((req,res)=>{
	// 路由：根据不同的请求做不同的处理
	console.log(req.method+";;"+req.url)
	const parseUrl=url.parse(req.url,true)
	// console.log(parseUrl)
	const pathname=parseUrl.pathname
	// console.log(pathname)
	//路由处理
	// 首页路由 / /index.html
	if(pathname=="/"||pathname=="/index.html"){
		const filePath=path.normalize(__dirname+"/"+"static"+"/index.html")
		fs.readFile(filePath,{flag:"r",encoding:"utf8"},(err,data)=>{
			if(err){
				res.setHeader('Content-type','text/html;charset=UTF-8')
				res.statusCode = 404
				res.end('<h1>请求失败</h1>')
			}else{
				res.setHeader('Content-type',"text/html;charset=UTF-8")
				res.end(data)
			}

		})
	}else if(pathname=="/add"){
			console.log(11)
	}else{
        //console.log(req.url)//是用来获取用户在3000端口后面输入的所有字符
		const filePath=path.normalize(__dirname+"/"+"static"+req.url)
		// console.log(filePath)
		//读取文件，读取时需要获取地址，因此需要用到path核心模块
		//在此最好给地址格式化一下，
		// 为啥呢，不知道，老师说保险，所以引进“path”模块下的normalize
		fs.readFile(filePath,{flag:"r",encoding:"utf8"},(err,data)=>{
			if(err){
				res.setHeader('Content-type','text/html;charset=UTF-8')
				res.statusCode = 404
				res.end('<h1>请求失败</h1>')
			}else{
				//如果更改扩展名设置文档那么css会按照text/html来解析
				const extname=path.extname(filePath)//是用来获取扩展名的
				// console.log(extname)
				const mimeType=mime[extname]||'text/plain'
				console.log(mimeType)
				res.setHeader('Content-type',mimeType+";charset=UTF-8")
				res.end(data)
			}

		})
	}
})
	







server.listen(3000,"127.0.0.1",()=>{
	console.log("server is running htttp://127.0.0.1:3000")
})