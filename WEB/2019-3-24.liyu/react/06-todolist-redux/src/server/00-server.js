const http=require('http')
const server=http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin',"*")
	res.end(JSON.stringify(['learn js','learn react']))
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running')
})