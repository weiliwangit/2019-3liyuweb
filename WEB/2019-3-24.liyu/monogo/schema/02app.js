const mongoose = require('mongoose')

const moment = require('moment')

const UserModel = require('./mod/01mod.js')

//1.连接数据库
mongoose.connect('mongodb://localhost/fengmi', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})

db.once('open', () => {
    console.log('connection db success')
    UserModel.findById('5d40f53121503007f0fea990',(err,user)=>{
        if(err){
            console.log('find user err:',err)
        }else{
            // console.log(user)
            const date = new Date(user.createdAt)
            //console.log(date.getHours())
            console.log(date.toLocaleString())
            console.log(moment(user.createdAt).format('YYYY-MM-DD HH:mm:ss'))
        }
    })  
})