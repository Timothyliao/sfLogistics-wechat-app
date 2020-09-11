Page({
  /**
   * 页面的初始数据
   */
  data: {
    ssq: '', //省市区
    detailedInfo: '', //详细地址
    ssq_latitude: 0, //省市区坐标纬度
    ssq_longitude: 0, //省市区经度,
    traget: 0,
    error: false,
    msg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var traget = options.type;
    var that = this;
    if (traget == "1") {
      that.setData({
        traget: 1
      })
    }
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
  back: function() {
    wx.navigateBack({
      delta: 2,
      success: function(res) {}
    })

  },
  chooseLocation: function(e) {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          ssq: res.address,
          detailedInfo: res.name,
          ssq_latitude: res.latitude,
          ssq_longitude: res.longitude
        })
      },
    })
  },
  submit: function(res) {
    var that = this;
    let app = getApp();
    var value = res.detail.value;
    if (Judge(res.detail.value, that) == 0)
      return
    var address = value.name + ',';
    address += value.tel + ',';
    address += value.ssq + ',';
    address += value.detailInfo + ',';
    address += this.data.ssq_longitude + ',';
    address += this.data.ssq_latitude + ',';
    address += value.houseNum;
    if (this.data.traget == 0) {
      app.globalData.sAddress = address;
      app.globalData.deliverNmae = value.name;
      app.globalData.deliverAddress = value.detailInfo;
    } else {
      app.globalData.rAddress = address;
      app.globalData.reName = value.name;
      app.globalData.receiveAddress = value.detailInfo;
    }
    let pages = getCurrentPages();
    pages[pages.length - 2].setData({
      addT: this.data.traget
    });
    wx.navigateBack({
      delta: 1
    })
  }

})

function Judge(res, page) {
  if (res.name == "") {
    page.setData({
      msg: '请填写姓名！',
      error: true
    })
    return 0
  }
  if (res.tel == "") {
    page.setData({
      msg: '请填写电话！',
      error: true
    })
    return 0
  }
  if (res.ssq == "" || res.detailInfo == "") {
    page.setData({
      msg: '请选择地址！',
      error: true
    })
    return 0
  }
  return 1
}