<template>
  <div style="padding: 10px 20px; height: 100%">
    <div class="form-title">
      <span>流程管理</span>
      <div class="button-group">
        <a-button @click="visible = !visible" type="primary">新增</a-button>
      </div>
    </div>
    <div class="container">
      <div ref="fuck" class="flowWrapper">
        <div id="flowContainer"></div>
      </div>
      <a-table
        class="f1"
        size="small"
        bordered
        :data-source="dataSource"
        :columns="columns"
      >
        <template slot="operation" slot-scope="text, record">
          <a
            href="javascript:;"
            v-if="dataSource.length"
            @click="() => showDetail(record)"
            style="margin-right: 1em"
            >查看</a
          >
          <a
            href="javascript:;"
            v-if="dataSource.length"
            @click="() => onEdit(record)"
            style="margin-right: 1em"
            >编辑</a
          >

          <a-popconfirm
            v-if="dataSource.length"
            title="确定删除吗？"
            @confirm="() => onDelete(record)"
          >
            <a style="color: red" href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
    <a-modal
      :title="formTitle"
      :visible="visible"
      @ok="onSubmit"
      :okText="'下一步'"
      @cancel="handleCancel"
    >
      <form>
        <a-form-model
          :model="form"
          :rules="rules"
          ref="ruleForm"
          v-bind="{
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }"
        >
          <a-form-model-item label="流程名称" prop="name">
            <a-input v-model="form.name" placeholder="请输入流程名称" />
          </a-form-model-item>
        </a-form-model>
      </form>
    </a-modal>
  </div>
</template>

<script>
import data from "../../components/G6/data";
import registerFactory from "../../components/G6/graph";
import G6 from "@antv/g6";
console.log(data);
export default {
  methods: {
    showDetail() {
      this.$router.push("/lct/detail");
    },
    onEdit() {
      this.$router.push({
        path: "/flow/addOrEdit",
        query: { isEdit: 1 },
      });
    },
    // this.currentEdit = item;
    // this.formTitle = "编辑文件";
    // this.visible = !this.visible;
    // this.form = { name: item.name, type: item.type };
    addFlow() {
      this.$router.push({
        path: "/flow/addOrEdit",
        query: { isEdit: 0 },
      });
    },
    onDelete(item) {
      this.dataSource.splice(this.dataSource.indexOf(item), 1);
    },
    handleCancel() {
      this.$refs.ruleForm.resetFields();
      this.visible = false;
      if (this.currentEdit) this.currentEdit = null;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({
            path: "/flow/addOrEdit",
            query: { name: this.form.name },
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {
    const cfg = registerFactory(
      G6,
      {
        width: this.$refs.fuck.getBoundingClientRect().width,
        height: this.$refs.fuck.getBoundingClientRect().height,
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
    this.graph.read(data); // 读取数据
    this.graph.render();
    this.graph.fitView();
  },
  data() {
    return {
      currentEdit: null,
      rules: {
        name: [
          {
            required: true,
            message: "请输入流程名称",
            trigger: "change",
          },
        ],
      },
      visible: false,
      formTitle: "新增流程",
      form: {
        title: undefined,
      },
      dataSource: [
        {
          key: 1,
          id: 1,
          title: "A流程",
          current: "流程中",
        },
        {
          key: 2,
          id: 2,
          title: "B流程",
          current: "流程中",
        },
        {
          key: 3,
          id: 3,
          title: "C流程",
          current: "流程中",
        },
        {
          key: 4,
          id: 4,
          title: "D流程",
          current: "流程中",
        },
      ],
      count: 2,
      columns: [
        {
          title: "序号",
          dataIndex: "id",
        },
        {
          title: "标题",
          dataIndex: "title",
        },
        {
          title: "当前流程",
          dataIndex: "current",
        },
        {
          title: "操作",
          scopedSlots: { customRender: "operation" },
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.form-title {
  display: flex;
  border: 1px solid rgb(235, 237, 240);
  align-items: center;
  padding: 4px 20px;
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
  .button-group {
    margin-left: 1em;
  }
}

.container {
  display: flex;
  height: calc(100% - 44px);
  .flowWrapper {
    width: 400px;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .f1 {
    flex-grow: 1;
  }
}
</style>