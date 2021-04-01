<template>
  <div class="container">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 2em"
      title="供水工程项目后评价表详情"
      @back="$router.push('/xmk/1')"
    />
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="项目意义">
        <a-textarea placeholder="请输入项目意义" />
      </a-form-item>
      <a-form-item label="项目影响">
        <a-textarea placeholder="请输入项目影响" />
      </a-form-item>
      <a-form-item label="项目评价">
        <a-textarea placeholder="请输入项目评价" />
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