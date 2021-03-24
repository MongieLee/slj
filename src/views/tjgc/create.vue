<template>
  <div class="wrapper">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 1em"
      title="新增项目"
      @back="$router.back()"
    />
    <a-form
      v-show="currentI === 1"
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="预算单位编号">
        <a-input />
      </a-form-item>
      <a-form-item label="项目提报人">
        <a-input />
      </a-form-item>
      <a-form-item label="项目名称">
        <a-input />
      </a-form-item>
      <a-form-item label="经费项目编号">
        <a-input />
      </a-form-item>
      <a-form-item label="项目预算总额">
        <a-input />
      </a-form-item>
      <a-form-item label="立项理由论述">
        <a-textarea />
      </a-form-item>
    </a-form>
    <a-form
      v-show="currentI === 2"
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="采购项目">
        <a-input />
      </a-form-item>
      <a-form-item label="负责人">
        <a-input />
      </a-form-item>
      <a-form-item label="招标方式">
        <a-input />
      </a-form-item>
      <a-form-item label="完成时间">
        <a-input />
      </a-form-item>
      <a-form-item label="项目内容">
        <a-input />
      </a-form-item>
    </a-form>
    <a-form
      v-show="currentI === 3"
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="合同名称">
        <a-input />
      </a-form-item>
      <a-form-item label="合同编号">
        <a-input />
      </a-form-item>
      <a-form-item label="合同主要内容">
        <a-input />
      </a-form-item>
      <a-form-item label="合同额">
        <a-input />
      </a-form-item>
      <a-form-item label="公司名称">
        <a-input />
      </a-form-item>
      <a-form-item label="证件是否齐全">
        <a-textarea />
      </a-form-item>
      <a-form-item label="经办人">
        <a-input />
      </a-form-item>
    </a-form>
    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 3" type="primary" @click="currentI++"
          >下一步<a-icon type="right" />
        </a-button>
      </a-button-group>
      <a-button
        @click="$router.push('/tjgc')"
        type="primary"
        ghost
        style="margin-left: 2em"
        >保存</a-button
      >
    </div>
    <div class="upload-container">
      <a-upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :default-file-list="defaultFileList"
      >
        <a-button> <a-icon type="upload" />上传文件</a-button>
      </a-upload>
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
  data() {
    return {
      defaultFileList: [],
      currentI: 1,
      fileList: [],
      rules: {
        name: [
          {
            required: true,
            message: "请输入项目名",
            trigger: "change",
          },
        ],
      },
      formFactory: [],
      currentTag: {
        added: {
          element: {},
          newIndex: null,
        },
      },
      form: {
        name: "",
      },
      isEdit: false,
      isAdd: false,
    };
  },
  created() {},
  methods: {},
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
}
</style>