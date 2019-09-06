Page({
  data: {
    article: [

    ],
    sev:null

  },
 
    onLoad: function (options) {
      var that = this;
      that.setData({
        sev: options.servent_id
      })
        wx.request({
          url: 'https://dararara.xyz/explorer_infomation',
          data: {
            servent_id:options.servent_id
          },

          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log(res)
            that.setData({
            article: that.data.article.concat(res.data.articles)
             
            })
          }

        })
  }
});