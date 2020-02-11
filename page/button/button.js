// page/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,//这里在wxmlbutton变迁要设置引用disabled这个值，后面的同理
    plain: false,
    loading: false,
    image: "../../assets/tabbar/home.jpg",
    userName: "微信用户"
  },
  //禁用，默认都是false，这里！相当于取反true
  setDisabled: function(e){
    this.setData({
      disabled: !this.data.disabled
    })
  },
  //镂空
  setPlain: function(e){
    this.setData({
      plain: !this.data.plain
    })
  },
  //加载
  setLoding: function(e){
    this.setData({
      loading: !this.data.loading
    })
  },
  //客服会话
  bandleContact: function(e){
    // console.log(e.detail.path)
  },
  //获取用户信息
  onGetUserInfo: function(res){
    //声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    //判断是否授权 true获取微信用户头像
    if(userinfos != undefined){
      this.setData({
        image: userinfos.avatarUrl,
        userName: userinfos.nickName
      }) 
    } else {
      //false默认头像
      this.setData({
        image: this.data.image,
        userName: this.data.userName
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})