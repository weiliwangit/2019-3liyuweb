
import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM} from './actionTypes.js'

export const getChangeItemAction = (task)=>({
    type: CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: DEL_ITEM,
    payload: index   
})
export const getLoadInitDataAction = (payload)=>({
    type:LOAD_DATA,
    payload
})
