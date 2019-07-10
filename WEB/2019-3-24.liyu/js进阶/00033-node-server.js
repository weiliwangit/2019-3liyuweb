var http=require("http");
var hostname="127.0.0.1";
var port=3000;
var fs=require("fs");
var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=="/favicon.ico"){
		res.end("/favicon.ico")
	}
	var filePsth="./"+req.url;
	fs.readFile(filePsth,function(err,date){
		if(err){
			res.statusCode = 404;
			res.end("not found");
		}else {
			res.end(date);
		}
	})
});
server.listen(port,hostname,function(){
	console.log('server is runing at http://127.0.0.1:3000');
});
// var http = require('http');

// var fs = require('fs');

// var server = http.createServer(function(req,res){
// 	console.log(req.url);
// 	if(req.url == "/favicon.ico"){
// 		res.end("favicon.ico");
// 	}

// 	//http://127.0.0.1/045-test.html
// 	var filePath  = "./" + req.url;
// 	fs.readFile(filePath,function(err,data){
// 		if(err){
// 			res.statusCode = 404;
// 			res.end("not found!!!");
// 		}else{
// 			res.end(data);
// 		}
// 	})

// 	// res.end("hello");
// });

// server.listen(3000,"127.0.0.1",function(){
// 	console.log("server is running at http://127.0.0.1:3000");
// });