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
        subcats: [
          {
            subcat_name: "废纸",
            detail_items: ["报纸", "杂志", "图书", "包装纸", "办公用纸", "纸盒"]
          },
          {
            subcat_name: "塑料",
            detail_items: ["塑料袋", "塑料包装物", "塑料餐具", "牙刷", "杯子", "矿泉水瓶", "塑料玩具", "塑料文具", "塑料生活用品", "洗发液瓶", "洗手液瓶", "洗衣液瓶", "洗洁精瓶"]
          },
          {
            subcat_name: "玻璃",
            detail_items: ["玻璃饮料瓶", "玻璃酒瓶", "坏玻璃杯", "碎玻璃窗", "废玻璃板", "镜片", "镜子"]
          },
          {
            subcat_name: "金属",
            detail_items: ["易拉罐", "金属罐头盒", "装饰物", "铝箔", "铁片", "铁钉", "铁管", "废铁丝", "旧钢丝球", "铜导线"]
          },
          {
            subcat_name: "纺织物",
            detail_items: ["废弃衣服", "裤子", "袜子", "毛巾", "书包", "布鞋", "床单", "被褥", "毛绒玩具"]
          }
        ]
      },
      {
        cat:"厨余垃圾",
        subcats: [
          {
            subcat_name: "厨余垃圾",
            detail_items: ["菜叶", "剩菜", "剩饭", "果皮", "蛋壳", "茶渣", "骨头"]
          }
        ]
      },
      {
        cat:"有害垃圾",
        subcats: [
          {
            subcat_name: "有害垃圾",
            detail_items: ["废电池", "废荧光灯管", "废灯泡", "废水银温度计", "废油漆桶", "过期药品"]
          }
        ]
      },
      {
        cat:"其他垃圾",
        subcats: [
          {
            subcat_name: "难以回收的垃圾",
            detail_items: ["砖瓦陶瓷", "渣土", "卫生间废纸", "瓷器碎片"]
          }
        ]
      }
    ]
  },
  detail_click: function(e) {
    var curStatus = e.currentTarget.dataset.curstatus;
    var catId = e.currentTarget.dataset.id;
    if(curStatus == "close") {
      this.setData({
        showDetails: true,
        content: this.data.wasteCatList[catId].subcats,
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

  searchName: function(e) {
    var text = e.detail.value;
    var list = this.data.wasteCatList;
    if (!text) { 
      wx.showToast({
        title: "请输入要查询的垃圾",
        icon: "none",
        duration: 1500
      });
      return;
    }
    
    // 这段代码让我有点不舒服
    for (var i = 0; i < 4; ++i) {
      var curCat = list[i].cat;
      var subCatList = list[i].subcats;
      for (var j = 0; j < subCatList.length; ++j) {
        var curSubCat = subCatList[j].subcat_name;
        var curSubCatList = subCatList[j].detail_items;
        for (var k = 0; k < curSubCatList.length; ++k) {
          if (curSubCatList[k].indexOf(text) >= 0) {
            wx.showToast({
              title: curSubCatList[k] + " 是 " + curCat + " 中的 " + curSubCat,
              icon: "none",
              mask: true,
              duration: 3000
            });
            return;
          }
        }
      }
    }
    wx.showToast({
      title: "没找到啊",
      icon: "none",
      mask: true,
      duration: 3000
    });
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