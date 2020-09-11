const MyRequest = require('../../utils/util.js')
const App = getApp()
Page({
  data: {
    file: [{
        pro: 1,
        text: '1.本条款的缔约主体是您与寄件地的顺丰速运有限公司的子公司、分公司或关联公司（以下简称顺丰）',
        mark: false
      },
      {
        pro: 1,
        text: '2.您同意遵守顺丰官方网站所公示的隐私政策及其不时修订的内容，同意顺丰按照法律法规和隐私政策的规定处理您提供的运单信息。',
        mark: false
      },
      {
        pro: 1,
        text: '3.赔偿条款'
      },
      {
        pro: 1,
        text: '您已知悉并同意，顺丰是按托寄物的重量收费，并非按托寄物的价值、预期收益收费，本着公平合理的原则，双方遵守以下赔偿约定：',
        mark: false
      },
      {
        pro: 2,
        text: '若因顺丰原因造成托寄物灭失、破损、短少的，顺丰将按以下标准赔偿： ',
        mark: true
      },
      {
        pro: 3,
        text: '若您未选择保价，则顺丰在七倍运费的限额内向您赔偿托寄物的实际损失，双方另有约定的按照约定执行。如您认为该赔偿标准不足以弥补您的损失，应根据托寄物的实际价值选择等价值保价服务。',
        mark: true
      },
      {
        pro: 3,
        text: '若您已选择保价且支付保价费用，则破损、短少时顺丰将按照保价金额和实际损失的比例向您赔偿，托寄物灭失时最高不超过您托寄时保价的声明价值。',
        mark: true
      },
      {
        pro: 2,
        text: '声明价值：鉴于顺丰无法评估托寄物的实际价值，当托寄物价值超过1000元，您应当在寄件时如实声明；如您未声明并保价，视为价值不超过1000元。1000~5000元的物品请提供商品购买发票（或其他价值证明书），5000元以上的物品，请提供商品产地证明书、商品购买发票、真伪鉴定书等证明书。',
        mark: true
      },
      {
        pro: 2,
        text: '燕窝、虫草、人参、高价值酒品等自带原包装而顺丰无法进行内包装固定的贵重物品，请您谨慎包装，如到件时托寄物外包装无损，顺丰将不承担赔偿责任，请您慎重考虑寄递。',
        mark: true
      },
      {
        pro: 2,
        text: '延误的赔偿权仅为免除本次服务费用（不含保价等附加费用）。',
        mark: true
      },
      {
        pro: 1,
        text: '4.理赔规则：',
        mark: true
      },
      {
        pro: 2,
        text: '顺丰提供的保价服务，系基于您声明的托寄物价值收取费用，并基于托寄物实际受损价值进行赔偿，请您如实按照托寄物实际价值进行保价。顺丰采取“理赔审查”的方式，您应在寄件时如实按照托寄物的实际价值诚信保价，货物托运出现异常情形理赔时需提供托寄物品的相关价值证明(如发票、合同、付款凭证等) ,如无法证明托寄物品真实价值，不足额保价部分或超额保价部分均无法获得赔偿。',
        mark: true
      },
      {
        pro: 2,
        text: '托寄物损坏残值由顺丰和您协商处理，如归您所有,顺丰在核定赔偿金额时将扣减残值',
        mark: true
      },
      {
        pro: 1,
        text: '5.顺丰为保护您的个人信息，可能会使用保密运单。顺丰会对您寄件时在下单系统录入的信息予以保存。对于保密运单所隐匿的信息，您同意以顺丰系统所查询的内容为准。',
        mark: false
      },
      {
        pro: 1,
        text: '6.您确认,在您因工作需要使用本服务时,您已充分获得您工作单位的授权，并已充分阅读、理解并接受本条款的全部内容。',
        mark: false
      },
      {
        pro: 1,
        text: '7.为符合法律法规对快件寄递安全的要求，保证托寄物安全送达，您在寄件时应履行以下义务:',
        mark: false
      },
      {
        pro: 2,
        text: '确保托寄物不包含国家机关公文、国家保护野生动物和濒危野生动物及其制品、假冒伪劣和侵权物品等法律法规禁止和限制寄递的物品，不得通过寄递渠道危害国家安全、公共安全和公民、法人、其他组织的合法权益。',
        mark: false
      },
      {
        pro: 2,
        text: '出示有效身份证件，配合顺丰工作人员进行身份查验、身份信息登记，如果您是受他人委托寄件，还应当提,供委托人的有效身份证件。',
        mark: false
      },
      {
        pro: 2,
        text: '配合进行开箱验视。托寄物需要办理审批、检验等手续的，您应提交办理完相关手续的证明文件。顺丰可以对托寄物内件拍照取证，如发现禁止或限制寄递的物品，有权移交相关部门处理。',
        mark: false
      },
      {
        pro: 2,
        text: '如实申报托寄物的名称、性质、数量和价值，并准确填写寄件人、收件人的名称、地址、联系电话等信息。',
        mark: false
      },
      {
        pro: 2,
        text: '根据托寄物的性质(尤其是易碎品、液体、气体) ,提供充分的防破损、防漏、防爆措施,保障托寄物安全派送。',
        mark: false
      },
      {
        pro: 1,
        text: '8.您的违约赔偿责任:',
        mark: false
      },
      {
        pro: 2,
        text: '因托寄物有安全隐患、质量缺陷或包装破损，致使其他托寄物、运输工具、机械设备被污染腐蚀、损坏，或造成人身伤亡的，您应承担赔偿责任。',
        mark: false
      },
      {
        pro: 2,
        text: '因托寄物属于或含有禁止或限制寄递物品而被查没、扣留或变更配送路线，导致其他托寄物时效延误或价值丧失，给顺丰或第三人造成经济损失的，您应承担赔偿责任。',
        mark: false
      },
      {
        pro: 2,
        text: '因您违反第7条的义务导致顺丰或第三人承担行政处罚、民事赔偿等所造成的各项经济损失，您应承担赔偿责任。',
        mark: false
      },
      {
        pro: 1,
        text: '9.留置权',
        mark: false
      },
      {
        pro: 1,
        text: '若您或您指定的付款人未付清费用的，顺丰有权留置托寄物，留置后您的债务履行期限为2个月(自 揽收快件之日起计算) ,但托寄物性质不能留置的除外。债务履行期限届满，您或指定付款人仍未付清费用的，顺丰可以变卖、拍卖留置物并优先受偿。变卖、拍卖所得价款应优先支付顺丰为行使留置权所支出的费用和保管费，再偿付拖欠顺丰的费用;如有余额，可根据您的要求汇_至您指定账户。',
        mark: false
      },
      {
        pro: 1,
        text: '10.关于费用的约定:',
        mark: false
      },
      {
        pro: 2,
        text: '已经收寄的到付快件，如收件人尚未付费，您要求更改为由您付费的，您应支付附加服务费。',
        mark: false
      },
      {
        pro: 2,
        text: '您指示在物流中心、保税区等需要支付出/入仓费或其他额外费用的特殊地址收取或派送快件时，您或您指定付款人应当偿还顺丰垫付的，上述出/入仓费等额外费用，并支付附加服务费，该等费用金额以顺丰取得的收费凭证为准。',
        mark: false
      },
      {
        pro: 2,
        text: '春节等法定节假日和“双十一-”等业务高峰期间您需要提供服务的，可能会加收附加服务费，该等费用以顺丰官网、公众号、APP等平台公示为准，您可以登陆顺丰官方网站或拨打顺丰客服热线咨询。若您在价格变更后继续寄件，表示您同意按照变更后的价格支付费用。',
        mark: false
      },
      {
        pro: 2,
        text: '无法派送的托寄物，若您要求退回，则双程费用均由您承担。',
        mark: false
      },
      {
        pro: 1,
        text: '11.顺丰服务产品的时效说明以官方网站上所公示的解释为准，您可以登录官方网站查询或拨打顺丰客服热线咨询。',
        mark: false
      },
      {
        pro: 1,
        text: '12.顺丰会以电话、电子邮件、手机短信等方式告知、发送的产品/业务介绍、推广促销信息及其他商业性信息。您不同意继续接收以上信息的，可以通过短信或拨打顺丰客服热线方式退订。',
        mark: false
      },
      {
        pro: 1,
        text: '13.您选择签单返还服务时，若因顺丰原因导致签收回单毁损、灭失的，顺丰承担的责任仅     限于免费提供一次签单返还服务作为赔偿。',
        mark: false
      },
      {
        pro: 1,
        text: '14.如果本条款中的某条款被法院或政府机构认定为无效或部分无效，则双方同意除无效条款外仍应执行本合同其它条款，部分有效条款在其可执行的范围内仍继续执行。',
        mark: false
      },
      {
        pro: 1,
        text: '15.本条款履行过程中如发生争议，双方应友好协商解决。如协商不成的，应向快件寄出地有管辖权的人民法院提起诉讼。',
        mark: false
      },
      {
        pro: 1,
        text: '16.本条款以上约定的托寄物赔偿标准仅适用于从收寄到投递的全过程均发生在中华人民共和国境内的国内快件，国际快件和港澳台快件的赔偿标准与其他特殊条款需参考如下约定',
        mark: false
      },
      {
        pro: 2,
        text: '如托寄物完全或部分由空运运输，且托寄物的最终目的地或者停靠地不在寄件国家或地区，在不影响本条款第3、11条约定的前提下，若《华沙公约》和《蒙特利尔公约》强制适用，则适用公约。若公约不适用，则顺丰的责任，无论托寄物的申报价值，均不得超过以下各项中的低者: 100美元或20美元/公斤或9.07美元/磅。如快件采取包含空运、陆运或其他方式的多式联运，除非另有证据，否则任何损失或损害将被推定发生在空运阶段。',
        mark: false
      },
      {
        pro: 2,
        text: '对于国际陆运运输，_顺丰的责任应适用《国际公路货物运输合同公约》( “CMR” )，若该公约不适用，则顺丰的责任，无论托寄物的申报价值，均不得超过以下各项中的低者: 100美元或10美元/公斤或4.54美元/磅(但不适用于美国)。该责任限制同样适用于在国内公路运输情形下不存在根据国内运输法律具有强制适用或更低责任标准的情况。',
        mark: false
      },
      {
        pro: 2,
        text: '如您选择保价服务，则顺丰向您承担的赔偿额度受限于您已购买的保价金额以及托寄物实际现金价值中的低者(“决定价值”)。若托寄物部分灭失、破损或短缺的，顺丰按照决定价值和损失的比例赔偿(即托寄物决定价值*托寄物损毁比例)，且如剩余托寄物或损毁托寄物返还您，顺丰会在赔偿中扣减返还托寄物所产生的额外运费。',
        mark: false
      },
      {
        pro: 2,
        text: '索赔次数。每票托寄物只能提出一次索赔，且对于该托寄物所相关的所有丟失或损坏的结算是全额且终局的。',
        mark: false
      },
      {
        pro: 2,
        text: '索赔的时间要求。除非与相关适用法律冲突，任何索赔必须在顺丰接收托寄物后的30天内以书面方式向顺丰提出并附上相应证明材料，否则顺丰将不再承担任何责任。若所有运输费用尚未被支付，顺丰无义务受理任何索赔。索赔金额不可用该运输费用抵消。若收件人在签收托寄物时没有在快递记录上注明有任何损坏，则该托寄物被视为完好送达。作为理赔的条件，顺丰有权对原托寄物和包装材料进行检查。',
        mark: false
      },
      {
        pro: 2,
        text: '申报价值。您同意，运单上海关和承运的申报价值应与托寄物的实际现金价值相等。您须提供证明托寄物申报价值的真实有效的商业发票或收据，且顺丰有权自行决定是否对其进行接受、检查、查验或拒绝而无需出具理由。若托寄物的申报价值高于顺丰官网公布的申报价值上限，则顺丰有权依据顺丰的费用收取标准加收额外费用。对于任何填写了申报价值的托寄物的接收和/或加收额外费用均不构成顺丰对本条款下赔偿责任限额和保价金额限额的放弃,即无论托寄物的申报价值，顺丰均依据本条款之约定承担赔偿责任。',
        mark: false
      },
      {
        pro: 2,
        text: '清关。若您委任顺丰为托寄物进出口报关代理。为完成清关手续，顺丰可自行或委托第三方或应他人要求将承运的托寄物转交给收件人的进口代理或运送到其它地，点，只要顺丰有合理理由判断其已获得必要授权。顺丰仅出于自愿协助您完成所必须的清关手续，由您自行承担相应风险和费用。若海关出于进出口清关的目的要求额外文件，您应提供相关文件并自行承担费用。',
        mark: false
      }
    ], //条款内容
    useClauseBtn: true, //条款阅读完，启用按钮
    currentItem: 0,
    deliverNmae: getApp().globalData.deliverNmae, //寄件人的姓名
    deliverAddress: getApp().globalData.deliverAddress, //寄件人的地址
    receiveName: getApp().globalData.reName, //收件人的姓名
    receiveAddress: getApp().globalData.receiveAddress, //收件人的地址
    goodsType: getApp().globalData.goodsType, //保价物品的声明价值
    pickTime: getApp().globalData.pickTime, //期待上门时间
    goodsValue: getApp().globalData.goodsValue, //显示-->保价物品的声明价值
    otherNmae: '(20kg以上的物品)', //物品的类型
    markTextIsClick: false, //是否勾选了上门请先联系
    clauseRead: false, //radio是否打钩
    readingClause: false, //是否显示条款
    haveRead: false, //条款是否阅读过
    goodsPrice: '￥--', //价值预估
    pageType: '', //是保价页面还是普通页面
    trackingNum: '', //运单号
    error: false,
    msg: '',
    readBtn: '请看完再同意本条款',
    orderBtn: '先同意条款',
    showSelectValue: 'none',
    tpValue: false, //是否选择第三方保价服务

    /* ------------TimePicker参数-------------- */
    showModal: 'none', //是否显示上门时间选择
    hidden: true, //是否显示遮罩背景
    today: '#fff', //picker中选中今天
    tom: '#f1f2f6', //picker中选中明天
    thir: '#f1f2f6', //picker中选中后天
    currentTime: 0, //0代表选中的是今天，1代表选中的是明天，2代表选中的是后天
    timeFirst: [], //今天的时间表
    timeSecond: [{
        time: '08:00-09:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '09:00-10:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '10:00-11:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '11:00-12:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '12:00-13:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '13:00-14:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '14:00-15:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '15:00-16:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '16:00-17:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '17:00-18:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '18:00-19:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '19:00-20:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '20:00-21:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '21:00-22:00',
        txtColor: '#000',
        hidden: true
      }
    ], //明天的时间表
    timeThird: [{
        time: '08:00-09:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '09:00-10:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '10:00-11:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '11:00-12:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '12:00-13:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '13:00-14:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '14:00-15:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '15:00-16:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '16:00-17:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '17:00-18:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '18:00-19:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '19:00-20:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '20:00-21:00',
        txtColor: '#000',
        hidden: true
      },
      {
        time: '21:00-22:00',
        txtColor: '#000',
        hidden: true
      }
    ], //后天的时间表
    time: [] //应用的时间表
  },

  onLoad: function(options) {
    if (typeof options.type != "undefined") {
      this.setData({
        pageType: options.type
      })
      if (options.type == 1)
        this.setData({
          showSelectValue: 'block'
        })
    }

    let times = MyRequest.getTimes();
    let tim = times[3] + 1
    let array = getTimeArray(tim, this)
    this.setData({
      timeFirst: array,
      time: array
    })
  },
  onShow: function() {
    var that = this;
    var app = getApp().globalData;

    if (typeof that.data.addT != "undefined") {
      var dn = app.deliverNmae;
      var rn = app.reName;
      that.setData({
        deliverNmae: dn,
        deliverAddress: app.deliverAddress,
        receiveName: rn,
        receiveAddress: app.receiveAddress
      })
    };

    if (typeof that.data.cost != "undefined") {
      that.setData({
        goodsValue: app.goodsValue + '元'
      })
    }

    if (typeof that.data.goods != "undefined") {
      that.setData({
        goodsType: GoodType(app.baseInfo.split(',')[0], that.data.goods)
      })
    }
  },

  /*跳转地址填写 */
  fillAddress: function(e) {
    var target = e.currentTarget.id;
    wx.navigateTo({
      url: '../address/address?type=' + target,
    })
  },

  /*展开物品信息 */
  showGoods: function(e) {
    let page = this
    if (page.data.pageType == '0')
      wx.navigateTo({
        url: '../goodInfon/goodInfon'
      })
    else {
      if (getApp().globalData.goodsValue === '请填写') {
        page.setData({
          error: true,
          msg: '请先声明物品价值'
        })
      } else
        wx.navigateTo({
          url: '../goodVaInfon/goodVaInfon'
        })
    }
  },

  /*选择已阅读条款*/
  readClause: function(e) {
    if (this.data.haveRead)
      this.setData({
        clauseRead: !this.data.clauseRead,
        orderBtn: [!this.data.clauseRead ? '下单' : '先同意条款']
      })
    else
      this.setData({
        readingClause: !this.data.readingClause
      })
  },

  /*完成阅读 */
  scrollBottom: function(e) {
    this.setData({
      useClauseBtn: false,
      readBtn: '同意本条款，今日不再提醒'
    })
  },

  completeRead: function(e) {
    this.setData({
      readingClause: false,
      clauseRead: true,
      orderBtn: '下单',
      haveRead: true
    })
  },

  /*打开条款 */
  openClause: function(e) {
    this.setData({
      readingClause: true
    })
  },

  //下单
  ordered: function(e) {
    var that = this
    //未填写完整信息
    if (Judge(getApp().globalData.baseInfo, getApp().globalData.imgInfo, getApp().globalData.sAddress, getApp().globalData.rAddress, that) == 0) return

    if (that.data.pageType == '1') {
      if (getApp().globalData.goodsValue == '请填写') {
        that.setData({
          error: true,
          msg: '未声明物品价值'
        })
        return
      }
    }

    wx.showLoading({
      title: '处理中，请稍后...',
      mask: true
    })
    let token = wx.getStorageSync('Token')
    //首先提交寄件人、收件人信息，获得trackingNum
    let menthod1 = 'SaveSenderInfo'
    let info1 = '<token>' + token + '</token>'
    info1 += '<info>' + getApp().globalData.sAddress + ';' + getApp().globalData.rAddress + '</info>'
    MyRequest.request(menthod1, info1).then(add => {
      var result = MyRequest.parseXml2(add.data, 'SaveSenderInfoResponse')[0]
      let tn = result[0].split(',')[1] //运单号
      that.setData({
        trackingNum: tn
      })

      let imgInfo = getApp().globalData.imgInfo
      let passPort = tn
      let menthod = 'PreOrderInfo'

      let baseInfo = getApp().globalData.baseInfo
      let pickTime = getApp().globalData.pickTime
      pickTime = pickTime.replace(' ', '_')
      if (that.data.pageType == '0')
        baseInfo += ',' + pickTime
      else
        baseInfo += ',' + getApp().globalData.goodsValue + ',' + pickTime

      let info = MyRequest.combinStr(new Array(baseInfo, passPort), menthod)
      MyRequest.request(menthod, info).then(res => {
        let decodeKey = 'PreOrderInfoResult'
        var codePath = DeCode(res, decodeKey)
        if (imgInfo.indexOf(',') == -1) {
          MyRequest.uploadImg(imgInfo[0], new Array(passPort, '1'))
            .then(res => {
              wx.hideLoading()
              Reset(getApp())
              wx.redirectTo({
                url: '../order/order?pageType=2',
              })
            }).catch(err => {
              wx.hideLoading()
              wx.redirectTo({
                url: '../order/order?pageType=0',
              })
            })
        } else {
          let imgArray = imgInfo.split(',')
          let imgLen = imgArray.length
          if (imgLen == 2) {
            Promise.all([
              MyRequest.uploadImg(imgArray[0], new Array(passPort, '1')),
              MyRequest.uploadImg(imgArray[1], new Array(passPort, '2'))
            ]).then(res => {
              wx.hideLoading()
              Reset(getApp())
              wx.redirectTo({
                url: '../order/order?pageType=1&img=' + codePath,
              })
            }).catch(err => {
              wx.hideLoading()
              wx.redirectTo({
                url: '../order/order?pageType=0',
              })
            })
          }
          if (imgLen == 3) {
            Promise.all([
              MyRequest.uploadImg(imgArray[0], new Array(passPort, '1')),
              MyRequest.uploadImg(imgArray[1], new Array(passPort, '2')),
              MyRequest.uploadImg(imgArray[2], new Array(passPort, '3'))
            ]).then(res => {
              wx.hideLoading()
              Reset(getApp())
              wx.redirectTo({
                url: '../order/order?pageType=1&img=' + codePath,
              })
            }).catch(err => {
              wx.hideLoading()
              wx.redirectTo({
                url: '../order/order?pageType=0',
              })
            })
          }
        }
      }).catch(err => {
        wx.hideLoading()
        MessHandle('Error!', '服务器走丢了！')
      })
    }).catch(addErr => {
      wx.hideLoading()
      MessHandle('Error!', '服务器走丢了！')
    })
  },

  //声明价值
  selectValue: function(e) {
    wx.navigateTo({
      url: '../stateValue/stateValue',
    })
  },

  /* -----------TimePicke参数------------- */
  //选择今天？明天？后天？
  selectTime: function(e) {
    var page = this
    let id = e.currentTarget.id
    let tf = page.data.timeFirst
    let ts = page.data.timeSecond
    let tt = page.data.timeThird
    switch (id) {
      case '1':
        page.setData({
          today: '#fff',
          tom: '#f1f2f6',
          thir: '#f1f2f6',
          time: tf,
          currentTime: 0
        });

        break;

      case '2':
        page.setData({
          today: '#f1f2f6',
          tom: '#fff',
          thir: '#f1f2f6',
          time: ts,
          currentTime: 1
        });
        break;

      case '3':
        page.setData({
          today: '#f1f2f6',
          tom: '#f1f2f6',
          thir: '#fff',
          time: tt,
          currentTime: 2
        });
        break;
    }
  },
  //选择时间
  selectHour: function(e) {
    let id = parseInt(e.currentTarget.id)
    let curr = this.data.currentTime
    let tf = this.data.timeFirst
    let ts = this.data.timeSecond
    let tt = this.data.timeThird
    let tim = this.data.time
    Rest(tf)
    Rest(ts)
    Rest(tt)
    if (curr == 0) {

      this.setData({
        ['timeFirst[' + id + '].txtColor']: '#d81e06',
        ['timeFirst[' + id + '].hidden']: false,
        time: tf
      })
    } else if (curr == 1) {
      this.setData({
        ['timeSecond[' + id + '].txtColor']: '#d81e06',
        ['timeSecond[' + id + '].hidden']: false,
        time: ts
      })
    } else if (curr == 2) {
      this.setData({
        ['timeThird[' + id + '].txtColor']: '#d81e06',
        ['timeThird[' + id + '].hidden']: false,
        time: tt
      })
    }

  },
  //展开？关闭选择模态框
  pickTime: function(e) {
    if (this.data.showModal == 'none')
      this.setData({
        showModal: 'block',
        hidden: false
      })
    else
      this.setData({
        showModal: 'none',
        hidden: true
      })
  },
  //单击背景关闭选择模态框
  clickHidden: function(e) {
    this.setData({
      showModal: 'none',
      hidden: true
    })
  },
  //单击模态框的确认按钮
  sureTime: function(e) {
    let selectTime
    let time = this.data.time
    let curr = this.data.currentTime
    for (var i = 0, len = time.length; i < len; i++) {
      if (!time[i].hidden) {
        selectTime = time[i].time
        break;
      }
    }
    if (curr == 0)
      selectTime = '今天 ' + selectTime
    else if (curr == 1)
      selectTime = '明天 ' + selectTime
    else
      selectTime = '后天 ' + selectTime
    this.setData({
      hidden: true,
      showModal: 'none'
    })

    getApp().globalData.pickTime = selectTime
    this.setData({
      pickTime: selectTime,
    })
  },

  //选择第三方保价服务
  selectTP: function(e) {
  }

})

function Judge(goodsInfo1, goodsInfo2, senderInfo, receiverInfo, page) {
  if (senderInfo == null) {
    page.setData({
      error: true,
      msg: '未填写寄件人信息'
    })
    return 0
  }
  if (receiverInfo == null) {
    page.setData({
      error: true,
      msg: '未填写收件人信息'
    })
    return 0
  }
  if (goodsInfo1 == null || goodsInfo2 == null) {
    page.setData({
      error: true,
      msg: '未填写货物信息'
    })
    return 0
  }
  return 1
}

function ExtractName(name) {
  var nameArray = name.split('');
  for (var i = 1; i < nameArray.length; i++)
    if (nameArray[i] == '×') return name;
  var firstName = nameArray[0];
  for (var i = 0; i < 2; i++)
    firstName += '×';
  return firstName;
}

function GoodType(goodsCode, type) {
  if (type == 0) //普通物品
    switch (goodsCode) {
      case '01':
        return '日用品';
      case '02':
        return '食品';
      case '03':
        return '文件';
      case '04':
        return '数码产品';
      case '05':
        return '农物';
      default:
        return goodsCode;
    }
  else
    switch (goodsCode) {
      case '11':
        return '瓷器';
      case '12':
        return '首饰';
      case '13':
        return '电子产品';
      case '14':
        return '衣服';
      case '15':
        return '家具';
      default:
        return goodsCode;
    }
}

function MessHandle(title, mess) {
  wx.showModal({
    title: title,
    content: mess,
    showCancel: false,
    success: res => {
      if (res.confirm) {

      }
    }
  })
}

function Reset(page) {
  page.globalData.deliverNmae = '寄件人信息'
  page.globalData.deliverAddress = '点击填写寄件人信息'
  page.globalData.reName = '收件人信息'
  page.globalData.receiveAddress = '点击填写收件人信息'
  page.globalData.goodsType = '(20kg以上的物品)'
  page.globalData.senderAddressMess = null
  page.globalData.sAddress = null
  page.globalData.rAddress = null
  page.globalData.goodsInfo = null
  page.globalData.baseInfo = null
  page.globalData.imgInfo = null
}

function DeCode(pra, key) {
  var data = pra.data
  let result = MyRequest.parseXml(data, key)
  let path = result.split(',')[1].split(';')[1]
  return path
}

function getTimeArray(hours, page) {
  let hour = parseInt(hours)
  let c = hour - 8
  let array = page.data.timeSecond.slice(0)
  for (var i = c - 1; i >= 0; i--)
    array.splice(i, 1)
  array.unshift({
    time: '一小时之内',
    txtColor: '#d81e06',
    hidden: false
  })
  return array
}

function Rest(array) {
  for (var i = 0, len = array.length; i < len; i++) {
    array[i].txtColor = '#000',
      array[i].hidden = true
  }
}