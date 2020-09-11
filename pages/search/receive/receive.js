Page({
  data: {
    messArray: [],
    puPath:'../../../images/deliver/pu.png',
    bjPath:'../../../images/deliver/protect.png'
  },
  onLoad: function(options) {
    const mess = wx.getStorageSync('ReceiveLogistics')
    this.setData({
      messArray: mess
    })
  },
  toMap: function (e) {
    let final = e.currentTarget.dataset.address
    let target = e.currentTarget.id
    wx.navigateTo({
      url: '../map/map?id=' + target + '&final=' + final,
    })
  },
})