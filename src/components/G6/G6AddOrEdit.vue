<template>
  <div class="root">
    <div id="headPanel">
      <span>{{ $route.query.isEdit === "1" ? "编辑" : "新增" }}项目流程</span>
      <!-- <button @click="saveData">保存</button>
      <i class="gb-toggle-btn" @click="headVisible = !headVisible" />
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240); margin-bottom: 1em"
        title="项目立项论证审批表"
        @back="$router.back()"
      /> -->
      <a-button @click="$router.push('/lcgl')" type="danger" ghost
        >返回</a-button
      >
      <a-button @click="saveData" type="primary">保存</a-button>
    </div>
    <!-- 左侧按钮 -->
    <item-panel :graph="graph" @canvas-add-node="addNode" />
    <!-- 挂载节点 -->
    <div id="canvasPanel" @dragover.prevent />
    <!-- 配置面板 -->
    <div id="configPanel" :class="{ hidden: !configVisible }">
      <i class="gb-toggle-btn" @click="configVisible = !configVisible" />
      <h2 class="panel-title">文字样式配置</h2>
      <div class="config-data">
        <div class="config-item">文字: <a-input v-model="label" /></div>
        <div class="config-item">
          字体大小:
          <a-input type="number" v-model.number="labelCfg.style.fontSize" />
        </div>
        <div class="config-item">
          颜色: <colorPicker v-model="labelCfg.style.fill" />
        </div>
      </div>
      <div v-if="node.shape === 'rect-node'">
        <a-form-model
          ref="ruleForm"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 14 }"
        >
          <a-form-model-item label="模板">
            <a-select v-model="config.data.template" placeholder="请选择模板">
              <a-select-option value="lz">项目立项论证</a-select-option>
              <a-select-option value="cg">招标采购</a-select-option>
              <a-select-option value="qd">合同签订</a-select-option>
              <a-select-option value="zl">资料管理</a-select-option>
              <a-select-option value="xc">现场管理</a-select-option>
              <a-select-option value="aq">安全检查</a-select-option>
              <a-select-option value="zg">整改验收</a-select-option>
              <a-select-option value="pj">后评价</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-form-model>
      </div>
      <button @click="configVisible = false">取消</button>
      <button class="save" @click="save">预览</button>
    </div>
    <div
      v-if="tooltip"
      class="g6-tooltip"
      :style="`top: ${top}px; left: ${left}px;`"
    >
      id: {{ tooltip }}
    </div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import registerFactory from "./graph";
import ItemPanel from "./ItemPanel.vue";
import getData from "./data";

export default {
  name: "G6",
  components: {
    ItemPanel,
  },
  data() {
    return {
      color: "#ecf3ff",
      stroke: "#1890FF",
      graph: {},
      highLight: {
        undo: false,
        redo: false,
      },
      // 保存线条样式
      lineStyle: {
        type: "line",
        width: 1,
      },
      label: "test",

      labelCfg: {
        style: {
          fontSize: 12,
          fill: "#fff",
        },
      },
      node: {
        fill: "",
        lineDash: "none",
        borderColor: "",
        width: 160,
        height: 60,
        shape: "",
      },
      nodeShapes: [
        {
          name: "矩形",
          shape: "rect-node",
        },
        {
          name: "圆形",
          shape: "circle-node",
        },
        {
          name: "椭圆",
          shape: "ellipse-node",
        },
        {
          name: "菱形",
          shape: "diamond-node",
        },
      ],
      headVisible: false,
      configVisible: false,
      config: "",
      tooltip: "",
      top: 0,
      left: 0,
      canvasOffset: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    // 创建画布
    console.log(G6);
    console.log(this.graph);
    this.$nextTick(() => {
      this.createGraphic();
      this.initGraphEvent();
    });
  },
  destroyed() {
    this.graph.data({ node: [], edges: [], combos: [] });
    this.graph.render();
    this.graph.clear();
    this.graph.destroy();

    this.graph = {};
    console.log("怎么没销毁");
    console.log(this.graph);
  },
  methods: {
    saveData() {
      //通过this.graph.save()可获取当前数据
      // this.graph.data(this.graph.save());
      // this.graph.render();

      alert("保存成功，控制台可查看流程图数据");
      this.$router.push("/lcgl");
      console.log("当前数据:");
      console.log("----------------------------");
    },
    createGraphic() {
      const vm = this;
      const menu = new G6.Menu({
        //右键菜单属性事件
        offsetX: -20,
        offsetY: -50,
        itemTypes: ["node"],
        getContent(e) {
          console.log(e);
          const outDiv = document.createElement("div");

          outDiv.style.width = "80px";
          outDiv.style.cursor = "pointer";
          outDiv.innerHTML = `
          <p id="deleteNode">删除节点</p>
          `;
          return outDiv;
        },
        handleMenuClick(target, item) {
          //target是dom元素，item是Node节点对象
          const { id } = target;
          if (id) {
            console.log(`vm`);
            console.log(vm[id]);
            console.log(id);
            vm[id](item);
          }
        },
      });

      const cfg = registerFactory(G6, {
        // renderer: 'svg',
        container: "canvasPanel",
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
        plugins: [menu],
        // ... 其他G6原生入参
      });

      this.graph = new G6.Graph(cfg);
      if (this.$route.query.isEdit === "1") {
        this.graph.read(getData()); // 读取数据
      }
      // this.graph.paint(); // 渲染到页面
      // this.graph.get('canvas').set('localRefresh', false); // 关闭局部渲染
      // this.graph.fitView();
    },
    // 复制节点
    copyNode() {},
    // 粘贴节点
    paste() {},
    deleteNode(item) {
      this.graph.removeItem(item);
    },
    formDetail(item) {
      console.log("item");
      console.log(item);
      alert("跳转了噢");
    },
    // 添加节点
    addNode(e) {
      const model = {
        text: "node",
        // 形状
        type: e.target.dataset.shape,
        // 坐标
        label: "未命名",
        data: {
          template: undefined,
          action: "初始化",
        },
        labelCfg: {
          style: {
            fontSize: 12,
            fill: "#1890ff",
            textAlign: "center",
            textBaseline: "middle",
            fontWeight: "bold",
          },
        },
        x: e.clientX - this.canvasOffset.x - 200,
        y: e.clientY - this.canvasOffset.y - 104,
      };
      this.configVisible = false;
      this.graph.addItem("node", model);
    },
    // 初始化图事件
    initGraphEvent() {
      this.graph.on("on-canvas-dragend", (e) => {
        this.canvasOffset.x = e.dx;
        this.canvasOffset.y = e.dy;
        console.log("ceshi");
      });

      this.graph.on("on-node-mouseenter", (e) => {
        if (e && e.item) {
          // const model = e.item.get('model');
          // model.style.fill = 'rgba(24, 144, 255, .3)';
        }
      });

      this.graph.on("after-node-selected", (e) => {
        //点击空白画布也会触发此事件，只有Node对象才会带有item
        this.configVisible = !!e;
        if (e && e.item) {
          console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
          console.log(e);
          console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
          this.tempItem = e;
          const model = e.item.get("model");
          console.log(model);

          this.config = model;
          this.label = model.label;
          this.labelCfg = {
            style: {
              fontSize: model.labelCfg.style.fontSize,
              fill: model.labelCfg.style.fill,
            },
          };
          this.node = {
            fill: model.style.fill,
            borderColor: model.style.stroke,
            lineDash: model.style.lineDash || "none",
            width: model.style.width,
            height: model.style.height,
            shape: model.type,
          };

          // model.label = e.item.get('id');
          /* this.graph.updateItem(e.item, {
            x: 100,
            y: 100,
          }); */
        }
      });

      this.graph.on("after-edge-selected", (e) => {
        this.configVisible = !!e;

        if (e && e.item) {
          this.config = e.item.get("model").id;

          this.graph.updateItem(e.item, {
            // shape: 'line-edge',
            style: {
              radius: 10,
              lineWidth: 2,
            },
          });
        }
      });

      this.graph.on("on-edge-mousemove", (e) => {
        if (e && e.item) {
          this.tooltip = e.item.get("model").label;
          this.left = e.clientX + 40;
          this.top = e.clientY - 20;
        }
      });

      this.graph.on("on-node-mousemove", (e) => {
        if (e && e.item) {
          this.tooltip = e.item.get("model").id;
          this.left = e.clientX + 40;
          this.top = e.clientY - 20;
        }
      });

      this.graph.on("on-node-mouseleave", (e) => {
        if (e && e.item) {
          this.tooltip = "";
        }
      });

      this.graph.on("on-edge-mouseleave", (e) => {
        if (e && e.item) {
          this.tooltip = "";
        }
      });

      this.graph.on("before-node-removed", ({ target, callback }) => {
        console.log(target);
        setTimeout(() => {
          // 确认提示
          callback(true);
        }, 1000);
      });

      this.graph.on("after-node-dblclick", (e) => {
        if (e && e.item) {
          console.log(e.item);
        }
      });

      this.graph.on(
        "before-edge-add",
        ({ source, target, sourceAnchor, targetAnchor }) => {
          setTimeout(() => {
            this.graph.addItem("edge", {
              id: `${+new Date() + (Math.random() * 10000).toFixed(0)}`, // edge id
              source: source.get("id"),
              target: target.get("id"),
              sourceAnchor,
              targetAnchor,
              // label:  'edge label',
            });
          }, 100);
        }
      );
    },
    save() {
      //保存单个节点触发
      this.config.label = this.label;
      this.config.type = this.node.shape;
      this.config.style.fill = this.color;
      this.config.style.stroke = this.stroke;
      this.config.labelCfg.style.fill = this.labelCfg.style.fill;
      this.config.labelCfg.style.fontSize = this.labelCfg.style.fontSize;
      // diamond-node
      //通过id查找到Item，传入Item和model更新节点
      // const item = this.graph.findById(this.config.id);
      // this.graph.updateItem(item, this.config);
      this.graph.data(this.graph.save());
      this.graph.render();
    },
  },
};
</script>

<style lang="scss">
#headPanel {
  padding: 0 10px;
  button {
    margin-left: 10px;
  }
}
/* 提示框的样式 */
.g6-tooltip {
  position: fixed;
  top: 0;
  left: 0;
  font-size: 12px;
  color: #545454;
  border-radius: 4px;
  border: 1px solid #e2e2e2;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgb(174, 174, 174) 0 0 10px;
  padding: 10px 8px;
}
.g6-minimap {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #fff;
}

.config-data {
  margin-bottom: 20px;
}
</style>
