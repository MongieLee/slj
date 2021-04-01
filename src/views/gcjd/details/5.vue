<template>
  <div>
    <div class="upload-container">
      <!-- <p v-if="fileList.length === 0" style="margin-top: 20px">暂无文件</p> -->
      <h2>上传文件列表</h2>
      <a-tabs @change="callback" default-active-key="1">
        <a-tab-pane key="1" tab="考勤记录"> </a-tab-pane>
        <a-tab-pane key="2" tab="其他"> </a-tab-pane>
      </a-tabs>
      <div class="test">
        <a-list size="small" :data-source="fileList">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta :description="item.createAt">
              <span slot="title">{{ item.fileName }}</span>
            </a-list-item-meta>
            <a style="margin-right: 2em" @click.prevent>下載</a>
          </a-list-item>
        </a-list>
      </div>
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
}
.upload-container {
  border-top: 1px solid #ddd;
  padding: 20px;
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