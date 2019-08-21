
import React,{ Component } from 'react'
import {Button,Input,Row,Col,List} from 'antd';
import Item from './Item.js'

import "./App.css"
// import 'antd/dist/antd.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:["吃饭"],
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleAdd(){
        this.setState((preState)=>({
            list:[...preState.list,preState.task],
            task:''
        }))
    }
    handleChange(ev){
      const task = this.input.value
      this.setState(()=>({
         task:task
      }))
    }
    handleDel(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState(()=>({
            list
        }))
    }
    getItems(){
        return this.state.list.map((item,index)=>{
          return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)} />
        })        
    }
    render(){
        return( 
        <div className="App">
            <Row>
              <Col span={18}>
                <Input placeholder="请输入数据" />
              </Col>
              <Col span={6}>
                <Button type="danger">提交</Button>
              </Col>
            </Row>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                    <List.Item>
                     {item}
                    </List.Item>
                    )}
            />
        </div> 
        )             
    }
}

export default App