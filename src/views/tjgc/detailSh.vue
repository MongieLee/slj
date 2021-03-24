<template>
  <div class="wrapper">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 1em"
      title="审核项目"
      @back="$router.back()"
    />

           <form>
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
            <a-form-model-item label="公司名称">
              <a-textarea readOnly v-model="form4.a" />
            </a-form-model-item>
            <a-form-model-item label="证件是否齐全">
              <a-textarea readOnly v-model="form4.b" />
            </a-form-model-item>
            <a-form-model-item label="经办人">
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
        <a-button
          v-show="currentI === 4"
          @click="qq"
          type="primary"
          ghost
          style="margin-left: 2em"
          >同意</a-button
        >
        <a-button
          v-show="currentI === 4"
          @click="ww"
          type="primary"
          ghost
          style="margin-left: 2em"
          >拒绝</a-button
        >
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
        a: "降水主要集中在4-8月，占全年降水总量的74.8%。地表水资源量19.88亿立方米，地下水资源量2.39亿立方米，水资源总量20.41亿立方米，人均水资源量1009立方米。",
        b: "人均综合用水量294立方米",
        c: "水质情况较好，汛期，非汛期，全年皆到《地表水环境质量标准》（GB3838-2019）III类水标准",
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
  methods: {
    handleSubmit() {},
    ww() {
      const _this = this;
      this.$confirm({
        title: "二次确认",
        content: () => <div style="color:red;">确定驳回审核吗?</div>,
        onOk() {
          _this.$router.push("/tjgc");
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test",
      });
    },
    qq() {
      const _this = this;
      this.$confirm({
        title: "二次确认",
        content: () => <div style="color:red;">确定通过审核吗?</div>,
        onOk() {
          _this.$router.push("/tjgc");
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test",
      });
    },
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

}
</style>