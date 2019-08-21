//本页查询：
//windows.location.href="/url" 当前页面打开URL页面
//withCredentials:true,是固定写法，是axios请求携带cookies参数,后面程序想要携带cookies参数，这个登录的地方必须有这个代码

import axios from 'axios'
import api from 'api'
import { message } from 'antd'

import * as types  from './actionTypes.js'

import { saveUsername } from 'util'

const getLoginReqestStartAction = ()=>({
    type:types.LOGIN_REQEST_START,
})
const getLoginReqestDoneAction = ()=>({
    type:types.LOGIN_REQEST_DONE,
})

export const getLoginAction = (values)=>{
    return (dispatch,getState)=>{
        dispatch(getLoginReqestStartAction())
        values.role = 'admin'
        api.login(values)
        .then(result=>{
            if(result.code == 0){
                //1.在前端保存登录信息
                saveUsername(result.data.username)
                //2.跳转到后台首页
                window.location.href = "/"
            }else{
                message.error(result.message)
            }            
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })
        .finally(()=>{
            dispatch(getLoginReqestDoneAction())
        })        
        /*
        axios({
            method: 'post',
            url:'http://127.0.0.1:3000/sessions/users',
            data:values,
            withCredentials:true
        })
        .then(result=>{
            // console.log(result)
            const data  = result.data
            if(data.code == 0){
                //1.在前端保存登录信息
                saveUsername(data.data.username)
                //2.跳转到后台首页
                window.location.href = "/"
            }else{
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })
        .finally(()=>{
            dispatch(getLoginReqestDoneAction())
        })
        */       
    }
}



