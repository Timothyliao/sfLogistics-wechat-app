// pages/myself/myself.js
const app = getApp()
Page({

  data: {
    name: app.globalData.userInfo.nickName,
    txUrl: app.globalData.userInfo.txUrl,
    islogin: false,
    receive: app.globalData.receive, //代收件
    deliver: app.globalData.deliver, //寄件数
    discount: app.globalData.discount, //优惠券
    points: app.globalData.points //积分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      name: app.globalData.userInfo.nickName,
      txUrl: app.globalData.userInfo.txUrl,
      receive: app.globalData.receive, //代收件
      deliver: app.globalData.deliver, //寄件数
      discount: app.globalData.discount, //优惠券
      points: app.globalData.points //积分
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  login: function(e) {
    wx.clearStorage();
    wx.redirectTo({
      url: '../login/login',
    })
  },

  search: function(e) {
    var id = e.currentTarget.id;
    if (id == 'j') {
      wx.switchTab({
        url: '../search/search?type=1',
      })
    } else {
      wx.switchTab({
        url: '../search/search?type=2',
      })
    }
  }
})