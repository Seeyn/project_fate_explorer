/*var app = getApp()

var { request } = require('../../utils/util')
var url = 'https://v.juhe.cn/toutiao/index'*/


Page({
  data: {
    page: 1,
    array: [],
    text:"load more"
  },
  
  onLoad: function (options) {
    var that = this
    
    if(options.type=="name"){
    wx.request({
      url: 'https://dararara.xyz/name_search',
      data:{
          name:options.name
      } ,
     
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        that.setData({

          array: that.data.array.concat(res.data)
        })
      }
      
      })
    } else if (options.type == "character"){
          var origin= options.origin;
          if(origin=='任意'){
            origin='null';
          }
          var  region= options.region;
          if (region == '任意') {
            region = 'null';
          }
          var  class_c = options.class;
           if (class_c == '任意') {
           class_c = 'null';
         }
          var  alignment= options.alignment;
          if( alignment == '任意') {
            alignment = 'null';
         }
      wx.request({
        url: 'https://dararara.xyz/characteristics_search',
        data: {
          origin:origin,
          region: region,
          class: class_c,
          alignment: alignment,
          weight_down:options.weight_down,
          weight_up: options.weight_up,
          height_down : options.height_down,
          height_up: options.height_up
        },
        

        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          that.setData({

            array: that.data.array.concat(res.data)
          })
        }

      })
    }else if(options.type=="region"){
      wx.request({
        url: 'https://dararara.xyz/region_search',
        data: {
         
          region: options.region,
          
        },

        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          that.setData({

            array: that.data.array.concat(res.data)
          })
        }

      })
    } else if (options.type == "origin") {
      wx.request({
        url: 'https://dararara.xyz/origin_search',
        data: {

          origin: options.origin,

        },

        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          that.setData({

            array: that.data.array.concat(res.data)
          })
        }

      })
    } else if (options.type == "prototype") {
      wx.request({
        url: 'https://dararara.xyz/prototype_search',
        data: {

          prototype: options.prototype,

        },

        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          that.setData({

            array: that.data.array.concat(res.data)
          })
        }

      })
    }


    
    
  },

  /**
   * 滑动到底部加载更多
   */
  loadMore() {
    
    var that = this
    if((that.data.array.length/10)<that.data.page)
    {
      that.setData({
        text:"no more"
      })
    }else{
      that.setData({
        page: that.data.page +1
      })
    }
    
    
   

  }
})