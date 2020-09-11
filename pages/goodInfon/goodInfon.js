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
    noImg: true, //
    uploadImg: null, //
    markTextIsClick: false,
    photo: true, //是否上传照片
    weight: true, //是否填写重量
    type: true //是否填写类型
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var imgPath = res.tempFilePaths;
        that.setData({
          uploadImg: imgPath,
          noImg: false
        })
      },
    })
  },

  /*是否删除上传的照片 */
  deleteImg: function(e) {
    this.setData({
      noImg: true,
      uploadImg: ''
    })
  },

  /*是否选择上门先联系 */
  markTextClick: function(e) {
    this.setData({
      markTextIsClick: !this.data.markTextIsClick
    })
  },

  submit: function(res) {
    var that = this;
    var imgInfo = '';
    var baseInfo = '';
    //--------------获取包裹类型--------------
    var c1 = GoodsType(this.data);
    if (c1 == "07") {
      that.setData({
        type: false
      });
      wx.showModal({
        content: '请选择包裹类型',
        showCancel: false
      });
      return;
    } else if (c1 == "06") {
      that.setData({
        type: true
      });
      baseInfo += res.detail.value.goods + ',';
    } else {
      that.setData({
        type: true
      });
      baseInfo += c1 + ',';
    }

    //--------------获取商品重量--------------
    if (res.detail.value.weight == '') {
      that.setData({
        weight: false
      });
      wx.showModal({
        content: '请填写商品重量',
        showCancel: false
      });
      return;
    } else {
      that.setData({
        weight: true
      });
      baseInfo += res.detail.value.weight + ',';
    }

    //--------------获取物品照片--------------
    if (that.data.uploadImg == null) {
      that.setData({
        photo: false
      });
      wx.showModal({
        content: '请上传物品照片',
        showCancel: false
      });
      return;
    } else {
      that.setData({
        photo: true
      });
      imgInfo = that.data.uploadImg;
    }

    //--------------获取备注-----------------
    let mark = res.detail.value.mark
    mark = mark.replace(',', '_')
    mark = mark.replace('，', '_')
    baseInfo += mark + ',';

    //--------------获取上门联系--------------
    if (that.data.markTextIsClick)
      baseInfo += '1';
    else
      baseInfo += '0';

    getApp().globalData.baseInfo = baseInfo;
    getApp().globalData.imgInfo = imgInfo;
    let pages = getCurrentPages();
    pages[pages.length - 2].setData({
      goods: 0
    });
    wx.navigateBack({
      delta: 1
    })
  },
})

function GoodsType(data) {
  if (!data.typeSelected0)
    return "01";
  if (!data.typeSelected1)
    return "02";
  if (!data.typeSelected2)
    return "03";
  if (!data.typeSelected3)
    return "04";
  if (!data.typeSelected4)
    return "05";
  if (!data.typeSelected5)
    return "06";
  return "07";
}