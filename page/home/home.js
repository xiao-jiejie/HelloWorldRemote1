// page/home/home.js
//getApp()获取app.js中App()产生的示例对象
const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面
Page({

  /**
  * 获取用户授权
  */
  handleGetUserInfo(e) {
    console.log(e)
  },

  /**
   * 页面的初始数据
   */
  data: {
    name: 'Coderwhy',
    age: 21,
    students: [
      { sid: "0001", name: "tom", age: 21 },
      { sid: "0002", name: "lom", age: 20 },
      { sid: "0003", name: "som", age: 22 },
      { sid: "0004", name: "yom", age: 19 }
    ],
    counter: 0,
    list: []
  },

  /**
   * 监听函数:当点击时添加counter数据
   */
  handleBtnClick(){
    // 1.错误做法：界面不会刷新，也就是不会发生改变
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData()界面会一起刷新
    this.setData({
      counter: this.data.counter + 1
    })
  },

  /**
   * 监听函数：当点击时减去counter的计数
   */
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    // const _this = this;
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: function(res){
    //     console.log(res)
    //     const data = res.data.data.list;
    //     _this.setData({
    //       list: data
    //     })
    //   }
    // })
  },

  /**
   * 监听页面滚动事件
   */
  onPageScroll(obj){
    // console.log(obj)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
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
    console.log("滚动到底部")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})