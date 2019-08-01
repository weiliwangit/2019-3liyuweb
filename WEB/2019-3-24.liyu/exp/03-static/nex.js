const express=require('express')
const app=express()
const port=3000
app.use(express.static('public'))
app.use((req,res,next)=>{
	console.log(11)
	next()
})
app.get('/get',(req,res)=>res.send("get req"))
app.listen(port,()=>console.log('server is running 3000'))