<template>
  <div class="container">
    <div class="tree">
      <a-button :style="{ margin: `10px 6px` }" type="primary" @click="addItem"
        >新增项目</a-button
      >
      <a-table
        ref="fff"
        size="small"
        :columns="columns2"
        :data-source="data2"
        defaultExpandAllRows
        :pagination="false"
        :customRow="customRow"
      >
        <template slot="plan" slot-scope="text">
          {{ text ? "是" : "否" }}
        </template>
        <template slot="action" slot-scope="text, record">
          <a
            @click.stop="handelEdit(text)"
            href="javascript:;"
            style="margin-right: 1em"
            >编辑</a
          >

          <a-popconfirm
            v-if="data2.length"
            title="确定删除吗？"
            @confirm="() => onDelete(record)"
          >
            <a style="color: red" href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
    <!-- <div class="project-content"> -->
    <router-view :x="currentTreeItem"> </router-view>
    <!-- <F />
      <File />
      <Form /> -->
    <!-- </div> -->
    <a-modal
      :title="formTitle"
      :visible="visible"
      @ok="onSubmit"
      @cancel="handleCancel"
    >
      <form>
        <a-form-model
          :model="form"
          :rules="rules"
          ref="ruleForm"
          v-bind="{
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
          }"
        >
          <a-form-model-item label="项目名" prop="title">
            <a-input v-model="form.title" placeholder="请输入项目名" />
          </a-form-model-item>
          <a-form-model-item label="是否填写进度">
            <a-checkbox v-model="form.plan" />
          </a-form-model-item>
        </a-form-model>
      </form>
    </a-modal>
  </div>
</template>

<script>
const columns2 = [
  {
    title: "库名",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "填写进度",
    dataIndex: "plan",
    key: "plan",
    scopedSlots: { customRender: "plan" },
  },
  {
    title: "操作",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" },
  },
];

const data2 = [
  {
    key: "qqq",
    title: "项目模板组",
    plan: false,
    children: [
      {
        key: "www",
        title: "土建项目模板",
        plan: false,
        children: [
          {
            key: 1,
            title: "项目立项论证",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 2,
            title: "招标采购",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 3,
            title: "合同签订",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 4,
            title: "资料管理",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 5,
            title: "现场管理",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 6,
            title: "安全检查",
            plan: true,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 7,
            title: "整改验收",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
          {
            key: 8,
            title: "后评价",
            plan: false,
            module: [
              { key: "form", has: true },
              { key: "file", has: true },
              { key: "user", has: true },
            ],
          },
        ],
      },

      // {
      //   key: Math.random() * 1000,
      //   title: "工程建设项目",
      // },
    ],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export default {
  methods: {
    onDelete() {
      this.$message.success("删除成功");
    },
    handelEdit(item) {
      this.editing = true;
      this.form.title = item.title;
      this.form.plan = item.plan;
      this.visible = !this.visible;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.visible = false;
          this.$message.success(this.editing ? "编辑成功" : "新增成功");
          if (this.editing) {
            this.editing = false;
          }
          // this.data2.push({
          //   key: Math.random() * 1000,
          //   title: this.form.title,
          //   plan: this.form.plan,
          // });
          this.$refs.ruleForm.resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleCancel() {
      this.$refs.ruleForm.resetFields();
      this.visible = false;
    },
    addItem() {
      this.visible = true;
      console.log(this.currentTreeItem);
    },
    customRow(record) {
      return {
        on: {
          // 鼠标单击行
          click: (event) => {
            console.log(record);
            this.currentTreeItem = record;
            event.currentTarget.parentNode
              .querySelectorAll("tr")
              .forEach((item) => {
                item.style.background = "white";
              });
            event.currentTarget.style.background = "#e6f7ff";
            if (typeof record.key === "number") {
              this.$router.push({
                path: `/xmk/${record.key}`,
              });
              this.currentTreeItem = record.module;
            }
          },
        },
      };
    },
    onSelect(selectedKeys, info) {
      console.log("selected", selectedKeys, info);
    },
  },
  data() {
    return {
      rules: {
        title: [
          {
            required: true,
            message: "请输入项目名",
            trigger: "change",
          },
        ],
      },
      // form: { title: "", plan: false },
      form: { title: "", plan: false },
      formTitle: "新增项目",
      visible: false,
      currentTreeItem: null,
      columns2,
      data2,
      rowSelection,
      editing: false,
    };
  },
  mounted() {
    const a = this.$route.fullPath.replace("/xmk/", "");
    if (a) {
      this.$refs.fff.$el.querySelector("tbody").children[Number(a) + 1].click();
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  .tree {
    width: 350px;
    border-right: 1px solid #ccc;
  }
  .project-content {
    flex-grow: 1;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    > div {
      height: 32%;
      overflow: auto;
      &:not(:first) {
        margin-top: 2%;
      }
    }
  }
}
</style>