<template>
  <div>
    <div class="form-title">
      <span>项目模板</span>
      <div class="button-group">
        <a-button @click="addFile" type="primary">新增</a-button>
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
  </div>
</template>

<script>
export default {
  methods: {
    showDetail() {
      this.$router.push("/formFactory/detail");
    },
    onEdit() {
      this.$router.push({
        path: "/formFactory/addOrEdit",
        query: { isEdit: 1 },
      });
    },
    // this.currentEdit = item;
    // this.formTitle = "编辑文件";
    // this.visible = !this.visible;
    // this.form = { name: item.name, type: item.type };
    addFile() {
      this.$router.push({
        path: "/formFactory/addOrEdit",
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
          if (this.currentEdit) {
            this.visible = false;
            this.dataSource[this.dataSource.indexOf(this.currentEdit)] = {
              ...this.dataSource.indexOf(this.currentEdit),
              title: this.form.title,
            };
            this.currentEdit = null;
          } else {
            this.visible = false;
            this.dataSource.push({
              id: this.dataSource.length + 1,
              key: this.dataSource.length + 1,
              title: this.form.title,
            });
          }
          this.$refs.ruleForm.resetFields();
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
        title: [
          {
            required: true,
            message: "请输入项目名称",
            trigger: "change",
          },
        ],
      },
      visible: false,
      formTitle: "新增审批人",
      form: {
        title: undefined,
      },
      dataSource: [
        {
          key: 1,
          id: 1,
          title: "A表单模板",
        },
        {
          key: 2,
          id: 2,
          title: "B表单模板",
        },
        {
          key: 3,
          id: 3,
          title: "C表单模板",
        },
        {
          key: 4,
          id: 4,
          title: "D表单模板",
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