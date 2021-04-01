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
        <a-form-model-item label="施工单位">
          <a-textarea readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="施工单位负责人">
          <a-textarea readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="监理单位项目负责人">
          <a-textarea readOnly v-model="form1.c" />
        </a-form-model-item>
        <a-form-model-item label="工区施工管理处负责人">
          <a-textarea readOnly v-model="form1.d" />
        </a-form-model-item>
        <a-form-model-item label="工区工程质量监督站负责人">
          <a-textarea readOnly v-model="form1.e" />
        </a-form-model-item>
        <a-form-model-item label="工区负责人">
          <a-textarea readOnly v-model="form1.e" />
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
        <a-form-model-item label="一">
          <a-textarea readOnly v-model="form2.a" />
        </a-form-model-item>
        <a-form-model-item label="二">
          <a-textarea readOnly v-model="form2.b" />
        </a-form-model-item>
        <a-form-model-item label="三">
          <a-textarea readOnly v-model="form2.c" />
        </a-form-model-item>
        <a-form-model-item label="四">
          <a-textarea readOnly v-model="form2.d" />
        </a-form-model-item>
        <a-form-model-item label="五">
          <a-textarea readOnly v-model="form2.e" />
        </a-form-model-item>
        <a-form-model-item label="六">
          <a-textarea readOnly v-model="form2.f" />
        </a-form-model-item>
        <a-form-model-item label="七">
          <a-textarea readOnly v-model="form2.g" />
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
        <h1 style="text-align: center">{{ form3.title }}</h1>
        <a-form-model-item label="一">
          <a-textarea readOnly v-model="form3.a" />
        </a-form-model-item>
        <a-form-model-item label="二">
          <a-textarea readOnly v-model="form3.b" />
        </a-form-model-item>
        <a-form-model-item label="三">
          <a-textarea readOnly v-model="form3.c" />
        </a-form-model-item>
        <a-form-model-item label="四">
          <a-textarea readOnly v-model="form3.d" />
        </a-form-model-item>
        <a-form-model-item label="五">
          <a-textarea readOnly v-model="form3.e" />
        </a-form-model-item>
        <a-form-model-item label="六">
          <a-textarea readOnly v-model="form3.f" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <form>
      <a-form-model
        v-show="currentI === 4"
        :form="form4"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <h1 style="text-align: center">{{ form4.title }}</h1>
        <a-form-model-item label="单项目名称">
          <a-textarea readOnly v-model="form4.a" />
        </a-form-model-item>
        <a-form-model-item label="验收通过日期">
          <a-textarea readOnly v-model="form4.b" />
        </a-form-model-item>
        <a-form-model-item label="验收情况">
          <a-textarea readOnly v-model="form4.c" />
        </a-form-model-item>
        <a-form-model-item label="验收内容">
          <a-textarea readOnly v-model="form4.d" />
        </a-form-model-item>
        <a-form-model-item label="验收单位">
          <a-textarea readOnly v-model="form4.e" />
        </a-form-model-item>
        <a-form-model-item label="验收合格日期">
          <a-textarea readOnly v-model="form4.f" />
        </a-form-model-item>
        <a-form-model-item label="工程状态">
          <a-textarea readOnly v-model="form4.g" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 4" type="primary" @click="currentI++"
          >下一步<a-icon type="right" />
        </a-button>
      </a-button-group>
    </div>
    <div class="upload-container">
      <!-- <p v-if="fileList.length === 0" style="margin-top: 20px">暂无文件</p> -->
      <h2>上传文件列表</h2>
      <a-tabs @change="callback" default-active-key="1">
        <a-tab-pane key="1" tab="单文件列表">
          <div class="file-item">
            <span>钢柱柱墩面漆粉刷要求</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>自攻螺丝涂刷防火材料要求</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>项目工程预验收整改落实情况表</span>
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
              >{{ item.title }}（办公室）</a
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
  methods: {
    handleInfiniteOnLoad() {},
    callback(key) {
      console.log(key);
      if (key === "1") {
        this.fileList = [
          {
            fileName: "施工人员考勤记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "施工人员考勤记录",
            createAt: "2020-10-04",
          },
        ];
      } else if (key === "2") {
        console.log("???");
        this.fileList = [
          {
            fileName: "针对三一重工SY75C-10小型液压挖掘机维护记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "针对搭建吊机位置选定会议纪要",
            createAt: "2020-10-02",
          },
          {
            fileName: "混泥土材料使用损耗记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "针对人员安全培训记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "各项目施工进度表",
            createAt: "2020-10-02",
          },
          {
            fileName: "针对施工人员张辉广打架斗殴处罚书",
            createAt: "2020-10-02",
          },
          {
            fileName: "对各项目中使用KL400钢筋记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "混泥土材料使用损耗记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "针对吊机施工人员安全培训记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "各项目施工进度表",
            createAt: "2020-10-02",
          },
          {
            fileName: "针对4月4日天鸽台风所做安全措施记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "混泥土材料使用损耗记录",
            createAt: "2020-10-02",
          },
          {
            fileName: "针对4月4日天鸽台风放假通知",
            createAt: "2020-10-02",
          },
          {
            fileName: "各项目施工进度表",
            createAt: "2020-10-02",
          },
        ];
      }
    },
  },
  data() {
    return {
      fff: [
        {
          title: "张志勇",
        },
        {
          title: "岳志明",
        },
        {
          title: "张轩",
        },
      ],
      currentKey: "1",
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
        title: "整改验收人员信息",
        a: "珠海市水务集团工程部",
        b: "陈坤",
        c: "高守",
        d: "冯邵",
        e: "陈勇",
        f: "张杰",
      },
      form2: {
        title: "整改意见",
        a: "个别钢柱柱墩表面面漆脱落",
        b: "变更增加部分自攻螺丝为刷防火涂料",
        c: "个别钢柱局部防火材料存在污染情况",
        d: "局部道面污染清理不彻底",
        e: "施工物资资料部分合格证书未标明原件存放位置",
        f: "工程电气设备保修资料未上传",
        g: "竣工图部分设计变更标注不明确",
        h: "非施工人员和无关人员不得进入作业现场。",
        i: "在指定区域内工作，不得进入无关区域。",
        j: "做指定的工作，不得误碰设备或动无关设备。",
      },
      form3: {
        title: "整改落实",
        a: "一、钢柱柱墩表面面漆已按要求重新粉刷",
        b: "屋面板变更增加部分自攻螺丝已按要求涂刷防火材料",
        c: "钢柱局部防火材料污染部分全部清楚干净并补刷防火材料",
        d: "局部污染物已安排专人清理",
        e: "资料已按规范要求编制整理，签字盖章齐全",
        f: "竣工图已按规范要求捋变更部位全部标注完毕",
      },
      form4: {
        title: "项目验收",
        a: "广东省珠海市斗门区供水工程",
        b: "二零二一年三月三十一日",
        c: "通过",
        d: "广东省珠海市斗门区供水工程各项内容",
        e: "珠海市水务集团",
        f: "二零二一年四月一日",
        g: "已完成",
      },
      currentI: 1,
      fileList: [
        {
          fileName: "施工人员考勤记录",
          createAt: "2020-10-02",
        },
        {
          fileName: "施工人员考勤记录",
          createAt: "2020-10-04",
        },
      ],
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