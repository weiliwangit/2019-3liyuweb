//本页说明:
//1，。。。。。path="/product/save/:productId?"带问号是正则的一种规则，意思是冒号后面的可有可无。
//productId可以通过this.props.match.params.productId在save.js中拿到，主要是this.props.match这个



import React, { Component } from 'react'
import { 
    Route, 
    Switch,
} from "react-router-dom"
import ProductSave from './save.js'
import ProductDetail from './detail.js'
import ProductList from './list.js'


import "./index.css"

class Product extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <Switch>
                <Route path="/product/save/:productId?" component={ProductSave} />
                <Route path="/product/detail/:productId?" component={ProductDetail} />
                <Route path="/product/" component={ProductList} />
           </Switch> 
        )
    }
}


export default Product