<template>
  <div>
    <div class="form-title">
      <span>审批人</span>
      <div class="button-group">
        <a-button @click="visible = !visible" type="primary">新增</a-button>
      </div>
    </div>
    <a-table size="small" bordered :data-source="dataSource" :columns="columns">
      <template slot="operation" slot-scope="text, record">
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
          <a-form-model-item label="审批人" prop="name">
            <a-select v-model="form.name" placeholder="请选择审批人">
              <a-select-option value="张三">张三</a-select-option>
              <a-select-option value="王五">王五</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-form-model>
      </form>
    </a-modal>
  </div>
</template>

<script>
export default {
  methods: {
    onSelect(selectedKeys, info) {
      console.log("selected", selectedKeys, info);
    },
    onDelete(item) {
      this.dataSource.splice(this.dataSource.indexOf(item), 1);
    },
    handleCancel() {
      this.$refs.ruleForm.resetFields();
      this.visible = false;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.visible = false;
          this.dataSource.push({
            id: this.dataSource.length + 1,
            key: this.dataSource.length + 1,
            name: this.form.name,
          });
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
      rules: {
        name: [
          {
            required: true,
            message: "请选择审批人",
            trigger: "change",
          },
        ],
      },
      visible: false,
      formTitle: "新增审批人",
      form: {
        name: undefined,
      },
      dataSource: [
        {
          key: 1,
          id: 1,
          name: "陈六",
        },
        {
          key: 2,
          id: 2,
          name: "张琪",
        },
        {
          key: 3,
          id: 3,
          name: "汪精卫",
        },
        {
          key: 4,
          id: 4,
          name: "毛人凤",
        },
      ],
      count: 2,
      columns: [
        {
          title: "序号",
          dataIndex: "id",
        },
        {
          title: "姓名",
          dataIndex: "name",
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