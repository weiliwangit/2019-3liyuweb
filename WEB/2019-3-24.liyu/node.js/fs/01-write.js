/*
//同步写

const fs=require("fs");
// 一，打开文件
const fd=fs.openSync("./01.text","w")
// console.log(fd)
// 二，写文件
fs.writeSync(fd,"hello")
// 三，关闭文件
fs.closeSync(fd)
*/




//同步合并写
// const fs=require("fs");
// fs.writeFileSync("./01.text","qq",{flag:"w"})
// {flag:"w"}可以不写，也可以写成其他的，系统有默认值，



/*
//异步逐步写
const fs=require("fs");
// 一，打开文件
const fd=fs.open("./01.text","w",(err,fd)=>{
	if(err){
		console.log("write:",err)
	}else{
		// console.log(fd)
		// 二，写文件
		fs.write(fd,"bb",()=>{
			console.log()
		})
		// 三，关闭文件

	}
})
*/



// 异步合并写
const fs=require("fs");
const writeFile=fs.writeFile("./01.text","cc",{flag:"w"},err=>{
	console.log(err)
})
const util=require("util");
util.promisify(writeFile)
.then(data=>{
	console.log("write success")
})

