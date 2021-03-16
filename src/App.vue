<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      style="height: 100vh"
      collapsible
    >
      <div class="logo" />
      <a-menu
        theme="dark"
        @click="test"
        mode="inline"
        :default-selected-keys="['1']"
      >
        <a-menu-item key="xmk">
          <a-icon type="project" />
          <span>项目库</span>
        </a-menu-item>
        <a-menu-item key="tjgc">
          <a-icon type="profile" />
          <span>土建工程</span>
        </a-menu-item>
        <a-menu-item key="gysk">
          <a-icon type="bank" />
          <span>供应商库</span>
        </a-menu-item>
        <a-menu-item key="lcgl">
          <a-icon type="apartment" />
          <span>流程管理</span>
        </a-menu-item>
        <a-menu-item key="jdcx">
          <a-icon type="file-search" />
          <span>进度查询</span>
        </a-menu-item>
        <a-menu-item key="gcjd">
          <a-icon type="heat-map" />
          <span>工程进度</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    test(e) {
      console.log(e);
      this.$router.push(e.key);
    },
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
}
</style>