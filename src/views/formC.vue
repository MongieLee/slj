<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 2em"
      title="项目立项论证审批表详情"
      @back="$router.back()"
    />

    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="预算单位编号">
        <a-input disabled />
      </a-form-item>
      <a-form-item label="项目提报人">
        <a-input disabled />
      </a-form-item>
      <a-form-item label="项目名称">
        <a-input disabled />
      </a-form-item>
      <a-form-item label="经费项目编号">
        <a-input disabled />
      </a-form-item>
      <a-form-item label="项目预算总额">
        <a-input disabled />
      </a-form-item>
      <a-form-item label="立项理由论述">
        <a-textarea disabled />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>