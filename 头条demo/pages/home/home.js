// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowPinDao: false,
    //内容高度
    height: 1000,
    // 所有频道
    channels:[
      { name: '推荐', id: 'tuijian', data: [] },
      { name: '热点', id: 'redian', data: [] },
      { name: '本地', id: 'bendi', data: [] },
      { name: '社会', id: 'shehui', data: [] },
      { name: '娱乐', id: 'yule', data: [] },
      { name: '军事', id: 'junshi', data: [] },
      { name: '科技', id: 'keji', data: [] },
      { name: '汽车', id: 'qiche', data: []},
    ],
    //当前的激活的频道
    activeChannel: 'tuijian'
  },

  showPinDao: function(){
    // 修改变量的值
    this.setData({ isShowPinDao: true})
  },
  hidePinDao: function(){
    this.setData({ isShowPinDao: false })
  },
  //点击切换频道
  clickChangeChannel: function(e){
    //获取当前点击的频道的id
    var id = e.currentTarget.dataset.id;
    //设置当前正在浏览的频道 id
    this.setData({activeChannel: id});

    //获取当前频道的下标
    var index = e.currentTarget.dataset.index;
    console.log(index);
    //检测当前的频道是否有数据
    if(this.data.channels[index].data.length == 0) {
      //如果没有 应该请求接口获取数据
      var that = this;
      wx.request({
        url: 'http://c.m.163.com/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
        success(res) {
          console.log(res.data);
          var key = 'channels[' + index + '].data'
          that.setData({[key]: res.data.data })
        }
      })
    }

    


  },

  //滑动切换频道
  swipeChangeChannel: function(e){
    //获取当前事件元素的itemid
    var id = e.detail.currentItemId;
    //设置正在浏览的频道id
    this.setData({ activeChannel: id});

    //获取当前频道的下标
    console.log(e);
    // var index = e.currentTarget.dataset.index;
    var itemid = e.detail.currentItemId;
    var index = e.detail.current;
    //遍历所有的频道 获取当前的频道的索引
    // for(var i=0;i<this.data.channels.length;i++){
    //   if(this.data.channels[i].id == itemid){
    //     index = i;break;
    //   }
    // }

    //检测当前的频道是否有数据
    if (this.data.channels[index].data.length == 0) {
      //如果没有 应该请求接口获取数据
      var that = this;
      wx.request({
        url: 'http://c.m.163.com/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
        success(res) {
          console.log(res.data);
          var key = 'channels[' + index + '].data'
          that.setData({ [key]: res.data.data })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置内容高度
    var height = wx.getSystemInfoSync().windowHeight - 45 - 1 ;
    this.setData({height: height})
    //接收this指向
    var that = this;
    //请求数据
    wx.request({
      url: 'http://c.m.163.com/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
      success(res) {
        console.log(res.data);
        that.setData({'channels[0].data': res.data.data})
      }
    })

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