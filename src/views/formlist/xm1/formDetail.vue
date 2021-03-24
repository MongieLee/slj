<template>
  <div class="container">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 2em"
      title="建设项目概况表详情"
      @back="$router.back()"
    />
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="项目名称">
        <a-input placeholder="请输入项目名称" />
      </a-form-item>
      <a-form-item label="项目性质">
        <a-select placeholder="请选择项目性质">
          <a-select-option value="新建">新建</a-select-option>
          <a-select-option value="重建">重建</a-select-option>
          <a-select-option value="修复">修复</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="建设地点">
        <a-textarea placeholder="请输入建设地点" />
      </a-form-item>
      <a-form-item label="占地面积">
        <a-textarea placeholder="请输入占地面积" />
      </a-form-item>
      <a-form-item label="建设规模">
        <a-textarea placeholder="请输入建设规模" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          key: "1",
          title: "项目立项论证",
        },
        {
          key: "2",
          title: "招标采购",
        },
        {
          key: "3",
          title: "合同签订",
        },
        {
          key: "4",
          title: "资料管理",
        },
        {
          key: "5",
          title: "现场管理",
        },
        {
          key: "6",
          title: "按权检查",
        },
        {
          key: "7",
          title: "整改验收",
        },
      ],
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  overflow: auto;
}
</style>