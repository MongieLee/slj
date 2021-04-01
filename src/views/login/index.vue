<template>
  <div class="container">
    <div class="form-wrapper">
      <h2 style="text-align: center">水务集团管理系统</h2>
      <a-form-model
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="账户">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  /* background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yipic.cn%2Fthumb%2F20069ed6%2F63c278bb%2F88fe6c5e%2Fadd9e30c%2Fbig_20069ed663c278bb88fe6c5eadd9e30c.png&refer=http%3A%2F%2Fimg.yipic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619836538&t=7ed529329db14cff045fdd4a2ca671f0"); */
  background-image: url("../../assets/bg2.png");
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-wrapper {
    width: 500px;
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 2px 1.5px 2px 1px rgba(0, 0, 0, 0.7);
  }
}
</style>