// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    servent_id:null,
    servent_name: null,
    servent_name_japanese: null,
    servent_name_english: null,
    height: null,
    weight: null,
    gender: null,
    strength: null,
    endurance: null,
    agility: null,
    mana: null,
    luck: null,
    noble_phantasm: null,
    craft_name: null,
    craft_description: null,
    craft_src: null,
   alignment: [],
    class_us: [],
    illustrator: [],
    voice_actor: [],
      region: [],
      origin: [],
      prototype: [],
      full_picture: [],
      bond_text: []

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://dararara.xyz/servent_infomation',
      data:{
        servent_id:options.id
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
  
     success: function (res) {
       console.log(res)
       that.setData({

         servent_id: res.data.servent_id,
         servent_name: res.data.servent_name,
         servent_name_japanese: res.data.servent_name_japanese,
         servent_name_english: res.data.servent_name_english,
         height: res.data.height,
         weight: res.data.weight,
         gender: res.data.gender,
         strength: res.data.strength,
         endurance: res.data.endurance,
         agility: res.data.agility,
         mana: res.data.mana,
         luck: res.data.luck,
         noble_phantasm: res.data.noble_phantasm,
         craft_name: res.data.craft_name,
         craft_description: res.data.craft_description,
         craft_src: res.data.craft_src,
         alignment:res.data.alignment,
         class_us: res.data.class,
         illustrator: res.data.illustrator,
         voice_actor: res.data.voice_actor,
         region: res.data.region,
         origin: res.data.origin,
         prototype: res.data.prototype,
         full_picture: res.data.full_picture,
         bond_text: 
         res.data.bond_text
       })
     } 
    })
  }  
  ,
  
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