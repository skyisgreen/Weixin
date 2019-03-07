// page/component/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/goods1.png',
      title: '常规陪诊',
      price: 0.01,
      stock: '有货',
      detail: '常规陪诊我们会派出专业的护士为您提供优质的陪诊服务',
      parameter: '125元/次',
      service: '如有问题：请拨打院方投诉电话：0123456789'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})