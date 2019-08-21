
import axios from 'axios'

import * as types  from './actionTypes.js'

export const getChangeItemAction = (task)=>({
    type:types.CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:types.ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: types.DEL_ITEM,
    payload: index   
})


const getLoadInitDataAction = (payload)=>({
    type:types.LOAD_DATA,
    payload
})

export const getRequestInitDataAction = ()=>{
    return (dispatch,getState)=>{
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })        
    }
}



