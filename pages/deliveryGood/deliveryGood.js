Page({
  data: {
    imgUrls:[
      '../../images/deliveryGoods/usc_02.jpg',
      '../../images/deliveryGoods/usc_03.jpg',
      '../../images/deliveryGoods/usc_04.jpg',
      '../../images/deliveryGoods/usc_05.jpg'
    ]
  },
  normalGoods:function(e){
    wx.navigateTo({
      url: '../delivery/delivery?type=0',
    })
  },
  valueGoods: function (e) {
    wx.navigateTo({
      url: '../delivery/delivery?type=1',
    })
  },
})