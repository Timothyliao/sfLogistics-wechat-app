const MyRequest = require("../../utils/util.js")
Page({
  data: {
    id:'mm/mm'
  },
  onLoad: function(options) {
  },
  xxx:function(){
    wx.navigateTo({
      url: this.data.id,
    })
  }
})