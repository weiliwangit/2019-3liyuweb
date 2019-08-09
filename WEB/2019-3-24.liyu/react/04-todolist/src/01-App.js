import React ,{Component} from 'react'
import "./01-App.css"
class App extends Component{
   render(){
        return(
            <div>
                <input></input>
                <button className="btn">提交</button>
                <ul style={{color:"red"}}>
                    <li>睡觉</li>
                    <li>吃饭</li>
                    <li>打豆豆</li>
                </ul>
            </div>

            )
   }
}

export default App