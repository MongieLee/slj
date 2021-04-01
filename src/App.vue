<template>
  <a-config-provider :locale="local">
    <router-view></router-view>
  </a-config-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      local: zhCN,
    };
  },
};
</script>
<style>
</style>