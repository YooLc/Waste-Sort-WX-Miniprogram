// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    showDetails: false,
    content: null,
    title: null,
    wasteCatList: [
      {
        cat:"可回收垃圾",
        items:["你","我","他","你","我","他","你","我","他","你","我","他","你","我","他","你","我","他","你","我","他"]
      },
      {
        cat:"厨余垃圾",
        items:["123","234","456"]
      },
      {
        cat:"有害垃圾",
        items:["12333","23334","43356"]
      },
      {
        cat:"其他垃圾",
        items:["asd123","23df4","456dfa"]
      }
    ]
  },
  detail_click: function(e) {
    var curStatus = e.currentTarget.dataset.curstatus;
    var catId = e.currentTarget.dataset.id;
    if(curStatus == "close") {
      this.setData({
        showDetails: true,
        content: this.data.wasteCatList[catId].items,
        title: this.data.wasteCatList[catId].cat,
        wasteCatList: this.data.wasteCatList
      });
    }

    if(curStatus == "open") {
      this.setData({
        showDetails: false,
        content: null,
        title: null,
        wasteCatList: this.data.wasteCatList
      });
    }
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