import React,{ Component } from 'react'
import Item from './Item.js'

import "./02-App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:["吃饭"],
            task:''
        }
    }
    handleAdd(){
        /*
        在这里this指向undefined,想要拿到this需要在执行这个函数时bind一下
        console.log(this)
        console.log('btn click...')
        console.log(this.state)
        this.state.list.push(this.state.task)
        console.log(this.state)
        */
        //数据驱动界面
        this.setState({
            list:[...this.state.list,this.state.task],
            task:''
        })       
    }
    handleChange(ev){
       /*
       this.setState({
            task:ev.target.value
       })
       */
      const task = ev.target.value
      this.setState(()=>({
         task:task
      }))
    }
    handleDel(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }
    getItems(){
        return this.state.list.map((item,index)=>{
            return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)}/>
        })  
    }
    /*在render里this指向APP*/
    render(){
        return( 
        <div className="App">
            <input onChange={this.handleChange.bind(this)} value={this.state.task} />
            <button onClick={this.handleAdd.bind(this)}>提交</button>
            <ul>
                {
                    this.getItems() 
                }
            </ul>
        </div> 
        )             
    }
}

export default App