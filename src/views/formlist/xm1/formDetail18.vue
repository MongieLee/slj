<template>
  <div class="container">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 2em"
      title="整改验收表详情"
      @back="$router.push('/xmk/1')"
    />
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="单项目名称">
        <a-textarea placeholder="请输入单项目名称" />
      </a-form-item>
      <a-form-item label="验收通过日期">
        <a-textarea placeholder="请输入验收通过日期" />
      </a-form-item>
      <a-form-item label="验收情况">
        <a-textarea placeholder="请输入验收情况" />
      </a-form-item>
      <a-form-item label="验收内容">
        <a-textarea placeholder="请输入验收内容" />
      </a-form-item>
      <a-form-item label="验收单位">
        <a-textarea placeholder="请输入验收单位" />
      </a-form-item>
      <a-form-item label="验收合格日期">
        <a-textarea placeholder="请输入验收合格日期" />
      </a-form-item>
      <a-form-item label="工程状态">
        <a-textarea placeholder="请输入工程状态" />
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
          title: "安全检查",
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