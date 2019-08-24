//本页参考：
//1,......moment在ant内部已经安装好了，不用再去下载插件
//2,......moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss') 
//固定写法只需变换moment内的的变量 
//3,......pagination是ant的一个分页器，接受一个对象
//current:当前页,total:总页数, pageSize:每页条数
//4,......onChange是一个回调函数 分页、排序、筛选变化时触发,这是ant内部已经设置好的为table标签,
//本页page代表current total pageSize，官方用法如下：
//Function(pagination, filters, sorter, extra: { currentDataSource: [] })
//loading加载是table标签内部封装好的，接受一个对象，spinning：true表示转圈加载或false加载完毕  tip：加载时提示内容
//5,......isFetching自己命的名字，在页面加载时使用
//6,......dataSource，columns是一个数组，table标签自带，columns里的属性固定，可改变属性值,这两个用来定义数据
//columns里面的是国王，dataSource里面是子民
//7,......spinning用于页面和区块的加载中状态。
//list,....是一个immutable数据，所以需要将他映射成数组，之后还是immutable数据，
//还要做一个转换toJS()，才拿到一个真正的数组



import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Table } from 'antd'
import moment from 'moment'

import Layout from 'common/layout'

import "./index.css"
import { actionCreator } from './store'

const columns = [{
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '是否管理员',
        dataIndex: 'isAdmin',
        key: 'isAdmin',
        render:(isAdmin)=>(isAdmin ? '是' : '否')
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '手机',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '注册时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
];


class User extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.handlePage(1)
    }
    render() {
        const { list,current,total,pageSize,handlePage,isFetching } = this.props
        const dataSource = list.map((user)=>{
            return {
                key:user.get('_id'),
                username:user.get('username'),
                isAdmin:user.get('isAdmin'),
                phone:user.get('phone'),
                email:user.get('email'),
                createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')  
            }
        }).toJS()
        return (
            <div className="User">
             <Layout>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                  <Breadcrumb.Item>用户列表</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Table 
                        dataSource={dataSource} 
                        columns={columns}
                        pagination={{
                            current:current,
                            total:total,
                            pageSize:pageSize
                        }}
                        onChange={
                            (page)=>{
                                handlePage(page.current)
                            }
                        }
                        loading={
                            {
                                spinning:isFetching,
                                tip:'数据正在努力的加载中'
                            }
                        }
                    />                                    
                </div>
             </Layout>
        </div>
        );
    }
}

//映射属性到组件
const mapStateToProps = (state) => ({
    list:state.get('user').get('list'),
    current:state.get('user').get('current'),
    total:state.get('user').get('total'),
    pageSize:state.get('user').get('pageSize'), 
    isFetching:state.get('user').get('isFetching'),  
})
//映射方法到组件
const mapDispatchToProps = (dispatch) =>({
    handlePage:(page)=>{
        dispatch(actionCreator.getPageAction(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)