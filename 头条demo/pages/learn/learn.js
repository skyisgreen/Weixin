// pages/learn/learn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '欢迎来到我的直播间',
    cls: 'active',
    duanzis:[
      '我特别能吃苦, 不好意思, 我多说了一个字',
      '同样的腰间盘, 为何你如此突出',
      '扁桃体, 还没有轮到你发炎, 你先坐下',
      '你别虚特别的努力, 才能看起来不那么费力',
      '顺风就吹牛x, 逆风讲道理'
    ],
    isVip: false,
    color: '#aef987'
  },

  tap: function(){
    // 
    this.setData({color: '#87a'})
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