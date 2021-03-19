<template>
  <div>
    <div class="form-title">
      <span>合作方</span>
      <div class="button-group">
        <a-button @click="addFile" type="primary">新增</a-button>
      </div>
    </div>
    <a-table size="small" bordered :data-source="dataSource" :columns="columns">
      <template slot="operation" slot-scope="text, record">
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
          <a-form-model-item label="合作方名称" prop="name">
            <a-input
              v-model="form.name"
              prop="name"
              placeholder="请输入合作方名称"
            />
          </a-form-model-item>
          <a-form-model-item label="联系人" prop="user">
            <a-input
              v-model="form.user"
              prop="user"
              placeholder="请输入联系人"
            />
          </a-form-model-item>
          <a-form-model-item label="联系号码" prop="phone">
            <a-input
              v-model="form.phone"
              prop="phone"
              placeholder="请输入联系号码"
            />
          </a-form-model-item>
          <a-form-model-item label="地址" prop="addr">
            <a-input v-model="form.addr" prop="addr" placeholder="请输入地址" />
          </a-form-model-item>
        </a-form-model>
      </form>
    </a-modal>
  </div>
</template>

<script>
export default {
  methods: {
    onEdit(item) {
      this.currentEdit = item;
      this.formTitle = "编辑文件";
      this.visible = !this.visible;
      this.form = {
        name: item.name,
        user: item.user,
        phone: item.phone,
        addr: item.addr,
      };
    },
    addFile() {
      this.visible = !this.visible;
      this.formTitle = "新增文件";
    },

    onDelete(item) {
      this.dataSource.splice(this.dataSource.indexOf(item), 1);
    },
    handleCancel() {
      this.$refs.ruleForm.resetFields();
      this.visible = false;
      this.form = {};
      if (this.currentEdit) this.currentEdit = null;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.currentEdit) {
            this.visible = false;
            this.dataSource[this.dataSource.indexOf(this.currentEdit)] = {
              ...this.dataSource.indexOf(this.currentEdit),
              phone: this.form.phone,
              addr: this.form.addr,
              user: this.form.user,
              name: this.form.name,
            };
            this.currentEdit = null;
          } else {
            this.visible = false;
            this.dataSource.push({
              id: this.dataSource.length + 1,
              key: this.dataSource.length + 1,
              phone: this.form.phone,
              addr: this.form.addr,
              user: this.form.user,
              name: this.form.name,
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
        name: [
          {
            required: true,
            message: "请输入合作方姓名",
            trigger: "change",
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入联系人",
            trigger: "change",
          },
        ],
        user: [
          {
            required: true,
            message: "请输入联系号码",
            trigger: "change",
          },
        ],
        addr: [
          {
            required: true,
            message: "请输入地址",
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
          user: "张三",
          phone: "13232287865",
          addr: "广东省珠海市香洲区",
          name: "广州市政局",
        },
        {
          key: 2,
          id: 2,
          user: "张三",
          phone: "13232287865",
          addr: "广东省珠海市香洲区",
          name: "广州市政局",
        },
        {
          key: 3,
          id: 3,
          user: "张三",
          phone: "13232287865",
          addr: "广东省珠海市香洲区",
          name: "广州市政局",
        },
      ],
      count: 2,
      columns: [
        {
          title: "序号",
          dataIndex: "id",
        },
        {
          title: "合作方姓名",
          dataIndex: "name",
        },
        {
          title: "联系人",
          dataIndex: "user",
        },
        {
          title: "联系号码",
          dataIndex: "phone",
        },
        {
          title: "地址",
          dataIndex: "addr",
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