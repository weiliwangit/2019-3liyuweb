setTimeout(()=>{
	console.log("11")
},1000)
// setInterval(()=>{
// 	console.log("12")
// },1000)
setImmediate(()=>{
	console.log("12")
},4)
console.log("10")