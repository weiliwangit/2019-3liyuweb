/*let arr = ['bob', 'grex', 'tom'];
let arr1 = arr.map(function(item) {
    return `<li>${item}</li>`;
});
console.log(arr1); //[ '<li>bob</li>', '<li>grex</li>', '<li>tom</li>' ]


const arr = [{name:"Jim",age:"20"},{name:"Lily",age:"18"},{name:"Mei",age:"18"},]
arr.find((item)=>{
return item.age == '18'
})
//{name:"Lily",age:"18"}



*/


require('./index.css')
var _util = require('util')
var tpl = require('./index.tpl')

var list = [
    {name:'user-center',desc:'用户中心',link:'./user-center.html'},
    {name:'order-list',desc:'我的订单',link:'./order-list.html'},
    {name:'user-update-password',desc:'修改密码',link:'./user-update-password.html'}
]
module.exports = {
    render:function(name){
        list.find(function(item){
            return item.name == name
        }).isActive = true

        var html = _util.render(tpl,{
            list:list
        })

        $('.side').html(html)      
    }
} 