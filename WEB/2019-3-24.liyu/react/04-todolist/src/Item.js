import React,{ Component } from 'react';
import PropTypes from 'prop-types';
class Item extends Component{
    constructor(props){
        super(props)
    }
    render(){
    	const {handleDel,task}= this.props;
        return(
            <li onClick={handleDel}> {task}</li>
        )
    }
    
}
Item.propTypes = {
    handleDelete:PropTypes.func,
    task:PropTypes.string.isRequired
}

Item.defaultProps = {
	task:'Hello'
}

export default Item