<template>
  <div ref="flowRef" class="flow-wrapper">
    <div class="flow-wrapper-mask"></div>
    <div id="flowContainer"></div>
  </div>
</template>

<script>
import data from "./data";
import registerFactory from "./graph";
import G6 from "@antv/g6";

export default {
  mounted() {
    const cfg = registerFactory(
      G6,
      {
        width: this.$refs.flowRef.getBoundingClientRect().width,
        height: this.$refs.flowRef.getBoundingClientRect().height,
        container: "flowContainer",
        // renderer: 'svg',
        layout: {
          // type: "xxx", // 位置将固定
        },
        defaultNode: {
          type: "rect-node",
          style: {
            radius: 10,
          },
          labelCfg: {
            style: {
              fontSize: 20,
            },
          },
        },
        defaultEdge: {
          type: "polyline-edge", // 扩展了内置边, 有边的事件
          style: {
            radius: 5,
            offset: 15,
            stroke: "#aab7c3",
            lineAppendWidth: 10, // 防止线太细没法点中
            endArrow: true,
          },
        },
        // 覆盖全局样式
        nodeStateStyles: {
          "nodeState:default": {
            opacity: 1,
          },
          "nodeState:hover": {
            opacity: 0.8,
          },
          "nodeState:selected": {
            opacity: 0.9,
          },
        },
        // 默认边不同状态下的样式集合
        edgeStateStyles: {
          "edgeState:default": {
            stroke: "#aab7c3",
          },
          "edgeState:selected": {
            stroke: "#1890FF",
          },
          "edgeState:hover": {
            animate: true,
            animationType: "dash",
            stroke: "#1890FF",
          },
        },
      },
      true
    );

    this.graph = new G6.Graph(cfg);
    this.graph.read(data()); // 读取数据
    this.graph.render();
    this.graph.fitView();
  },
};
</script>


<style lang="scss" scoped>
.flow-wrapper {
  width: 100%;
  height: 98%;
  border-right: 1px solid #ccc;
  position: relative;
  &-mask {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>