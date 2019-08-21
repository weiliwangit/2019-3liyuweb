
export const saveUsername = (username)=>{
    window.localStorage.setItem('username',username)
}
export const getUsername = ()=>{
    return window.localStorage.getItem('username')
}
export const removeUsername = ()=>{
    window.localStorage.removeItem('username')
}

/*
window.localStorage.setItem(key,value);//设置指定key的数据（JSON格式）
 
window.localStorage.getItem(key);//获取指定key的数据
window.localStorage.removeItem(key);//删除指定key的数据
 
window.localStorage.clear();//清空所有的存储数据

*/

//HTML5种的web storage包含两种存储方式：localStorage和sessionStorage，
//这两种方式存储的数据不会自动发给服务器，仅仅是本地保存，有大小限制。

//localStorage是持久化的本地保存，只要你找不到其所在地没有主动删掉，
//就会一直存在。就像一些缓存，都把APP删了还有。

//sessionStorage是会话级别的本地保存，比如一个页面关闭的时候该页面设置的sessionStorage数据会自动消失，
//在不同浏览器窗口不会共享的，即使是同一个浏览器的同一个页面。根Java里面的会话有点类似的。
 