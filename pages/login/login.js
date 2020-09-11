const App = getApp()
const MyRequest = require('../../utils/util.js')
Page({
  data: {

  },
  onLoad: function(options) {

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

  myLogin: function(e) {
    wx.showLoading({
      title: '加载中，请稍后...',
      mask: true
    })
    var userInfo = e.detail.userInfo
    const Secret = '403e776b46df07948b87ddf31f9e0437';
    const AppID = 'wx5dbe1324a9f598b5';
    var code;

    wx.login({
      success(res) {
        code = res.code
        let menthod = 'Login'
        let info = '<code>' + code + '</code>'
        MyRequest.request(menthod, info).then(e => {
          let target = 'LoginResult'
          let result = MyRequest.parseXml2(e.data, target)[0]
          SetStorge(result)
          App.globalData.userInfo.txUrl = userInfo.avatarUrl
          App.globalData.userInfo.nickName = userInfo.nickName

          //获取基本信息
          let token = wx.getStorageSync('Token')
          let menthod = 'QueryLogistics'
          let info = MyRequest.combinStr(new Array(token), menthod)
          MyRequest.request(menthod, info).then(
            res => {
              let result = MyRequest.parseXml2(res.data, 'logisticsMess')
              let obj = MyRequest.arrayToObj(result)
              var photoArray = new Array()
              var j = 0
              for (let i = 0, len = obj.length; i < len; i++) {
                let path = obj[i].photo
                let imgName = path.split('\\')[path.split('\\').length - 1]
                photoArray[j++] = MyRequest.downloadImg(imgName)
              }

              Promise.all(photoArray).then(res => {
                for (let i = 0, len = obj.length; i < len; i++) {
                  obj[i].tempPath = res[i]
                }
                wx.setStorageSync('logisticsMess', obj)
                const jjs = obj.length
                App.globalData.deliver = jjs
                wx.hideLoading()
                wx.switchTab({
                  url: '../deliveryGood/deliveryGood',
                })
              }).catch(err => {
                wx.hideLoading()
                wx.showToast({
                  title: '查询失败！',
                })
              })
            }
          ).catch(
            err => {
              wx.hideLoading()
              wx.showModal({
                title: 'Error',
                content: '查询失败！',
              })
            }
          )

        }).catch()
      }
    });
  },

  toemployee: function() {
    wx.navigateTo({
      url: '../employeeLogin/employeeLogin',
    })
  }
})

function SetStorge(infoArray) {
  wx.setStorage({
    key: infoArray[1].split(',')[0],
    data: infoArray[1].split(',')[1],
  })
  wx.setStorage({
    key: infoArray[2].split(',')[0],
    data: infoArray[2].split(',')[1],
  })
}