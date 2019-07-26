/*
const EventEmitter=require("events")//返回的是一个类,类也就是一个函数

// Node中的event没有默认行为和事件冒泡
const emitter=new EventEmitter
emitter.on("text",()=>{
	console.log(12)
	console.log(EventEmitter)
})
emitter.emit("text")
*/
const EventEmitter=require("events")
class ConsturEmitter extends EventEmitter{

}
const emitter=new ConsturEmitter()

emitter.on("text",(arg)=>{
	console.log(arg)
})//一个事件可以触发多次

// emitter.on("text",()=>{
// 	console.log(2)
// })
// emitter.on("text",()=>{
// 	console.log(3)
// })
// emitter.addListener和emitter.on(eventName, listener)是同一个方法
// emitter.addListener=【emitter.on一个EventEmitter对象默认最大可以有10个监听,
// 可以通过emitter.setMaxListeners(n)来设置最大监听数】，多个监听只需触发一次便可全部执行
// 监听时和浏览器端的事件不同,监听函数的第一个参数就是触发时传入的参数而不是event对象

emitter.emit("text","好")// 触发时和浏览器端的事件不同,传入参数不用数组而是参数列表

/*
emitter.once("text",()=>{
	console.log("只可监听一个")
})
emitter.emit("text")
emitter.emit("text")//只可触发一次
*/






