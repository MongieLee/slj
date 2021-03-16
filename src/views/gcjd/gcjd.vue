<template>
  <div id="container"></div>
</template>

<script>
let map;
export default {
  mounted() {
    map = new AMap.Map("container", {
      zoom: 11, //级别
      center: [113.551239, 22.251673], //中心点坐标
      viewMode: "3D", //使用3D视图
    });

    // // 添加点标记
    // var marker = new AMap.Marker({
    //   position: [113.3245904, 23.1066805],
    //   title: "广州塔",
    //   offset: new AMap.Pixel(-100, -100),
    //   icon: "//vdata.amap.com/icons/b18/1/2.png",
    // });
    // map.add(marker);
  },
  beforeDestroy() {
    map && map.destroy();
  },
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
}
</style>