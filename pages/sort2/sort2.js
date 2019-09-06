


Page({
  data: {
    origin: ['任意'],
    index0: 0,
    region: ['任意'],
    index1: 0,
    class_c: ['任意'],
    index2: 0,
    alignment: ['任意'],
    index3: 0,
    hiddenmodalput_h: true,
    hiddenmodalput_w: true,
    height_s:0,
    height_f:0,
    weight_s: 0,
    weight_f: 0
    
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://dararara.xyz/get_attribute',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res){
        console.log(res)
        that.setData({
        origin:that.data.origin.concat(res.data.origin),
        region: that.data.region.concat(res.data.region),
        alignment:that.data.alignment.concat(res.data.alignment),
        class_c: that.data.class_c.concat(res.data.servent_class)

      })
    }
  })
  },
  bindPickerChange0: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index0: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
 
   modalinput_h: function () {
    this.setData({
      hiddenmodalput_h: !this.data.hiddenmodalput_h
    })
  },
  sliderchange_h_s: function(e){
    var that = this
    this.setData({
      height_s:e.detail.value
    })
    
  },
  sliderchange_h_f: function (e) {
    var that=this
    this.setData({
      height_f: e.detail.value
    })
  if (that.data.height_f == 200) {
      that.setData({
        height_f: -1
      })
    }
    
  },
  cancel_h: function () {
    this.setData({
      hiddenmodalput_h: true
    });
  },
  //确认  
  confirm_h: function () {
    this.setData({
      hiddenmodalput_h: true
    })
  },
  modalinput_w: function () {
    this.setData({
      hiddenmodalput_w: !this.data.hiddenmodalput_w
    })
  },
  sliderchange_w_s: function (e) {
    var that = this
    this.setData({
      weight_s: e.detail.value
    })

  },
  sliderchange_w_f: function (e) {
    var that = this
    this.setData({
      weight_f: e.detail.value
    })
    if (that.data.weight_f==200){
      that.setData({
        weight_f: -1
      })
    }


  },
  cancel_w: function () {
    this.setData({
      hiddenmodalput_w: true
    });
  },
  //确认  
  confirm_w: function () {
    this.setData({
      hiddenmodalput_w: true
    })
  }    


});