// page/home/home.js
Page({

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
    counter: 0
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