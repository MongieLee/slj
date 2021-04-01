<template>
  <div class="container">
    <div id="container"></div>
    <a-modal
      title="项目详情"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :footer="null"
      width="70%"
    >
      <router-view></router-view>
    </a-modal>
  </div>
</template>

<script>
let i = 1;
export default {
  data() {
    return {
      visible: false,
      markerList: [
        {
          id: ++i,
          position: [113.593953, 22.24363],
          title: "1",
        },
        {
          id: ++i,
          position: [113.557294, 22.238444],
          title: "2",
        },
        {
          id: ++i,
          position: [113.381145, 22.00629],
          title: "3",
        },
      ],
    };
  },
  methods: {
    handleOk() {},
    handleCancel() {
      this.visible = !this.visible;
    },
  },
  mounted() {
    const AMap = window.AMap;
    this.$map =
      window.AMap &&
      new window.AMap.Map("container", {
        zoom: 11, //级别
        center: [113.443452, 22.148628], //中心点坐标
        // viewMode: "3D", //使用3D视图
      });
    this.markerList.map((item) => {
      const marker = new AMap.Marker({
        position: item.position,
        title: item.title,
        offset: new AMap.Pixel(-13, -10),
        topWhenClick: true,
      });

      marker.on("click", (e) => {
        console.log(e.target.w.title);
        this.visible = !this.visible;
        this.$router.push(`/gcjd/detail/${e.target.w.title}`);
      });

      marker.setLabel({
        offset: new AMap.Pixel(0, -5), //设置文本标注偏移量
        content: `<div class='info'>
                  <div class='info-title'>${"项目名"}</div>
                  <div class='info-yl'>这是一个项目</div>
                </div>`, //设置文本标注内容
        direction: "top", //设置文本标注方位
      });

      this.$map.add(marker);
    });
  },
  beforeDestroy() {
    console.log(this.$map);
    this.$map && this.$map.destroy();
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
#container {
  height: 100%;
  ::v-deep .amap-marker-label {
    border-radius: 8px;
    padding: 8px;
    /* width: 200px; */
    /* border: 1px solid rgb(248, 31, 78); */
    border: none;
    height: 60px;

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
      cursor: pointer;
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