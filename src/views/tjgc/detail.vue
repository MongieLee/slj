<template>
  <div class="wrapper">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 1em"
      title="查看项目"
      @back="$router.back()"
    />
    <form>
      <a-form-model
        :model="form1"
        v-show="currentI === 1"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-model-item label="预算单位编号">
          <a-input readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="项目提报人">
          <a-input readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="项目名称">
          <a-input readOnly v-model="form1.c" />
        </a-form-model-item>
        <a-form-model-item label="经费项目编号">
          <a-input readOnly v-model="form1.d" />
        </a-form-model-item>
        <a-form-model-item label="项目预算总额">
          <a-input readOnly v-model="form1.e" />
        </a-form-model-item>
        <a-form-model-item label="立项理由论述">
          <a-textarea readOnly v-model="form1.f" />
        </a-form-model-item>
      </a-form-model>
    </form>
    <form>
      <a-form-model
        v-show="currentI === 2"
        :form="form2"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-model-item label="采购项目">
          <a-input readOnly v-model="form2.a" />
        </a-form-model-item>
        <a-form-model-item label="负责人">
          <a-input readOnly v-model="form2.b" />
        </a-form-model-item>
        <a-form-model-item label="招标方式">
          <a-input readOnly v-model="form2.c" />
        </a-form-model-item>
        <a-form-model-item label="完成时间">
          <a-input readOnly v-model="form2.d" />
        </a-form-model-item>
        <a-form-model-item label="项目内容">
          <a-input readOnly v-model="form2.e" />
        </a-form-model-item>
      </a-form-model>
    </form>
    <form>
      <a-form-model
        v-show="currentI === 3"
        :form="form3"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-model-item label="合同名称">
          <a-input readOnly v-model="form3.a" />
        </a-form-model-item>
        <a-form-model-item label="合同编号">
          <a-input readOnly v-model="form3.b" />
        </a-form-model-item>
        <a-form-model-item label="合同主要内容">
          <a-input readOnly v-model="form3.c" />
        </a-form-model-item>
        <a-form-model-item label="合同额">
          <a-input readOnly v-model="form3.d" />
        </a-form-model-item>
        <a-form-model-item label="公司名称">
          <a-input readOnly v-model="form3.e" />
        </a-form-model-item>
        <a-form-model-item label="证件是否齐全">
          <a-textarea readOnly v-model="form3.f" />
        </a-form-model-item>
        <a-form-model-item label="经办人">
          <a-input readOnly v-model="form3.g" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 3" type="primary" @click="currentI++"
          >下一步<a-icon type="right" />
        </a-button>
      </a-button-group>
    </div>
    <div class="upload-container">
      <p v-if="fileList.length === 0" style="margin-top: 20px">暂无文件</p>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />
    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>

<script>
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  data() {
    return {
      form1: {
        a: "BH0010101001",
        b: "张三",
        c: "XX项目",
        d: "IO12106540",
        e: "1000.000.00元",
        f: "可",
      },
      form2: {
        a: "BH099190280938120",
        b: "李四",
        c: "竞标",
        d: "2020-10-12",
        e: "完成",
        f: "jklfjdslakfjas",
      },
      form3: {
        a: "维护",
        b: "BH099190280938120",
        c: "维护",
        d: "1000.1000.100元",
        e: "XX公司",
        f: "是",
        g: "张三",
      },
      currentI: 1,
      fileList: [],
      defaultFileList: [],
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-container {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding: 20px 270px;
  button {
  }
}
</style>