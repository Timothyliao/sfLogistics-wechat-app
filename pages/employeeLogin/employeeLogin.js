import MyRequest from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeNum: 'nooc'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.creatCode();
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
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    var account = e.detail.value.account;
    var paw = e.detail.value.paw;
    var code = e.detail.value.code;
    var orrectCode = that.data.codeNum;
    if (code != orrectCode) {
      wx.showModal({
        title: '',
        content: '验证码错误！',
        showCancel: false,
        success: this.creatCode
      })
      wx.hideLoading()
    } else {
      let menthod = 'VerifyEmployee'
      let info = '<account>' + account + '</account>'
      info += '<paw>' + paw + '</paw>'
      MyRequest.request(menthod, info).then(res => {
        if (res.statusCode == '500') {
          wx.showModal({
            title: 'Error',
            content: '哎呀,服务器跑丢了',
          })
          this.creatCode()
          wx.hideLoading()
          return
        } else {
          let target = 'VerifyEmployeeResult'
          var result = MyRequest.parseXml2(res.data, target)[0]
          let resCode = result[0].split(',')[1]

          if (resCode == '1') {
            wx.setStorage({
              key: 'emp_' + result[1].split(',')[0],
              data: result[1].split(',')[1],
            })
            wx.setStorage({
              key: 'emp_' + result[2].split(',')[0],
              data: result[2].split(',')[1],
            })
            wx.hideLoading()
            wx.redirectTo({
              url: 'emPage/emPage?id=' + account,
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          } else {
            wx.showModal({
              title: 'Error',
              content: '密码错误',
            })
            this.creatCode()
            wx.hideLoading()
            return
          }
        }
      }).catch()

    };

  },
  reflash: function() {
    this.creatCode();
  },

  creatCode: function() {
    var code = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var length = code.length;
    var codeLength = 5;
    var identify = '';
    for (var i = 0; i < codeLength; i++) {
      var random = Math.floor(Math.random() * 62);
      identify += code[random];
    }
    this.setData({
      codeNum: identify
    })
  }

})