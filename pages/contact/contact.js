// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
/*
* 页面绑定事件，只要选中的值发生了变化就会触发
*/
  bindChangeHandle: function(event) {
      console.log(event.detail.value);
      console.log(event.target.dataset.para);
  },
  /**
   * 父元素点击事件
   */
    fatherTapHandle: function (event) {
        console.log('父亲被点击了');
        
    },
 /**
   * 子元素点击事件
   */
 sonTapHandle: function(event) {
     console.log('儿子被点击了');
     console.log(event.target.dataset.index);
 }
})