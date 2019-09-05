//index.js
//获取应用实例
const app = getApp()

Page({
  tapMotto:function(){
  
    wx.navigateTo({
      url:"/pages/article/article"
    })
    
    /*
    wx.redirectTo({
      url: "/pages/article/article"
    })
    */
  }
})
