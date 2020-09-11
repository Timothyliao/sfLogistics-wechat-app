const MyRequest = require('../../utils/util.js')
Page({
  data: {
    cost: '--',
    stateValue: '',
    explain: '本公司为了更好地服务顾客，确保客户利益，在确定快递保价物品的价格时，采用两部定价策略。因定价机制与客户风险态度及本公司实际货损率有关，您只需声明保价价值和风险态度，依据本公司制定的定价机制，就得到保价物品的费用及货物丢失的保险赔付金额，为此，您只需要在下面所列风险规避系数进行选择及声明快递物品价值即可。',
    array: [0.04, 0.06, 0.08, 0.10, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30],//风险规避系数
    index:0 //array的index
  },

  onLoad: function(options) {

  },

  onPullDownRefresh: function() {

  },

  getValue: function(e) {
    let value = e.detail.value
    var fee
    if (value == '')
      fee = '--'
    else
      fee = MyRequest.getPrice(parseInt(value))
    this.setData({
      cost: fee,
      stateValue: value
    })
  },

  sureValue: function(e) {
    getApp().globalData.goodsValue = this.data.stateValue
    let pages = getCurrentPages();
    pages[pages.length - 2].setData({
      cost: this.data.stateValue
    });
    wx.navigateBack({
      delta: 1,
    })
  },

  //选择风险规避系数
  pickRisk: function(e) {
    let _index = e.detail.value;
    this.setData({
      index : _index
    })
  }

});