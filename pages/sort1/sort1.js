// pages/sort1/sort1.js

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imagegif: '/img/gif1.gif',
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    
  }
  
});