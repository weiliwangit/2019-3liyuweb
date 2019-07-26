
const EventEmitter=require("events")
class ConsturEmitter extends EventEmitter{

}
const emitter=new ConsturEmitter()

emitter.on("text",()=>{
	console.log(1)
})//一个事件可以触发多次


emitter.emit("text")





