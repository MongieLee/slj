<template>
  <div class="project-content">
    <template v-for="(item, index) in x">
      <template v-if="item.key === 'form'">
        <MyForm :key="index" />
      </template>
      <template v-if="item.key === 'file'">
        <File :key="index" />
      </template>
      <template v-if="item.key === 'user'">
        <User :key="index" />
      </template>
    </template>
  </div>
</template>

<script>
import File from "./component/file";
import User from "./component/user.vue";
import MyForm from "./component/form.vue";
export default {
  components: {
    File,
    User,
    MyForm,
  },
  created() {
    console.log(this.$route);
  },
  // props: ["x"],
  data() {
    return {
      x: [
        { key: "form", has: true },
        { key: "file", has: true },
        { key: "user", has: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>