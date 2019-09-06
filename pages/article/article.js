Page({
data:{
title:null,
message:null

},
  onLoad: function (options) {
  var that=this
  that.setData({
    title:options.title,
    message:options.message 
  })

}



});