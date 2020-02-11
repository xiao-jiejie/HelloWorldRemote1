// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imagePath: ''
    images: '',
    titleCount: 0,//标题字数
    contentCount: 0,//正文字数
    title: '',//标题内容
    content: '' //正文内容
  },

  /**
   * 选择图片
   */
  chooseImage(e){
    wx.chooseImage({
      count: 1,
      //可选择原图或压缩图片
      sizeType: ['original', 'compressed'],
      //可选择开放性访问相册、相机
      sourceType: ['album', 'camera'],
      success: (res) => {
        const images = res.tempFilePaths
        this.setData({
          images: images
        })
      },
    })
  },

  /**
   * 标题字数
   */
  handleTitleInput(e){
    const titleLength = e.detail.value.length
    this.setData({
      titleCount: titleLength
    })
  },

  /**
   * 正文字数
   */
  handleContentInput(e) {
    //获取输入的字数
    const contentLength = e.detail.value.length
    this.setData({
      contentCount: contentLength
    })
  },

  /**
   * 调用系统API，让用户选择图片或拍照
   */
  // handleChooseAlbum(){
  //   wx.chooseImage({
  //     success: (res) => {
  //       //1.取出路径
  //       const path = res.tempFilePaths[0]

  //       //2.设置imagePath
  //       this.setData({
  //         imagePath: path
  //       })
  //     },
  //   })
  // },


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