//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    rightFlag:false,
    userInfo: {},
    item:0,
    data: {
      array: [1, 2, 3, 4, 5]
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeName:function(){
    this.setData({
      motto:'Hello zhaodafeng',
    })
  },
  onLoad: function () {
    console.log(this.rightFlag)
    if (this.rightFlag==false){
      console.log(11);
    }else{
      console.log(22);
    }
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        rightFlag:true,
      })
      
    })
  }
})