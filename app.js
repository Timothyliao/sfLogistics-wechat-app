//app.js
App({
  onLaunch: function() {

  },
  globalData: {
    userInfo: {
      txUrl: '',
      nickName: ''
    },
    deliverNmae: '寄件人信息',
    deliverAddress: '点击填写寄件人信息',
    reName: '收件人信息',
    receiveAddress: '点击填写收件人信息',
    goodsType: '(20kg以上的物品)',
    pickTime: '今天 一小时之内',                  //选择上门的时间
    goodsValue: '请填写',                        //物品声明的价值
    senderAddressMess: null,
    receive: 0, //收件数
    deliver: 0, //寄件数
    discount: 0, //优惠券
    points: 0, //积分

    /*--------------------------用户信息--------------------------*/
    sAddress: null,
    rAddress: null,
    goodsInfo: null,

    /*--------------------------货物信息--------------------------*/
    baseInfo: null,

    /*--------------------------照片信息--------------------------*/
    //顺序为：物品照片,发票,真伪鉴别书
    //价值1档:length=1
    //价值2档:length=2
    //价值3档:length=3
    imgInfo: null
  },
})