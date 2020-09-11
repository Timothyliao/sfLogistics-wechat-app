const AmapFile = require('../../../utils/macosx/amap-wx.js')
const MyRequest = require('../../../utils/util.js')
Page({
  data: {
    lo: 0,
    la: 0,
    markers: [{
      iconPath: "../../../images/address/location.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 34,
      height: 34,
      label: {
        content: '配送途中...', //文本
        color: '#FF0202', //文本颜色
        borderRadius: 3, //边框圆角
        borderWidth: 1, //边框宽度
        borderColor: '#FF0202', //边框颜色
        bgColor: '#ffffff', //背景色
        padding: 5, //文本边缘留白
        textAlign: 'center', //文本对齐方式。有效值: left, right, center
        anchorY: -60,
        anchorX: -30
      }
    }, {
      iconPath: "../../../images/address/location.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 34,
      height: 34,
      //气泡callout
      label: {
        content: '收件地', //文本
        color: '#FF0202', //文本颜色
        borderRadius: 3, //边框圆角
        borderWidth: 1, //边框宽度
        borderColor: '#FF0202', //边框颜色
        bgColor: '#ffffff', //背景色
        padding: 5, //文本边缘留白
        textAlign: 'center', //文本对齐方式。有效值: left, right, center
        anchorX: -20
      }
    }],
    distance: '',
    polyline: []
  },

  onLoad: function(options) {

    var that = this;
    let final = options.final
    let trackingNum = options.id
    wx.setStorageSync('TrackingNum', trackingNum)
    let method = 'QueryOrderLocation'
    let info = MyRequest.combinStr(new Array(trackingNum), method)
    MyRequest.request(method, info)
      .then(res => {
        let resultStr = res.data
        let result = MyRequest.parseXml2(resultStr, 'QueryOrderLocationResult')
        result = result[0][0].split(',')[1] + ',' + result[0][0].split(',')[2]
        wx.setStorageSync('Posation', result)
        let oL = that.data.markers
        oL[0].longitude = parseFloat(result.split(',')[0])
        oL[0].latitude = parseFloat(result.split(',')[1])
        oL[1].longitude = parseFloat(final.split(',')[0])
        oL[1].latitude = parseFloat(final.split(',')[1])
        that.setData({
          markers: oL,
          lo: parseFloat(final.split(',')[0]),
          la: parseFloat(final.split(',')[1])
        })
        DrawLine(that, result, final)
      }).catch(err => {
      })


  },

  onPullDownRefresh: function (){
    
  }

})

function DrawLine(page, origin, destination) {
  var myAmapFun = new AmapFile.AMapWX({
    key: '2f128120bc7fcf2e969ca86036f5cf14'
  });
  myAmapFun.getDrivingRoute({
    origin: origin,
    destination: destination,
    success: function(data) {
      var points = [];
      if (data.paths && data.paths[0] && data.paths[0].steps) {
        var steps = data.paths[0].steps;
        for (var i = 0; i < steps.length; i++) {
          var poLen = steps[i].polyline.split(';');
          for (var j = 0; j < poLen.length; j++) {
            points.push({
              longitude: parseFloat(poLen[j].split(',')[0]),
              latitude: parseFloat(poLen[j].split(',')[1])
            })
          }
        }
      }
      page.setData({
        polyline: [{
          points: points,
          color: "#0091ff",
          width: 4
        }]
      });
      if (data.paths[0] && data.paths[0].distance) {
        page.setData({
          distance: '快递员目前距您' + data.paths[0].distance + '米'
        });
      }

    },
    fail: function(info) {

    }
  })
}