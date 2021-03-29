<template>
  <div class="container">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 2em"
      title="珠海供排水管网有限公司针对供水工程项目混凝土材料采购项目表详情"
      @back="$router.push('/xmk/1')"
    />
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
     <a-form-item label="甲方">
        <a-input placeholder="请输入甲方" />
      </a-form-item>
      <a-form-item label="乙方">
        <a-input placeholder="请输入乙方" />
      </a-form-item>
      <a-form-item label="工程名称">
        <a-input placeholder="请输入工程名称" />
      </a-form-item>
      <a-form-item label="工程地点">
        <a-input placeholder="请输入工程地点" />
      </a-form-item>
      <a-form-item label="承包范围">
        <a-textarea placeholder="请输入承包范围" />
      </a-form-item>
      <a-form-item label="开工日期">
        <a-input placeholder="请输入开工日期" />
      </a-form-item>
      <a-form-item label="工程面积">
        <a-input placeholder="请输入工程面积" />
      </a-form-item>
      <a-form-item label="每平方工程包价">
        <a-textarea placeholder="请输入每平方工程包价" />
      </a-form-item>
      <a-form-item label="付款方式">
        <a-textarea placeholder="请输入付款方式" />
      </a-form-item>
      <a-form-item label="甲方责任">
        <a-textarea placeholder="请输入甲方责任" />
      </a-form-item>
      <a-form-item label="乙方责任">
        <a-textarea placeholder="请输入乙方责任" />
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