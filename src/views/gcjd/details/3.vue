<template>
  <div>
    <form class="form-wrapper">
      <a-form-model
        :model="form1"
        v-show="currentI === 1"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <h1 style="text-align: center">{{ form1.title }}</h1>
        <a-form-model-item label="甲方">
          <a-input readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="乙方">
          <a-input readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="工程名称">
          <a-input readOnly v-model="form1.c" />
        </a-form-model-item>
        <a-form-model-item label="工程地点">
          <a-input readOnly v-model="form1.d" />
        </a-form-model-item>
        <a-form-model-item label="承包范围">
          <a-textarea readOnly v-model="form1.e" />
        </a-form-model-item>
        <a-form-model-item label="开工日期">
          <a-input readOnly v-model="form1.f" />
        </a-form-model-item>
        <a-form-model-item label="工程面积">
          <a-input readOnly v-model="form1.g" />
        </a-form-model-item>
        <a-form-model-item label="每平方工程包价">
          <a-textarea readOnly v-model="form1.h" />
        </a-form-model-item>
        <a-form-model-item label="付款方式">
          <a-textarea readOnly v-model="form1.i" />
        </a-form-model-item>
        <a-form-model-item label="甲方责任">
          <a-textarea readOnly v-model="form1.j" />
        </a-form-model-item>
        <a-form-model-item label="乙方责任">
          <a-textarea readOnly v-model="form1.k" />
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
        <h1 style="text-align: center">{{ form2.title }}</h1>
        <a-form-model-item label="甲方">
          <a-input readOnly v-model="form2.a" />
        </a-form-model-item>
        <a-form-model-item label="乙方">
          <a-input readOnly v-model="form2.b" />
        </a-form-model-item>
        <a-form-model-item label="工程名称">
          <a-input readOnly v-model="form2.c" />
        </a-form-model-item>
        <a-form-model-item label="工程地点">
          <a-input readOnly v-model="form2.d" />
        </a-form-model-item>
        <a-form-model-item label="采购日期">
          <a-input readOnly v-model="form2.e" />
        </a-form-model-item>
        <a-form-model-item label="采购数量">
          <a-input readOnly v-model="form2.f" />
        </a-form-model-item>
        <a-form-model-item label="每平方工程包价">
          <a-textarea readOnly v-model="form2.g" />
        </a-form-model-item>
        <a-form-model-item label="付款方式">
          <a-textarea readOnly v-model="form2.h" />
        </a-form-model-item>
        <a-form-model-item label="甲方责任">
          <a-textarea readOnly v-model="form2.i" />
        </a-form-model-item>
        <a-form-model-item label="乙方责任">
          <a-textarea readOnly v-model="form2.j" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 2" type="primary" @click="currentI++"
          >下一步<a-icon type="right" />
        </a-button>
      </a-button-group>
    </div>
    <div class="upload-container">
      <!-- <p v-if="fileList.length === 0" style="margin-top: 20px">暂无文件</p> -->
      <h2>上传文件列表</h2>
      <a-tabs  default-active-key="1">
        <a-tab-pane key="1" tab="单文件列表">
          <div class="file-item">
            <span
              >珠海供排水管网有限公司针对供水工程项目混凝土材料采购项目合同书</span
            >
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>混泥土采购甲方签字</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>混泥土采购乙方签字</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>珠海供排水管网有限公司针对臭氧催化剂采购项目合同书</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>臭氧催化剂采购甲方签字</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>臭氧催化剂采购乙方签字</span>
            <a @click.prevent>下载</a>
          </div>
        </a-tab-pane>
      </a-tabs>
      <!-- <div class="test">
        <a-list size="small" :data-source="fileList">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta :description="item.createAt">
              <span slot="title">{{ item.fileName }}</span>
            </a-list-item-meta>
            <a style="margin-right: 2em" @click.prevent>下載</a>
          </a-list-item>
        </a-list>
      </div> -->
    </div>

    <div class="auditor">
      <h2>审核人</h2>
      <a-list item-layout="horizontal" :data-source="fff">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta description="待审核">
            <a slot="title" 
              >{{ item.title }}（{{ item.dev }}）</a
            >
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fff: [
        {
          title: "甄以惠",
          dev: "办公室",
        },
        {
          title: "钟北",
          dev: "财务部",
        },
        {
          title: "陈辉",
          dev: "财务部",
        },
        {
          title: "钟源",
          dev: "办公室",
        },
      ],
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
        {
          key: "8",
          title: "后评价",
        },
      ],
      form1: {
        title: "珠海供排水管网有限公司针对供水工程项目混凝土材料采购项目",
        a: "珠海市水务集团",
        b: "珠海市振业混凝土有限公司",
        c: "珠海供排水管网有限公司针对供水工程项目混凝土材料采购项目。",
        d: "珠海市香洲区梅华东路338号",
        e: "给定的施工范围内自机械挖土工人配合清土开始到竣工。",
        f: "二零二一年四月一日",
        g: "八千四百九十七平方米",
        h: "每平方米四十三元",
        i: "合同签订后付款65%，交工后付款至90%，余款一年内付清",
        j:
          "每个单位工程向乙方提供相关说明书，并进行说明书交流，如有变更应在第一时间通知乙方，避免不应该的损失。负责施工地址的各项管理工作",
        k:
          "服从甲方管理人员指挥，遵守施工现场一切规章制度。甲方提出的整改需求必须按时完成。上报施工人员名单，包括各种资质证件。",
      },
      form2: {
        title: "珠海供排水管网有限公司针对臭氧催化剂采购项目",
        a: "珠海市水务集团",
        b: "广州市华绿环保科技有限公司",
        c: "珠海供排水管网有限公司针对臭氧催化剂采购项目",
        d: "珠海市香洲区梅华东路338号",
        e: "二零二一年四月三日",
        f: "六千四百吨",
        g: "每吨六百元",
        h: "合同签订后付款65%，交工后付款至90%，余款一年内付清",
        i:
          "每个单位工程向乙方提供相关说明书，并进行说明书交流，如有变更应在第一时间通知乙方，避免不应该的损失。",
        j:
          "服从甲方管理人员指挥，遵守施工现场一切规章制度。甲方提出的整改需求必须按时完成。",
      },
      form3: {
        title: "地表水源论证表",
        a:
          "降水主要集中在4-8月，占全年降水总量的74.8%。地表水资源量19.88亿立方米，地下水资源量2.39亿立方米，水资源总量20.41亿立方米，人均水资源量1009立方米。",
        b: "人均综合用水量294立方米",
        c:
          "水质情况较好，汛期，非汛期，全年皆到《地表水环境质量标准》（GB3838-2019）III类水标准",
      },
      form4: {
        title: "项目影响表",
        a: "在局部地区对取浅层地下水的用户产生部分影响",
        b: "用水影响较少，一定程度上提高了水资源的复用率",
        c: "对野生动物及植物无任何影响",
      },
      currentI: 1,
      fileList: [],
      defaultFileList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
   padding-bottom: 1em;
}
.upload-container {
  border-top: 1px solid #ddd;
  padding: 20px;
  ::v-deep .ant-tabs-tabpane.ant-tabs-tabpane-active {
    display: flex;
    flex-wrap: wrap;
  }
  .file-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.file-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auditor {
  border-top: 1px solid #ddd;
  padding: 20px;
}

.test {
  max-height: 300px;
  overflow: auto;
}
</style>