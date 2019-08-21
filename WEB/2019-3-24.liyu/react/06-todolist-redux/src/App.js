import React, { Component } from 'react'
import axios from 'axios'
import store from './store'
import getLoadInitDataAction from './store/actionCreator.js'
/*
import {
    ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM
} from './store/actionTypes.js'
*/

import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction
} from './store/actionCreator.js'


import AppUI from './AppUI.js'

//容器组件
class App extends Component {
    constructor(props) {
        super(props)
        /*
        this.state = {
            list:["吃饭","睡觉"],
            task:''
        }
        */
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDel = this.handleDel.bind(this)

        this.state = store.getState()
        store.subscribe(() => { this.setState(store.getState()) })
    }
    handleAdd() {
        store.dispatch(getAddItemAction())
    }
    handleChange(ev) {
        const task = ev.target.value
        store.dispatch(getChangeItemAction(task))
    }
    handleDel(index) {
       store.dispatch(getDelItemAction(index))
    }
    componentDidMount(){
        //发送axios
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            // console.log(result)
            store.dispatch(getDelItemAction(payload))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <AppUI 
                task={this.state.task}
                list={this.state.list}
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                handleAdd={this.handleAdd}
            />
        )
    }
}

export default App