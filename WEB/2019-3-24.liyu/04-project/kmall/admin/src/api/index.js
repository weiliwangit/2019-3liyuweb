//本页参考：
//switch(表达式) {
//    case n:
 //       代码块
 //       break;
 //    case n:
 //       代码块
 //       break;
   //  default:
     //   默认代码块
//1，如果多种 case 匹配一个 case 值，则选择第一个 case。toUpperCase()变成大写
//在发送axios时注意发送的是get和delete，需要加params属性，post和put需要加data属性
//withCredentials:true,是固定写法，是axios请求携带参数，注意要在登录时也要写上去







//目标 导出一个对象 对象的属性是方法名,对象的值是方法

import axios from 'axios'

import { removeUsername } from 'util'

import { SERVER,API_CONFIG } from './config.js'

const getApiObj = (apiConfig)=>{
    const apiObj = {}

    for(let key in apiConfig){
        apiObj[key] = (data)=>{
            //处理请求参数
            let url = apiConfig[key][0] || ''
            url = SERVER + url
            let method = apiConfig[key][1] || 'get'
            return request(url,method,data)
        }
    }

    return apiObj
}

const request = (url,method,data)=>{
    return new Promise((resolve,reject)=>{
        const options = {
            method: method,
            url:url,
            withCredentials:true,
        }
        switch(options.method.toUpperCase()){
            case 'GET':
            case 'DELETE':
                options.params = data
                break
            default:
                options.data = data
        }
        axios(options)
        .then(result=>{
            const data  = result.data
            if(data.code == 10){
                removeUsername()
                window.location.href = '/login'
                reject('用户没有权限')
            }else{
                resolve(data)
            }
            
        })
        .catch(err=>{
            reject(err)
        })
    })
}


export default getApiObj(API_CONFIG)