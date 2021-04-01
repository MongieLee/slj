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
        <a-form-model-item label="一">
          <a-textarea readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="二">
          <a-textarea readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="三">
          <a-textarea readOnly v-model="form1.c" />
        </a-form-model-item>
        <a-form-model-item label="四">
          <a-textarea readOnly v-model="form1.d" /> </a-form-model-item
        ><a-form-model-item label="五">
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
        <a-form-model-item label="八">
          <a-textarea readOnly v-model="form2.h" />
        </a-form-model-item>
        <a-form-model-item label="九">
          <a-textarea readOnly v-model="form2.i" />
        </a-form-model-item>
        <a-form-model-item label="十">
          <a-textarea readOnly v-model="form2.j" />
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
        <a-form-model-item label="一">
          <a-textarea readOnly v-model="form4.a" />
        </a-form-model-item>
        <a-form-model-item label="二">
          <a-textarea readOnly v-model="form4.b" />
        </a-form-model-item>
        <a-form-model-item label="三">
          <a-textarea readOnly v-model="form4.c" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <form>
      <a-form-model
        v-show="currentI === 5"
        :form="form5"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <h1 style="text-align: center">{{ form5.title }}</h1>
        <a-form-model-item label="一">
          <a-textarea readOnly v-model="form5.a" />
        </a-form-model-item>
        <a-form-model-item label="二">
          <a-textarea readOnly v-model="form5.b" />
        </a-form-model-item>
        <a-form-model-item label="三">
          <a-textarea readOnly v-model="form5.c" />
        </a-form-model-item>
        <a-form-model-item label="四">
          <a-textarea readOnly v-model="form5.d" />
        </a-form-model-item>
        <a-form-model-item label="五">
          <a-textarea readOnly v-model="form5.e" />
        </a-form-model-item>
        <a-form-model-item label="六">
          <a-textarea readOnly v-model="form5.f" />
        </a-form-model-item>
        <a-form-model-item label="七">
          <a-textarea readOnly v-model="form5.g" />
        </a-form-model-item>
        <a-form-model-item label="八">
          <a-textarea readOnly v-model="form5.h" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <form>
      <a-form-model
        v-show="currentI === 6"
        :form="form6"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <h1 style="text-align: center">{{ form6.title }}</h1>
        <a-form-model-item label="一">
          <a-textarea readOnly v-model="form6.a" />
        </a-form-model-item>
        <a-form-model-item label="二">
          <a-textarea readOnly v-model="form6.b" />
        </a-form-model-item>
        <a-form-model-item label="三">
          <a-textarea readOnly v-model="form6.c" />
        </a-form-model-item>
        <a-form-model-item label="四">
          <a-textarea readOnly v-model="form6.d" />
        </a-form-model-item>
        <a-form-model-item label="五">
          <a-textarea readOnly v-model="form6.e" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 6" type="primary" @click="currentI++"
          >下一步<a-icon type="right" />
        </a-button>
      </a-button-group>
    </div>
    <div class="upload-container">
      <!-- <p v-if="fileList.length === 0" style="margin-top: 20px">暂无文件</p> -->
      <h2>上传文件列表</h2>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="单文件列表">
          <div class="file-item">
            <span>特种设备安全检查条例</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>建设项目安全设施“三同时”监督管理办法</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>建设项目安全生产管理条例</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>危险化学品安全管理条例</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>特种设备注册等级与使用管理规则</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>特种作业人员安全技术培训考核管理规定</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>特种设备作业人员监督管理办法</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>用人单位劳动防护用品管理规范</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>安全生产培训历办法</span>
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
        title: "管理要求表",
        a: "现场布置合理，有项目管理标牌、安全警示标志和项目责任人。",
        b: "有专职的安全员，有班前会记录和安全检查记录。",
        c: "危险作业必须有安全措施和安全责任人。",
        d: "定期开展安全活动，且必须做好记录。",
        e: "对事故隐患登记并限期整改。",
      },
      form2: {
        title: "人员要求表",
        a: "穿戴好劳保用品，正确使用防护工具。",
        b: "工作期间，不准穿拖鞋、高跟鞋或赤脚，不准做与工作无关的事情。",
        c: "特殊工种必须持证上岗。",
        d: "不准任意拆卸和挪动各种防护装置、设施、标志。",
        e: "不准酒后上班，不准爬车、跳车、强行搭车及拦车。",
        f: "在禁止烟火的区域不准吸烟、动用明火等。",
        g: "在工作区域若需动火作业，必须开具动火工作证。",
        h: "非施工人员和无关人员不得进入作业现场。",
        i: "在指定区域内工作，不得进入无关区域。",
        j: "做指定的工作，不得误碰设备或动无关设备。",
      },
      form3: {
        title: "施工现场表",
        a: "材料堆放整齐、稳固，工具器摆放有序，垃圾分类堆放并及时处理。",
        b: "工停时应对场地进行清理，工作完成后应彻底清理场地。",
        c: "保持有允足的照明。",
        d: "夏季应有防暑措施，冬季应有防冻措施。",
      },
      form4: {
        title: "危险作业区表",
        a: "边坡、临空面、临水面等边缘必须设有栏杆或明显的警告标志。",
        b: "对孔口等应设放护围栏或加盖板，并要有明显的警告标志。",
        c: "对多层作业应有隔离防护措施并有专人负责监护。",
      },
      form5: {
        title: "安全装置表",
        a: "升降葫芦有保险卡",
        b: "升降吊篮有保险绳",
        c: "两片吊篮同时升降有同步装置",
        d: "作业层上满铺脚手板",
        e: "脚手板材质符合要求",
        f: "无探头脚手板",
        g: "施工荷载不超过限载要求",
        h: "荷载堆放均匀",
      },
      form6: {
        title: "验收登记表",
        a: "脚手架外侧使用密目式安全网进行封闭",
        b: "施工层设1.2m高的防护栏杆，并设18cm高的挡脚板",
        c: "安装固定完毕进行检查验收，并有记录",
        d: "对作业人员进行交底，并有记录",
        e: "经机械检测合格,并取得机械检测合格证书",
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