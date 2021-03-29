<template>
  <div style="padding: 10px 20px; height: 100%">
    <div class="form-title">
      <span>项目管理</span>
      <div class="button-group">
        <a-button @click="visible = !visible" type="primary">新增</a-button>
      </div>
    </div>
    <div class="container">
      <div ref="fuck" class="flowWrapper">
        <div id="flowContainer"></div>
        <div class="flow-mask"></div>
      </div>
      <a-table
        :customRow="customRow"
        class="f1"
        size="small"
        bordered
        :data-source="dataSource"
        :columns="columns"
      >
        <template slot="operation" slot-scope="text, record">
          <a-popconfirm
            v-if="record.status === 0"
            @confirm="() => jjj(record)"
            title="确定提交审核吗？"
          >
            <a @click.stop style="margin-right: 1em" href="javascript:;"
              >提审</a
            >
          </a-popconfirm>
          <a
            href="javascript:;"
            v-if="record.status === 1"
            @click.stop="$router.push('/tjgc/detailSh')"
            style="margin-right: 1em"
            >审核</a
          >
          <a
            href="javascript:;"
            v-if="dataSource.length"
            @click.stop="toDetail(record)"
            style="margin-right: 1em"
            >查看</a
          >
          <!-- <a
            href="javascript:;"
            v-if="record.status === 0"
            @click.stop="() => onEdit(record)"
            style="margin-right: 1em"
            >编辑</a
          > -->

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
          <a-form-model-item label="项目名称" prop="title">
            <a-input v-model="form.title" placeholder="请输入项目名称" />
          </a-form-model-item>
          <a-form-model-item label="项目简介" prop="description">
            <a-input v-model="form.description" placeholder="请输入项目简介" />
          </a-form-model-item>
          <a-form-model-item type="number" label="经度" prop="longitude">
            <a-input v-model="form.longitude" placeholder="请输入经度" />
          </a-form-model-item>
          <a-form-model-item type="number" label="纬度" prop="latitude">
            <a-input v-model="form.latitude" placeholder="请输入纬度" />
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
export default {
  methods: {
    customRow(record) {
      return {
        on: {
          // 鼠标单击行
          click: (event) => {
            console.log(record.l);
            this.flowData.nodes.map((i) => {
              i.style.fill = "#ecf3ff";
              if (i.label === record.l) {
                if (record.status === 2) {
                  i.style.fill = "#56d56f";
                } else if (record.status === 3) {
                  i.style.fill = "#ff7070";
                } else {
                  i.style.fill = "yellow";
                }
                console.log(i);
                console.log(record);
              }
            });
            this.graph.read(this.flowData); // 读取数据
            this.graph.render();
            this.graph.fitView();
            event.currentTarget.parentNode
              .querySelectorAll("tr")
              .forEach((item) => {
                item.style.background = "white";
              });
            event.currentTarget.style.background = "#e6f7ff";
          },
        },
      };
    },
    jjj(e) {
      console.log(e);
    },
    showDetail() {
      this.$router.push("/lct/detail");
    },
    toDetail(jk) {
      console.log(jk);
      this.$router.push({ path: `/tjgc/detail/${jk.key}` }); // -> /user/123
    },
    onEdit() {
      this.$router.push({
        path: "/tjgc/edit",
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
            path: "/tjgc/addOrEdit",
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
    this.graph.read(this.flowData); // 读取数据
    this.graph.render();
    this.graph.fitView();
  },
  data() {
    return {
      flowData: data(),
      currentEdit: null,
      rules: {
        title: [
          {
            required: true,
            message: "请输入名称",
            trigger: "change",
          },
        ],
        description: [
          {
            required: true,
            message: "请输入简介",
            trigger: "change",
          },
        ],
        longitude: [
          {
            required: true,
            message: "请输入经度",
            trigger: "change",
          },
        ],
        latitude: [
          {
            required: true,
            message: "请输入纬度",
            trigger: "change",
          },
        ],
      },
      visible: false,
      formTitle: "新增项目",
      form: {
        title: undefined,
        description: undefined,
        longitude: undefined,
        latitude: undefined,
      },
      dataSource: [
        {
          key: 1,
          id: 1,
          title: "项目立项论证",
          current: "待提审",
          description: "...",
          longitude: 116.397128,
          latitude: 39.916527,
          status: 0,
          l: "项目立项论证",
          currentFlow: "项目立项论证",
        },
        {
          key: 2,
          id: 2,
          title: "采购招标",
          current: "待审",
          description: "...",
          longitude: 116.397128,
          latitude: 39.916527,
          status: 1,
          l: "招标采购",
          currentFlow: "招标采购",
        },
        {
          key: 3,
          id: 3,
          title: "合同签订",
          current: "通过",
          description: "...",
          longitude: 116.397128,
          latitude: 39.916527,
          status: 2,
          l: "合同签订",
          currentFlow: "合同签订",
        },
        {
          key: 4,
          id: 4,
          title: "资料管理",
          current: "不通过",
          description: "...",
          longitude: 116.397128,
          latitude: 39.916527,
          status: 3,
          l: "资料管理",
          currentFlow: "资料管理",
        },
      ],
      count: 2,
      columns: [
        {
          title: "序号",
          dataIndex: "id",
        },
        {
          title: "项目名称",
          dataIndex: "title",
        },
        {
          title: "项目简介",
          dataIndex: "description",
        },
        {
          title: "经度",
          dataIndex: "longitude",
        },
        {
          title: "纬度",
          dataIndex: "latitude",
        },
        {
          title: "当前流程",
          dataIndex: "currentFlow",
        },
        {
          title: "状态",
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
    position: relative;
    width: 400px;
    height: 100%;
    border-right: 1px solid #ccc;
    .flow-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .f1 {
    flex-grow: 1;
  }
}
</style>