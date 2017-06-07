var app = getApp()
Page({
    login: function () {
        app.data.isLogin = true;
        wx.switchTab({
        url: 'login',
        fail:function(error){
            console.log(error)
        },
      })   
  }
});