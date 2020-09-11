const MyRequest = require("../../utils/util.js")
Page({
  data: {
    isImg: true,
    btnClick: false,
    tip: '成功！',
    tip01: '请保存下面的二维码',
    tip02: '收货人查件时会用到此二维码',
    tip03: '此二维码仅在此提供一次',
    img: '../../images/deliver/correct.png'
  },
  onLoad: function(options) {
    //pageType：0代表失败了，1代表成功，且是保价，2代表成功了，但是普通货物
    let page = this
    if (options.pageType == '0') //代表失败了
      page.setData({
        tip: '失败！',
        tip01: 'sorry，也许有一个问题，请重新下单',
        tip02: '',
        tip03: '',
        isImg: false
      })
    else if (options.pageType == '2') {
      page.setData({
        tip01: '感谢您选择顺丰',
        tip02: '快递员会尽快上门取件',
        tip03: '',
        isImg: false
      })
    }
    if (typeof options.img != "undefined") {
      let tempPath = options.img
      MyRequest.downloadImg(tempPath).then(res => {
        page.setData({
          img: res
        })
      }).catch(err => {})
    }
  },

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
  saveImg: function(e) {
    let page = this
    wx.previewImage({
      urls: [page.data.img],
      success: res => {
      },
      fail: err => {
      }
    })
  },
  close: function(e) {
    wx.switchTab({
      url: '../deliveryGood/deliveryGood',
    })
  }
})