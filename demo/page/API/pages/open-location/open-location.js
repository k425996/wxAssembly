Page({
  data:{
    longitude:'113.324520',
    latitude:'23.099994',
    name:"T.I.T 创意园",
    address:"广州市海珠区新港中路397号"
  },
  openLocation: function (e) {
    console.log(e)
    var va= this.data
    console.log(va.latitude)
    wx.openLocation({
      longitude: Number(va.longitude),
      latitude: Number(va.latitude),
      name: va.name,
      address: va.address
    })
  }
})
