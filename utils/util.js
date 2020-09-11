const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}



const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


var testRequest = function() {
  var that = this;
  var mymethod = 'loadbanji';
  var wsdlurl = 'https://lab.9tfgs.cn/LabClassService.asmx';
  var targetNamespace = 'https://lab.9tfgs.cn/';
  var datacopy = '<?xml version="1.0" encoding="utf-8"?>';
  datacopy += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="https://lab.9tfgs.cn/">';
  datacopy += '<soapenv:Header/>';
  datacopy += '<soapenv:Body>';
  datacopy += '<ser:loadbanji xmlns="https://lab.9tfgs.cn/">';
  datacopy += '<nianji>' + "2017" + '</nianji>';
  datacopy += '<saccount>gzjkfu</saccount>';
  datacopy += '<spwd>dde680991a7d56a785e10e36dc363321</spwd>';
  datacopy += '</ser:loadbanji>';
  datacopy += '</soapenv:Body>';
  datacopy += '</soapenv:Envelope>';
  wx.request({
    url: wsdlurl,
    data: datacopy,
    method: 'POST',
    header: {
      'content-type': 'text/xml; charset=utf-8',
      'SOAPAction': targetNamespace + mymethod,
    },
    success: function(res) {
      console.log(res)
    },
    fail: function(err) {
      console.log(err)
    },
    complete: function() {
      wx.showToast({
        title: '执行完毕',
        duration: 1000
      })
    }
  })
}


//menthod:调用接口的方法    info:接口所需要的参数
var request = function(menthod, info) {
  //var myUrl = 'http://192.168.137.1:200/myService1.asmx'
  var myUrl = 'https://lab.9tfgs.cn/sfTest/myService1.asmx'

  var menthod = menthod

  //var tmpNamespace = 'http://tempuri.org/'
  var tmpNamespace = 'https://lab.9tfgs.cn/'

  var requestData = '<?xml version="1.0" encoding="utf-8"?>'
  requestData += '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">'
  requestData += '<soap12:Body>'
  requestData += '<' + menthod + ' xmlns="' + tmpNamespace + '">'
  requestData += info
  requestData += '</' + menthod + ' >'
  requestData += '</soap12:Body>'
  requestData += '</soap12:Envelope>'

  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      data: requestData,
      method: 'POST',
      header: {
        'content-type': 'application/soap+xml; charset=utf-8', // 默认值
        'SOAPAction': tmpNamespace + menthod
      },
      success: res => {
        if (res.statusCode == 200)
          resolve(res)
        else {
          console.log(res)
          reject('服务器内部错误！')
        }
      },
      fail: err => reject('网络连接错误！')
    })
  })

}


var parseXml = function(xmlStr, tagName) {
  let Parser = require('domPaser/dom-parser')
  var XMLParser = new Parser.DOMParser()
  var doc = XMLParser.parseFromString(xmlStr)
  var a = doc.getElementsByTagName(tagName)[0].childNodes
  let res = a[0].parentNode.nodeName + ',' + a[0].nodeValue
  return res
}


var parseXml2 = function(xmlStr, tagName) {
  var totalArray = new Array()
  let Parser = require('domPaser/dom-parser')
  var XMLParser = new Parser.DOMParser()
  var doc = XMLParser.parseFromString(xmlStr)
  let target = doc.getElementsByTagName(tagName)
  for (var i = 0, j = 0, lent = target.length; i < lent; i++) {
    var array = new Array()
    var children = doc.getElementsByTagName(tagName)[i].childNodes
    for (var m = 0, len = children.length; m < len; m++) {
      array[m] = children[m].nodeName + ',' + children[m].firstChild.nodeValue
    }
    totalArray[j++] = array
  }
  return totalArray
}

function logistics(truckingNum, sender, receiver, goodsName, address, position, isValue, photo, path) {
  this.truckingNum = truckingNum
  this.sender = sender
  this.receiver = receiver
  this.goodsName = goodsName
  this.address = address
  this.position = position
  this.isValue = isValue
  this.photo = photo
  this.tempPath = path
}

function GoodsType(data) {
  if (data == "01")
    return "日用品"
  if (data == "02")
    return "食品"
  if (data == "03")
    return "文件"
  if (data == "04")
    return "数码产品"
  if (data == "05")
    return "农物"
  return data
}

function GoodsTypeV(data) {
  if (data == "11")
    return "瓷器"; //瓷器
  if (data == "12")
    return "首饰"; //首饰
  if (data == "13")
    return "电子产品"; //电子产品
  if (data == "14")
    return "衣服"; //衣服
  if (data == "15")
    return "家具"; //家具
  return data
}

var arrayToObj = function(array) {
  var res = new Array()
  for (var i = 0, len = array.length; i < len; i++) {
    let j = 0
    let obj = new logistics()
    var mess = array[i]
    obj.truckingNum = mess[j++].split(',')[1]
    obj.sender = mess[j++].split(',')[1]
    obj.receiver = mess[j++].split(',')[1]
    if (mess[mess.length - 2].split(',')[1] == 'true')
      obj.goodsName = GoodsTypeV(mess[j++].split(',')[1])
    else
      obj.goodsName = GoodsType(mess[j++].split(',')[1])
    obj.address = mess[j++].split(',')[1]
    obj.position = mess[j].split(',')[1] + ',' + mess[j++].split(',')[2]
    obj.isValue = mess[j++].split(',')[1]
    obj.photo = mess[j++].split(',')[1]
    obj.tempPath = ''
    res[i] = obj
  }
  return res
}

var combinStr = function(paraArray, menthod) {
  if (menthod == 'Authenticate') {
    let info = '<token>' + paraArray[0] + '</token>'
    info += '<reflshToken>' + paraArray[1] + '</reflshToken>'
    return info
  }
  if (menthod == 'Login') {
    let info = '<code>' + paraArray[0] + '</code>'
    return info
  }
  if (menthod == 'PreOrderInfo') {
    let info = '<info>' + paraArray[0] + '</info>'
    info += '<passPort>' + paraArray[1] + '</passPort>'
    return info
  }
  if (menthod == 'QueryOrderLocation') {
    let info = '<trackingNum>' + paraArray[0] + '</trackingNum>'
    return info
  }
  if (menthod == 'SaveSenderInfo') {
    let info = '<token>' + paraArray[0] + '</token>'
    info += '<info>' + paraArray[1] + '</info>'
    return info
  }
  if (menthod == 'TrackOrder') {
    let info = '<locationdata>' + paraArray[0] + '</locationdata>'
    info += '<senderNum>' + paraArray[1] + '</senderNum>'
    return info
  }
  if (menthod == 'VerifyEmployee') {
    let info = '<account>' + paraArray[0] + '</account>'
    info += '<paw>' + paraArray[1] + '</paw>'
    return info
  }

  if (menthod == 'QueryLogistics') {
    let info = '<token>' + paraArray[0] + '</token>'
    return info
  }

  if (menthod == 'ReLogistics') {
    let info = '<queryPra>' + paraArray[0] + '</queryPra>'
    return info
  }
}

//paraArray:  [0]:passport,[1]:type
var uploadImg = function(url, paraArray) {
  //const UplodImgUrl = 'http://192.168.137.1:200/fileHandle.ashx'
  const UplodImgUrl = 'https://lab.9tfgs.cn/sfTest/fileHandle.ashx'

  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: UplodImgUrl,
      formData: {
        'passPort': paraArray[0],
        'type': paraArray[1]
      },
      filePath: url,
      name: 'file',
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

var downloadImg = function(imgName) {
  return new Promise((resolve, reject) => {
    if (imgName.indexOf('/') != -1) //其他文件夹中的图片
      //var path = 'http://192.168.137.1:200' + imgName
      var path = 'https://lab.9tfgs.cn/' + imgName //sfTest/
    else
      //var path = 'http://192.168.137.1:200/image/' + imgName
      var path = 'https://lab.9tfgs.cn/image/' + imgName
    wx.downloadFile({
      url: path,
      type: 'image',
      success: res => {
        resolve(res.tempFilePath)
      },
      fail: err => {
        reject('error') //标识请求失败
      }
    })
  })
}

var getTimes = function() {
  var timestamp = Date.parse(new Date())
  timestamp = timestamp / 1000
  var n = timestamp * 1000
  var date = new Date(n)
  var Y = date.getFullYear()
  //月  
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  //日  
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  //时
  var h = date.getHours()
  //分
  var m = date.getMinutes()
  //秒
  var s = date.getSeconds()
  return new Array(Y, M, D, h, m, s)
}


/*保价模型参数*/
/**************勿----调**************/
const NITA = 0.00010,
  BEITEA0 = 0.00086,
  BEITEA = 0.0022

var getPrice = function(w) {
  let tao = 0.2 * BEITEA,
    af = 0.8 * BEITEA
  let vMax
  if (w > 0 && w <= 1000) vMax = 1000
  else vMax = w

  /*----------------------------------------------------------------------*/
  let x = NITA * (1 - BEITEA) * BEITEA

  //求A
  let a1 = 3 * (tao + BEITEA0) - 2 * tao * (af - BEITEA0 - BEITEA) - 2 * BEITEA0 * (af - BEITEA0 - BEITEA)
  let A = Math.sqrt(x) * a1

  //求B
  let b1 = -1 * (tao + BEITEA0)
  let b2 = af - BEITEA0 - 2 * vMax * x
  let b3 = BEITEA * (af - BEITEA0 - BEITEA)
  let b4 = 2 * NITA * (1 - BEITEA) * tao * vMax - tao + 2 * NITA * (1 - BEITEA) * BEITEA0 * vMax
  let B = b1 * b2 - b3 * b4;

  //求m
  let m = B / A

  //求K
  let k1 = m * ((af - BEITEA0) * BEITEA - 2 * vMax * NITA * (1 - BEITEA) * BEITEA0 + 3 * Math.sqrt(x) * BEITEA0 * m)
  let k2 = (af - BEITEA0 - BEITEA) * Math.sqrt(x)
  let k = k1 / k2

  //result
  let theta = BEITEA * k + m * m;

  let z = Math.sqrt((theta - BEITEA * k) / x)

  let profit = af * w + tao * w + theta

  return profit.toFixed(2)
}

module.exports = {
  request,
  parseXml,
  combinStr,
  uploadImg,
  downloadImg,
  parseXml2,
  arrayToObj,
  getTimes,
  getPrice,
  testRequest
}