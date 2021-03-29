<template>
  <div id="container"></div>
</template>

<script>
export default {
  mounted() {
    const AMap = window.AMap;
    this.$map =
      window.AMap &&
      new window.AMap.Map("container", {
        zoom: 11, //级别
        center: [113.443452,22.148628], //中心点坐标
        // viewMode: "3D", //使用3D视图
      });

    // // 添加点标记
    const marker = new AMap.Marker({
      position: [113.593953, 22.24363],
      title: "珠海",
      offset: new AMap.Pixel(-13, -30),
      // icon:
      //   "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      topWhenClick: true,
    });
    // marker.on("click", (e) => {
    //   console.log(e);
    // });
    marker.setLabel({
      offset: new AMap.Pixel(0, -5), //设置文本标注偏移量
      content: `<div class='info'>
                  <div class='info-title'>国际花园 08：00</div>
                  <div class='info-ll'>最新压流：<b>325</b><span class='unit'>(㎡/h)</span></div>
                  <div class='info-yl'>最新压力：<b>1.34</b><span class='unit'>(㎡/h)</span></div>
                </div>`, //设置文本标注内容
      direction: "top", //设置文本标注方位
    });

    const marker2 = new AMap.Marker({
      position: [113.557294, 22.238444],
      title: "珠海",
      offset: new AMap.Pixel(-13, -30),
      // icon:
      //   "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      topWhenClick: true,
    });
    marker2.setLabel({
      offset: new AMap.Pixel(0, -5), //设置文本标注偏移量
      content: `<div class='info'>
                  <div class='info-title'>格利广场 15：00</div>
                  <div class='info-ll'>最新压流：<b>269</b><span class='unit'>(㎡/h)</span></div>
                  <div class='info-yl'>最新压力：<b>0.254</b><span class='unit'>(㎡/h)</span></div>
                </div>`, //设置文本标注内容
      direction: "top", //设置文本标注方位
    });

    const marker3 = new AMap.Marker({
      position: [113.381145, 22.00629],
      title: "珠海",
      offset: new AMap.Pixel(-13, -30),
      // icon:
      //   "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      topWhenClick: true,
    });
    marker3.setLabel({
      offset: new AMap.Pixel(0, -5), //设置文本标注偏移量
      content: `<div class='info'>
                  <div class='info-title'>珠海机场 23：00</div>
                  <div class='info-ll'>最新压流：<b>485</b><span class='unit'>(㎡/h)</span></div>
                  <div class='info-yl'>最新压力：<b>2.54</b><span class='unit'>(㎡/h)</span></div>
                </div>`, //设置文本标注内容
      direction: "top", //设置文本标注方位
    });

    const marker4 = new AMap.Marker({
      position: [113.30828, 22.184878],
      title: "珠海",
      offset: new AMap.Pixel(-13, -30),
      // icon:
      //   "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      topWhenClick: true,
    });
    marker4.setLabel({
      offset: new AMap.Pixel(0, -5), //设置文本标注偏移量
      content: `<div class='info'>
                  <div class='info-title'>尖峰山公园 23：00</div>
                  <div class='info-ll'>最新压流：<b>485</b><span class='unit'>(㎡/h)</span></div>
                  <div class='info-yl'>最新压力：<b>2.54</b><span class='unit'>(㎡/h)</span></div>
                </div>`, //设置文本标注内容
      direction: "top", //设置文本标注方位
    });

    console.log(marker);

    this.$map.add(marker);
    this.$map.add(marker2);
    this.$map.add(marker3);
    this.$map.add(marker4);
    // this.$map.setFitView();
    AMap.event.addListener(marker, "click", function (e) {
      console.log(e);
    });
  },
  beforeDestroy() {
    console.log(this.$map);
    this.$map && this.$map.destroy();
  },
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
  ::v-deep .amap-marker-label {
    border-radius: 8px;
    padding: 8px;
    width: 200px;
    /* border: 1px solid rgb(248, 31, 78); */
    border: none;
    height: 100px;

    /* box-shadow: 2px 2px 2px 2px rgba($color: #000000, $alpha: 1); */
    filter: drop-shadow(3px 3px 4px rgba($color: #000000, $alpha: 0.7));
    ::before {
      position: absolute;
      display: block;
      content: "";
      height: 20px;
      width: 20px;
      /* border-left: 1px solid red;
      border-bottom: 1px solid red; */
      background: #fff;
      transform: translate(-50%, -50%) rotate(-45deg);
      top: 100%;
      left: 50%;
    }
    .info {
      height: 100%;
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        align-items: center;
        flex-grow: 1;
      }
      &-title {
        background: #4a8f7a;
        color: white;
        padding-left: 1em;
      }
      b {
        color: blue;
      }
      &-ll {
        color: #cc3217;
      }
      &-yl {
        color: rgb(153, 17, 17);
      }
      .unit {
        color: #eb2525;
      }
    }
  }
}
</style>