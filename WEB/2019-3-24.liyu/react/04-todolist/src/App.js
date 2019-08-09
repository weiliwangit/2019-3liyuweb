import React ,{Component} from 'react'
/*在jsx语法中使用组件分为html组件和自定义组件,
自定义组件必须大写字母开头*/
class App extends Component{
    render(){

        /*return <div> here is a App </div>,这是js注释*/
        /*return语句后面不能是空白行,可以用()来格式化代码 */
        /*
        return <Fragment>
	        <div>
	        	<input></input>
	        	<button></button>
	        </div>
        </Fragment>
        */
        return(
		        <div>
		        	nihao
		        </div>
	        )
        
        {
        	//在返回组件内容时,如果不想有多余的标签,
        	//可以使用React.Fragment来代替html标签
        	// 单行注释要加花括号
        }
	}
}

export default App