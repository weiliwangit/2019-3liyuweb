const mongoose=require('mongoose')//引入核心模块
const UserModel=require("./ownmod.js")
//连接mongodb数据库
mongoose.connect('mongodb://localhost/wws',{useNewUrlParser:true})
//获取db对象
const db=mongoose.connection
//连接失败
db.on('error',(error)=>{
	console.log('connection db error',error)
	throw error
})
db.once("open",()=>{
	console.log("connection db success")
	UserModel.insertMany([
	{name:"tom",age:18},
	{name:"leo",age:20}
	],(err,docs)=>{
		if(err){
            console.log('insertMany err:',err)
        }else{
            console.log(docs)
        }
	})
})
