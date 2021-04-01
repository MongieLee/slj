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
        <a-form-model-item label="项目意义">
          <a-textarea readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="项目影响">
          <a-textarea readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="项目评价">
          <a-textarea readOnly v-model="form1.c" />
        </a-form-model-item>
      </a-form-model>
    </form>

   
    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 1" type="primary" @click="currentI++"
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
            <span>广东省珠海市斗门区供水工程评价书</span>
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
        }
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
        title: "供水工程项目后评价",
        a: "各乡镇用水量呈逐年增加趋势，水量供需矛盾将更加突出。建成此项目，既能补偿灌溉用水，增加高产稳产农田面积，实现粮食增产增收，又能大幅度提高水库下游沿岸村镇和农田防洪标准，确保下游不受水患。同时蓄水后由于水位的抬高，可改变现状下游部分提水灌溉为自流灌溉。解决农田灌溉用水紧缺和消除洪涝旱灾，促进当地经济发展。",
        b: "近些年来，我国南方和东部湿润半湿润地区的旱情也在扩展和加重，目前旱灾发生的范围已经遍及全国。极端天气频繁出现，给城乡居民生活和工农业生产造成不同程度的影响，严重制约了我国社会经济的正常运行。建设抗旱应急保障水源是维持社会稳定、促进城乡可持续发展的基本要求和有力保障。",
        c: "项目完成后，通过水库的调蓄作用可使得下游河流长年保持基流以上的水深，对维护河道生态系统，居民用水起到有力的保障作用。更能为河道补充水源3万㎡，其中包括水东河、水便河、姑留河等3条河流。具有强劲的社会意义与经济意义。",
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