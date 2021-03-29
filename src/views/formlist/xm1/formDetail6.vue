<template>
  <div class="container">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 2em"
      title="臭氧催化剂采购项目表详情"
      @back="$router.push('/xmk/1')"
    />
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="招标编号">
        <a-input placeholder="请输入招标编号" />
      </a-form-item>
      <a-form-item label="项目名称">
        <a-textarea placeholder="请输入项目名称" />
      </a-form-item>
      <a-form-item label="预算金额">
        <a-input placeholder="请输入预算金额" />
      </a-form-item>
      <a-form-item label="数量">
        <a-input placeholder="请输入数量" />
      </a-form-item>
      <a-form-item label="最高投标限价">
        <a-textarea placeholder="请输入最高投标限价" />
      </a-form-item>
      <a-form-item label="投标保证金">
        <a-input placeholder="请输入投标保证金" />
      </a-form-item>
      <a-form-item label="资金来源及到位情况">
        <a-input placeholder="请输入资金来源及到位情况" />
      </a-form-item>
      <a-form-item label="购买招标文件时间">
        <a-textarea placeholder="请输入购买招标文件时间" />
      </a-form-item>
      <a-form-item label="购买招标文件地点">
        <a-textarea placeholder="请输入购买招标文件地点" />
      </a-form-item>
      <a-form-item label="网上报名时间">
        <a-input placeholder="请输入网上报名时间" />
      </a-form-item>
      <a-form-item label="投标截止时间">
        <a-textarea placeholder="请输入投标截止时间" />
      </a-form-item>
      <a-form-item label="开标时间">
        <a-textarea placeholder="请输入开标时间" />
      </a-form-item>
      <a-form-item label="联系人">
        <a-input placeholder="请输入联系人" />
      </a-form-item>
      <a-form-item label="联系地址">
        <a-textarea placeholder="请输入联系地址" />
      </a-form-item>
      <a-form-item label="招标人">
        <a-input placeholder="请输入招标人" />
      </a-form-item>
      <a-form-item label="联系电话">
        <a-input placeholder="请输入联系电话" />
      </a-form-item>
      <a-form-item label="传真">
        <a-input placeholder="请输入传真" />
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