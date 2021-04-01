<template>
  <div class="container1">
    <form class="form-wrapper">
      <a-form-model
        :model="form1"
        v-show="currentI === 1"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <h1 style="text-align: center">{{ form1.title }}</h1>
        <a-form-model-item label="项目名称">
          <a-input readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="项目性质">
          <a-input readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="建设地点">
          <a-textarea readOnly v-model="form1.c" />
        </a-form-model-item>
        <a-form-model-item label="占地面积">
          <a-textarea readOnly v-model="form1.d" />
        </a-form-model-item>
        <a-form-model-item label="建设规模">
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
        <a-form-model-item label="自然地理">
          <a-textarea readOnly v-model="form2.a" />
        </a-form-model-item>
        <a-form-model-item label="气候特征">
          <a-textarea readOnly v-model="form2.b" />
        </a-form-model-item>
        <a-form-model-item label="水资源情况">
          <a-textarea readOnly v-model="form2.c" />
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
        <a-form-model-item label="来水量分析">
          <a-textarea readOnly v-model="form3.a" />
        </a-form-model-item>
        <a-form-model-item label="用水量分析">
          <a-textarea readOnly v-model="form3.b" />
        </a-form-model-item>
        <a-form-model-item label="水质量评价">
          <a-textarea readOnly v-model="form3.c" />
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
        <a-form-model-item label="取水影响">
          <a-textarea readOnly v-model="form4.a" />
        </a-form-model-item>
        <a-form-model-item label="退水影响">
          <a-textarea readOnly v-model="form4.b" />
        </a-form-model-item>
        <a-form-model-item label="生态影响">
          <a-textarea readOnly v-model="form4.c" />
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
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="单文件列表">
          <div class="file-item">
            <span>实施意见</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>取用水方案</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>退水方案</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>水资源利用分析</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>可靠性分析</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>可供水量分析</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>取水分析</span>
            <a @click.prevent>下载</a>
          </div>
          <div class="file-item">
            <span>取水分析</span>
            <a @click.prevent>退水分析</a>
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
            <a slot="title">{{ item.title }}（{{ item.dev }}）</a>
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
          title: "岳志敏",
          dev: "技术信息部",
        },
        {
          title: "张亦天",
          dev: "办公室",
        },
        {
          title: "陈辉",
          dev: "办公室",
        },
      ],
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
        title: "建设项目概况表",
        a: "广东省珠海市斗门区供水工程",
        b: "新建",
        c: "两个地下水水源地分别位于斗门区尖峰山和白郊区东北",
        d:
          "净水厂占地面积 15000m2;污水处理厂占地87000m 。净水厂和污水处理厂的建设需要征用土地102000 m2。",
        e: "该项目计划总投资金额3685.95万元",
      },
      form2: {
        title: "开发利用分析表",
        a:
          "珠海市斗门区有低山、丘陵、台地、广泛沉积平原和仍在发育的滩涂。故呈现平中有凸，凸中有平和平中有凹的明显层状地貌",
        b: "南亚热带与热带过度型海洋性气候",
        c:
          "淡水供水以地表水为主，其供水量占供水总量的99.9%以上，其中提水、引水和蓄水供水量分别占供水总量的72.1%、17.3%和10.4%。",
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