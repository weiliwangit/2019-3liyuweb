import React ,{Component} from 'react'
import "./02-App.css"
class App extends Component{
    constructor(props){
        /*在这里this是undefined，在这里想要获取App，
        需要在绑定的事件中bind一下*/
        super(props);
        this.state = {
            list:["吃饭","睡觉","打豆豆"],
            tast:""
        }
    }
    handleAdd(){
        this.setState({
            list:[...this.state.list,this.state.task],
            task:''
        })  
    }
    handleChange(ev){
        this.setState({
            task:ev.target.value 
        })
        // console.log(this.state)
    }
    handDele(){

    }
    render(){
        return(
            <div className="App">
                <input onChange={this.handleChange.bind(this)}></input>
                <button className="btn" onClick={this.handleAdd.bind(this)}>提交</button>
                <ul>
                   {
                        this.state.list.map((item,index)=>{
                            return(
                                <li 
                                    key={index} 
                                    onChange={this.handDele.bind(this)} 
                                >
                                    {item}
                                </li>
                            )
                        })
                   }
                </ul>
            </div>

            )
   }
}

export default App