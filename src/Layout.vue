<template>
  <a-config-provider :locale="local">
    <a-layout style="height: 100%" id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        style="height: 100vh"
        collapsible
      >
        <div class="logo">演示</div>
        <a-menu
          theme="dark"
          @click="test"
          mode="inline"
          :default-selected-keys="[hightLineKey]"
        >
          <a-menu-item key="xmk">
            <a-icon type="project" />
            <span>项目库</span>
          </a-menu-item>
          <a-menu-item key="lcgl">
            <a-icon type="apartment" />
            <span>流程管理</span>
          </a-menu-item>
          <!-- <a-menu-item key="tjgc">
            <a-icon type="profile" />
            <span>土建工程</span>
          </a-menu-item> -->
          <a-sub-menu key="">
            <span slot="title"
              ><a-icon type="profile" /><span>项目管理</span></span
            >
            <a-menu-item key="tjgc">土建工程</a-menu-item>
            <!-- <a-menu-item key="gcjs">工程建设</a-menu-item> -->
          </a-sub-menu>
          <a-menu-item key="hzf">
            <a-icon type="bank" />
            <span>合作方</span>
          </a-menu-item>
          <a-menu-item key="jdcx">
            <a-icon type="file-search" />
            <span>进度查询</span>
          </a-menu-item>
          <a-menu-item key="gcjd">
            <a-icon type="heat-map" />
            <span>工程进度</span>
          </a-menu-item>
          <a-sub-menu key="system">
            <span slot="title"><a-icon type="bug" /><span>系统管理</span></span>
            <a-menu-item key="yhgl">用户管理</a-menu-item>
            <!-- <a-menu-item key="gcjs">工程建设</a-menu-item> -->
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          style="
            background: #fff;
            padding: 0 20px 0 0;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items:center;
          "
        >
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-button @click="$router.push('/login')" ghost type="danger"
            >注销</a-button
          >
        </a-layout-header>
        <a-layout-content
          :style="{
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      hightLineKey: "",
      collapsed: false,
      local: zhCN,
    };
  },
  methods: {
    test(e) {
      console.log(e);
      this.$router.push(`/${e.key}`);
    },
  },
  created() {
    const href = window.location.hash.replace("#/", "");
    this.hightLineKey =
      href.indexOf("/") === -1 ? href : href.substr(0, href.indexOf("/"));
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: white;
  line-height: 32px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 0.5em;
}
</style>