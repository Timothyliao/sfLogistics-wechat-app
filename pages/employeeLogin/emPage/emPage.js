const MyRequest = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: false,
    account: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let acc = options.id
    this.setData({
      account: acc
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
    Locate(this.data.account)
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
  ks: function() {
    this.setData({
      start: true
    })
    Locate(this.data.account)
  }
})

function Locate(account) {
  var menthod = 'TrackOrder'
  var employeeNum = account
  var location
  setInterval(function() {
    wx.getLocation({
      success: function(res) {
        location = res.longitude + ',' + res.latitude
      },
    })
    if (location) {
      let info = MyRequest.combinStr(new Array(location, employeeNum), menthod)

      MyRequest.request(menthod, info).then(
        res => {

        }
      ).catch(
        err => {

        }
      )
    }
  }, 2000)
}