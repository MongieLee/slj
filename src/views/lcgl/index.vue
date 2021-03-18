<template>
  <div style="padding: 10px 20px">
    <div class="form-title">
      <span>流程管理</span>
      <div class="button-group">
        <a-button @click="visible = !visible" type="primary">新增</a-button>
      </div>
    </div>
    <a-table size="small" bordered :data-source="dataSource" :columns="columns">
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
        },
        {
          key: 2,
          id: 2,
          title: "B流程",
        },
        {
          key: 3,
          id: 3,
          title: "C流程",
        },
        {
          key: 4,
          id: 4,
          title: "D流程",
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
</style>