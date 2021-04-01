<template>
  <div>
    <div class="form-title">
      <span>文件</span>
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
      <template slot="test" slot-scope="text">
        <span>{{ text ? "是" : "否" }}</span>
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
          <a-form-model-item label="文件名称" prop="name">
            <a-input
              v-model="form.name"
              prop="name"
              placeholder="请输入文件名"
            />
          </a-form-model-item>
          <a-form-model-item label="文件类型" prop="type">
            <a-select v-model="form.type" placeholder="请选择文件类型">
              <a-select-option value="*">*</a-select-option>
              <a-select-option value="jpg">jpg</a-select-option>
              <a-select-option value="png">png</a-select-option>
              <a-select-option value="bmp">bmp</a-select-option>
              <a-select-option value="webp">webp</a-select-option>
              <a-select-option value="xls">xls</a-select-option>
              <a-select-option value="doc">doc</a-select-option>
              <a-select-option value="ppt">ppt</a-select-option>
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
    onEdit(item) {
      this.currentEdit = item;
      this.formTitle = "编辑文件";
      this.visible = !this.visible;
      this.form = { name: item.name, type: item.type };
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
      if (this.currentEdit) this.currentEdit = null;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.currentEdit) {
            this.visible = false;
            this.dataSource[this.dataSource.indexOf(this.currentEdit)] = {
              ...this.dataSource.indexOf(this.currentEdit),
              type: this.form.type,
              name: this.form.name,
            };
            this.currentEdit = null;
          } else {
            this.visible = false;
            this.dataSource.push({
              id: this.dataSource.length + 1,
              key: this.dataSource.length + 1,
              name: this.form.name,
              type: this.form.type,
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
            message: "请输入文件名称",
            trigger: "change",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择文件类型",
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
          type: "jpg",
          name: "实施意见",
        },
        {
          key: 2,
          id: 2,
          type: "jpg",
          name: "取用水方案",
        },
        {
          key: 3,
          id: 3,
          type: "jpg",
          name: "退水方案",
        },
        {
          key: 4,
          id: 4,
          type: "jpg",
          name: "水资源利用分析",
        },
        {
          key: 5,
          id: 5,
          type: "jpg",
          name: "可靠性分析",
        },
        {
          key: 6,
          id: 6,
          type: "jpg",
          name: "可供水量分析",
        },
        {
          key: 7,
          id: 7,
          type: "jpg",
          name: "取水分析",
        },
        {
          key: 8,
          id: 8,
          type: "jpg",
          name: "退水分析",
        },
      ],
      count: 2,
      columns: [
        {
          title: "序号",
          dataIndex: "id",
          width: "120px",
        },
        {
          title: "文件名",
          dataIndex: "name",
          width: "440px",
        },
        {
          title: "文件类型",
          dataIndex: "type",
        },
           {
          title: "是否允许上传多文件",
          dataIndex: "multiple",
          scopedSlots: { customRender: "test" },
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