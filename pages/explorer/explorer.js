Page({
  data: {
    origin:null,
    region:null,
    prototype:null,
    servent_id:null,
     book_title : '暂无',
     isbn_code : '暂无',
     book_writer : '暂无'
  },
  onLoad: function (options) {
    var that=this
    this.setData({
      origin:options.origin,
      region:options.region,
      prototype:options.prototype,
      servent_id: options.servent_id
    })
    wx.request({
      url: 'https://dararara.xyz/explorer_infomation',
      data: {
        servent_id: that.data.servent_id
      },

      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
        that.setData({
          book_title: res.data.books[0].book_title,
          isbn_code: res.data.books[0].isbn_code,
          book_writer: res.data.books[0].book_writer
        })

      }

    })
  },

  open1: function () {
    var that=this;
    wx.showActionSheet({

      itemList: ['地域', '起源', '原型'],

      success: function (res) {

        if (!res.cancel) {

          console.log(res.tapIndex)
          if(res.tapIndex==0){
            wx.navigateTo({
              url: '../list/list?type=region&region='+that.data.region
            })
          } else if (res.tapIndex == 1){
            wx.navigateTo({
              url: '../list/list?type=origin&origin=' + that.data.origin
            })
          }else{
            wx.navigateTo({
              url: '../list/list?type=prototype&prototype=' + that.data.prototype
            })
          }
        }

      }

    });

  },
  open2: function () {
    var that = this;
    
    
    wx.showActionSheet({

      itemList: ['书名: ' + that.data.book_title, '书号: ' + that.data.isbn_code, '作者: '+that.data.book_writer],

      success: function (res) {

        if (!res.cancel) {

          console.log(res.tapIndex)
          if (res.tapIndex == 0) {
            wx.navigateTo({
              url: ''
            })
            

          }
        }

      }

    });

  },
  open3: function () {
    var that = this;
    wx.showActionSheet({

      itemList: ['前往文章列表'],

      success: function (res) {

        if (!res.cancel) {

          console.log(res.tapIndex)
          if (res.tapIndex == 0) {
            wx.navigateTo({

              url: '../article_list/article_list?servent_id=' + that.data.servent_id 

            });


          }
        }

      }

    });

  }

});