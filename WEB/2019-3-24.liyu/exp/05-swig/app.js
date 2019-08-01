const express = require('express')
const swig = require('swig')
const app = express();
const port = 3000

//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})

//配置应用模板
app.engine('html', swig.renderFile);
//配置模板的存放目录
app.set('views', './views')
//注册模板引擎
app.set('view engine', 'html')

app.get("/",(req,res)=>{
	//渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index',{
	    title:"万物生",
	    content:"你好，请问有什么需求",
	    obj:{
	    	name:"tom"
	    }
	    name:"朱朱"
    })	
})

app.listen(port, () => console.log(`app listening on port ${port}!`)) 