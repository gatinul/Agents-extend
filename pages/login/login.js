// pages/login/login.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrl:'./logo.png',
    phone: '',  
    password:'',
    isLogin:false,
    loginName:'',
    loginLevel:''
  },
  onShow: function () {
    this.setData({
      isLogin:app.data.isLogin
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // 获取输入账号  
  phoneInput :function (e) {  
    this.setData({  
      phone:e.detail.value  
    })  
  },  
  
// 获取输入密码  
  passwordInput :function (e) {  
    this.setData({  
      password:e.detail.value  
    })  
  },  
  
// 登录  
  login: function () {  
    var self = this
    if(self.data.phone.length == 0 ||               self.data.password.length == 0){ 
      wx.showToast({    
        title: '用户名和密码不能为空',    
        icon: 'loading',    
        duration: 1000    
      })  
      self.setData({
        loginName : '史翔宇',
        loginLevel: 'V1 代理'
      })
      wx.navigateTo({
        url: 'msg_success'
      })   
}else {  
  // 这里修改成跳转的页面  
      self.data.isLogin = true;
      self.setData({
        loginName : '史翔宇',
        loginLevel: 'V1 代理'
      })
      wx.navigateTo({
        url: 'msg_success'
      })   
    }    
  },
  //登出
  logout: function(){
    console.log('dd')
    var self = this 
    app.data.isLogin = false
    self.setData({
      isLogin:app.data.isLogin
    })
    wx.showToast({    
        title: '请稍后',    
        icon: 'loading',    
        duration: 1000    
      })  
  }
})