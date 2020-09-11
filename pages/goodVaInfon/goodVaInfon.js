// pages/goodVaInfon/goodVaInfon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeSelected0: true,
    typeSelected1: true,
    typeSelected2: true,
    typeSelected3: true,
    typeSelected4: true,
    typeSelected5: true,
    isOther: false,

    value0: true,
    value1: true,
    value2: true,
    vUnfold: false, //是否展开保价其他证明资料
    vGrade: 0,

    noImg0: true, //
    noImg1: true,
    noImg2: true,
    noImg3: true,
    uploadImg0: '', //
    uploadImg1: '',
    uploadImg2: '',
    uploadImg3: '',

    markTextIsClick: false,
    compensate: '00.00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let price = parseInt(getApp().globalData.goodsValue)
    let flag = 0
    let value
    if (price > 5000) {
      flag = 2
    } else if (price > 1000) {
      flag = 1
    } else {
      flag = 0
    }

    this.setData({
      vGrade: flag,
      [flag == 0 ? 'value0' : flag == 1 ? 'value1' : 'value2']: false
    });
  },

  onShow: function(e) {
    
  },


  /*货物类型选中动画 */
  typeClick: function(e) {
    var gobal = getApp();
    var id = parseInt(e.currentTarget.id);
    switch (id) {
      case 0:
        this.setData({
          typeSelected0: false,
          typeSelected1: true,
          typeSelected2: true,
          typeSelected3: true,
          typeSelected4: true,
          typeSelected5: true
        });
        this.setData({
          isOther: false
        });
        break;
      case 1:
        this.setData({
          typeSelected0: true,
          typeSelected1: false,
          typeSelected2: true,
          typeSelected3: true,
          typeSelected4: true,
          typeSelected5: true
        });
        this.setData({
          isOther: false
        });
        break;
      case 2:
        this.setData({
          typeSelected0: true,
          typeSelected1: true,
          typeSelected2: false,
          typeSelected3: true,
          typeSelected4: true,
          typeSelected5: true
        });
        this.setData({
          isOther: false
        });
        break;
      case 3:
        this.setData({
          typeSelected0: true,
          typeSelected1: true,
          typeSelected2: true,
          typeSelected3: false,
          typeSelected4: true,
          typeSelected5: true
        });
        this.setData({
          isOther: false
        });
        break;
      case 4:
        this.setData({
          typeSelected0: true,
          typeSelected1: true,
          typeSelected2: true,
          typeSelected3: true,
          typeSelected4: false,
          typeSelected5: true
        });
        this.setData({
          isOther: false
        });
        break;
      case 5:
        this.setData({
          typeSelected0: true,
          typeSelected1: true,
          typeSelected2: true,
          typeSelected3: true,
          typeSelected4: true,
          typeSelected5: false
        });
        this.setData({
          isOther: true
        });
        break;
    }
  },

  /*选择上传的货物照片 */
  chooseImg: function(e) {
    var target = e.currentTarget.id;
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var imgPath = res.tempFilePaths;
        if (target == 'c0')
          that.setData({
            uploadImg0: imgPath,
            noImg0: false
          });
        if (target == 'c1')
          that.setData({
            uploadImg1: imgPath,
            noImg1: false
          });
        if (target == 'c2')
          that.setData({
            uploadImg2: imgPath,
            noImg2: false
          });
        if (target == 'c3')
          that.setData({
            uploadImg3: imgPath,
            noImg3: false
          });
      },
    })
  },

  /*是否删除上传的照片 */
  deleteImg: function(e) {
    var target = e.currentTarget.id;
    var that = this;
    if (target == '0')
      that.setData({
        noImg0: true,
        uploadImg0: ''
      });
    if (target == '1')
      that.setData({
        noImg1: true,
        uploadImg1: ''
      });
    if (target == '2')
      that.setData({
        noImg2: true,
        uploadImg2: ''
      });
    if (target == '3')
      that.setData({
        noImg3: true,
        uploadImg3: ''
      });
  },

  /*是否选择上门先联系 */
  markTextClick: function(e) {
    this.setData({
      markTextIsClick: !this.data.markTextIsClick
    })
  },

  save: function(e) {
    var that = this;
    var mark = e.detail.value.mark; //备注
    mark = mark.replace(',', '_')
    mark = mark.replace('，', '_')
    var production = e.detail.value.production; //产地
    var weight = e.detail.value.weight; //重量
    var goodsType = GoodsType(that.data); //商品类型
    if (goodsType == '16') goodsType = e.detail.value.goods;
    var value = ValueSelection(that.data); //价值
    var linkFirst = that.data.markTextIsClick ? 1 : 0; //上门先联系
    var imgInfo;

    if (goodsType == "17" || weight == '' || that.data.uploadImg3 == '' || value == 'vv') {
      WindowPop('请填写完整信息！');
      return;
    } else imgInfo = that.data.uploadImg3;
    if (value == 'v2') {
      if (that.data.uploadImg0 == '') {
        WindowPop('请填写完整信息！');
        return;
      }
      imgInfo += ',' + that.data.uploadImg0;
    }
    if (value == 'v3') {
      if (that.data.uploadImg1 == '' || that.data.uploadImg2 == '' || production == '') {
        WindowPop('请填写完整信息！');
        return;
      }
      imgInfo += ',' + that.data.uploadImg1 + ',' + that.data.uploadImg2;
    }

    var baseInfo = goodsType + ',' + weight + ',' + mark + ',' + linkFirst + ';' + value + ',' + production;

    getApp().globalData.baseInfo = baseInfo;
    getApp().globalData.imgInfo = imgInfo;
    let pages = getCurrentPages();
    pages[pages.length - 2].setData({
      goods: 1
    });
    wx.navigateBack({
      delta: 1
    })

  }
})

function WindowPop(mess) {
  wx.showModal({
    content: mess,
    showCancel: false
  })
}

function GoodsType(data) {
  if (!data.typeSelected0)
    return "11"; //瓷器
  if (!data.typeSelected1)
    return "12"; //首饰
  if (!data.typeSelected2)
    return "13"; //电子产品
  if (!data.typeSelected3)
    return "14"; //衣服
  if (!data.typeSelected4)
    return "15"; //家具
  if (!data.typeSelected5)
    return "16"; //其他
  return "17"; //没做选择
}

function ValueSelection(data) {
  if (!data.value0)
    return "v1"; //0-1000元
  if (!data.value1)
    return "v2"; //1000-5000元
  if (!data.value2)
    return "v3"; //5000元以上
  return "vv"; //没做选择
}