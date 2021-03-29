<template>
  <div class="container">
    <div class="sider-tree">
      <G6Demo :data="data" :hightLight="list[heihei - 1].title" />
    </div>
    <div class="tabs-wrapper">
      <a-tabs
        @change="tabsChange"
        :tabBarStyle="{ marginBottom: 0 }"
        :default-active-key="heihei ? heihei : 1"
      >
        <a-tab-pane v-for="i in list" :key="i.key" :tab="`${i.title}`">
          <!-- <router-view></router-view> -->
        </a-tab-pane>
      </a-tabs>
      <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />
    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240); margin-bottom: 1em"
        title="查看项目"
        @back="$router.push('/tjgc')"
      />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import G6Demo from "../../components/G6/Demo.vue";
import G6Demo from "../../components/G6/Demo2.vue";
import getData from "../../components/G6/data";

export default {
  components: { G6Demo },
  name: "G6StaticDemo",
  order: 2,
  created() {
    console.log(this.$route.path.substr(this.$route.path.length - 1, 1));
    this.heihei = this.$route.path.substr(this.$route.path.length - 1, 1);
  },
  data() {
    return {
      data: getData(),
      heihei: null,
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
      fileList: [],
      defaultFileList: [],
    };
  },
  methods: {
    handleSubmit() {},
    tabsChange(e) {
      console.log(e);
      this.heihei = e;
      this.$router.push(`/tjgc/detail/${e}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  .sider-tree {
    width: 380px;
    height: 100%;
  }
  .tabs-wrapper {
    flex-grow: 1;
    height: 100%;
    overflow: auto;
  }
  /* .ant-tabs.ant-tabs-top.ant-tabs-line {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  } */
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
}
/* .ant-tabs-content {
  border: 1px solid red !important;
} */
</style>