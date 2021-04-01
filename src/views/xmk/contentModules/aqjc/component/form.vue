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
    showDetail(a) {
      console.log(a);
      this.$router.push(`/formFactory/detail${a.key}`);
    },
    onEdit(a) {
      this.$router.push({
        path: `/formFactory/addOrEdit${a.key}`,
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
          key: 9,
          id: 1,
          title: "管理要求",
        },
        {
          key: 10,
          id: 2,
          title: "人员要求",
        },
        {
          key: 11,
          id: 3,
          title: "施工现场",
        },
        {
          key: 12,
          id: 4,
          title: "危险作业区",
        },
        {
          key: 13,
          id: 5,
          title: "安全装置",
        },
        { key: 14, id: 6, title: "验收登记" },
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