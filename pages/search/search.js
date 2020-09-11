const MyRequest = require('../../utils/util.js')
Page({
  data: {
    messArray: [],
    receive: getApp().globalData.receive, //代收件
    deliver: getApp().globalData.deliver, //寄件数
    selectItem: 1,
    puPath: '../../images/deliver/pu.png',
    bjPath: '../../images/deliver/protect.png'
  },

  onLoad: function(options) {
    let page = this;
    this.setData({
      receive: getApp().globalData.receive,
      deliver: getApp().globalData.deliver
    })
    let obj = wx.getStorageSync('logisticsMess')
    page.setData({
      messArray: obj
    })

    if (this.data.messArray.length != 0) {
      wx.showModal({
        title: '提示',
        content: '保价物品可以点击保价图标查看物品位置',
        showCancel: false
      })
    }

    if ((typeof options.type != 'undefined') && (options.type == 2)) {
      page.setData({
        selectItem: 2
      })
    }
  },

  //用户下拉更新数据
  onPullDownRefresh: function () {
  },

  select: function(e) {
    var id = e.target.id;
    this.setData({
      selectItem: id
    })
  },

  toMap: function(e) {
    let final = e.currentTarget.dataset.address
    let target = e.currentTarget.id
    wx.navigateTo({
      url: 'map/map?id=' + target + '&final=' + final,
    })
  },

  scan: function(e) {
    var page = this
    wx.scanCode({
      onlyFromCamera: true,
      scanType: 'qrCode',
      success: res => {
        wx.showLoading({
          title: '请稍等...',
        })
        let pp = res.result
        let pra = '0' + ';' + pp
        let menthod = 'ReLogistics'
        let info = MyRequest.combinStr(new Array(pra), menthod)
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
              wx.setStorageSync('ReceiveLogistics', obj)
              wx.hideLoading()
              wx.navigateTo({
                url: 'receive/receive',
              })
            }).catch(err => {
              wx.hideLoading()
              wx.showModal({
                title: 'Error',
                content: '暂无此查询记录',
              })
            })
          }).catch(err => {
          wx.hideLoading()
          wx.showModal({
            title: 'Error',
            content: '暂无此查询记录',
          })
        })
      },
      fail: err => {
        wx.showModal({
          title: 'Error',
          content: '无效二维码',
          showCancel: false
        })
      }
    })
  },

  search: function(e) {
    var page = this
    let trackingNum = e.detail.value.trackingNum
    let pra = trackingNum + ';' + '0'
    let menthod = 'ReLogistics'
    let info = MyRequest.combinStr(new Array(pra), menthod)
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
          if (obj.length == 0) {
            wx.showModal({
              title: 'Tips',
              content: 'sorry，指定记录不存在！',
              showCancel: false
            })
          } else {
            wx.setStorageSync('ReceiveLogistics', obj)
            wx.navigateTo({
              url: 'receive/receive',
            })
          }
        }).catch(err => {
          wx.showModal({
            title: 'Error',
            content: '暂无此查询记录',
          })
        })
      }).catch(err => {
      wx.showModal({
        title: 'Error',
        content: '暂无此查询记录',
      })
    })
  }
})