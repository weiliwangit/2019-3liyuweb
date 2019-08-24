//本页查询：
//1,....所有列 Col(列) 必须放在 Row (行)内
//2，。。。用户数usernum    商品数ordernum   订单数productnum
//3，....actionCreator自己命名的，意思是import * as actionCreator from './actionCreator.js'
//actionCreator.js里面是reducer需要的方法
//4,.....import Layout from 'common/layout'共通的布局
//handleCount获取后台数据




import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb,Card,Row,Col } from 'antd'

import Layout from 'common/layout'

import "./index.css"
import { actionCreator } from './store'

class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.handleCount()
    }
    render() {
        const {usernum,ordernum,productnum } = this.props
        return (
        <div className="Home">
             <Layout>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Row>
                      <Col span={8}>
                        <Card title="用户数" bordered={false} style={{ width: 300 }}>
                          <p>{usernum}</p>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card title="商品数" bordered={false} style={{ width: 300 }}>
                          <p>{productnum}</p>
                        </Card>                      
                      </Col>
                      <Col span={8}>
                        <Card title="订单数" bordered={false} style={{ width: 300 }}>
                          <p>{ordernum}</p>
                        </Card>  
                      </Col>
                    </Row>                                                        
                </div>
             </Layout>
        </div>
        );
    }
}

//映射属性到组件
const mapStateToProps = (state) => ({
    usernum:state.get('home').get('usernum'),
    ordernum:state.get('home').get('ordernum'),
    productnum:state.get('home').get('productnum'),    
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
    handleCount:()=>{
        dispatch(actionCreator.getCountAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)