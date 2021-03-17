<template>
  <div class="container">
    <div class="tree">
      <a-tree
        show-line
        :default-expanded-keys="['project-tj']"
        @select="onSelect"
        :defaultSelectedKeys="['project']"
      >
        <a-icon slot="switcherIcon" type="down" />
        <a-tree-node key="project" title="项目模板组">
          <a-tree-node key="project-tj" title="土建项目模板">
            <a-tree-node key="project-tj-01" title="项目立项论证" />
            <a-tree-node key="project-tj-02" title="招标采购" />
            <a-tree-node key="project-tj-03" title="合同签订" />
            <a-tree-node key="project-tj-04" title="资料管理" />
            <a-tree-node key="project-tj-05" title="现场管理" />
            <a-tree-node key="project-tj-06" title="安全检查" />
            <a-tree-node key="project-tj-07" title="整改验收" />
            <a-tree-node key="project-tj-08" title="后评价" />
          </a-tree-node>
          <a-tree-node key="0-0-2" title="抢修项目模板"> </a-tree-node>
        </a-tree-node>
      </a-tree>
    </div>
    <div class="project-content">
      <F />
      <File />
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../../components/projectLibrary/form";
import File from "../../components/projectLibrary/file";
import F from "../../components/projectLibrary/first";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  components: { Form, File, F },
  methods: {
    onSelect(selectedKeys, info) {
      console.log("selected", selectedKeys, info);
    },
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  .tree {
    width: 180px;
    border-right: 1px solid #ccc;
  }
  .project-content {
    flex-grow: 1;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    > div {
      height: 32%;
      overflow: auto;
      &:not(:first) {
        margin-top: 2%;
      }
    }
  }
}
</style>