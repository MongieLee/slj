<template>
  <div class="container1">
    <form>
      <a-form-model
        :model="form1"
        v-show="currentI === 1"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <h1 style="text-align: center">{{ form1.title }}</h1>
        <a-form-model-item label="招标编号">
          <a-input readOnly v-model="form1.a" />
        </a-form-model-item>
        <a-form-model-item label="项目名称">
          <a-input readOnly v-model="form1.b" />
        </a-form-model-item>
        <a-form-model-item label="服务期限">
          <a-input readOnly v-model="form1.c" />
        </a-form-model-item>
        <a-form-model-item label="预算金额">
          <a-input readOnly v-model="form1.d" />
        </a-form-model-item>
        <a-form-model-item label="最高投标限价">
          <a-textarea readOnly v-model="form1.e" />
        </a-form-model-item>
        <a-form-model-item label="投标保证金">
          <a-input readOnly v-model="form1.f" />
        </a-form-model-item>
        <a-form-model-item label="招标文件售价">
          <a-input readOnly v-model="form1.g" />
        </a-form-model-item>
        <a-form-model-item label="购买招标文件时间">
          <a-textarea readOnly v-model="form1.h" />
        </a-form-model-item>
        <a-form-model-item label="购买招标文件地点">
          <a-textarea readOnly v-model="form1.i" />
        </a-form-model-item>
        <a-form-model-item label="网上报名时间">
          <a-input readOnly v-model="form1.j" />
        </a-form-model-item>
        <a-form-model-item label="投标截止时间">
          <a-textarea readOnly v-model="form1.k" />
        </a-form-model-item>
        <a-form-model-item label="开标时间">
          <a-textarea readOnly v-model="form1.l" />
        </a-form-model-item>
        <a-form-model-item label="联系人">
          <a-input readOnly v-model="form1.m" />
        </a-form-model-item>
        <a-form-model-item label="联系地址">
          <a-textarea readOnly v-model="form1.n" />
        </a-form-model-item>
        <a-form-model-item label="招标人">
          <a-input readOnly v-model="form1.o" />
        </a-form-model-item>
        <a-form-model-item label="联系电话">
          <a-input readOnly v-model="form1.p" />
        </a-form-model-item>
        <a-form-model-item label="传真">
          <a-input readOnly v-model="form1.q" />
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
        <a-form-model-item label="招标编号">
          <a-input readOnly v-model="form2.a" />
        </a-form-model-item>
        <a-form-model-item label="项目名称">
          <a-input readOnly v-model="form2.b" />
        </a-form-model-item>
        <a-form-model-item label="预算金额">
          <a-input readOnly v-model="form2.c" />
        </a-form-model-item>
        <a-form-model-item label="数量">
          <a-input readOnly v-model="form2.d" />
        </a-form-model-item>
        <a-form-model-item label="最高投标限价">
          <a-textarea readOnly v-model="form2.e" />
        </a-form-model-item>
        <a-form-model-item label="投标保证金">
          <a-input readOnly v-model="form2.f" />
        </a-form-model-item>
        <a-form-model-item label="资金来源及到位情况">
          <a-input readOnly v-model="form2.g" />
        </a-form-model-item>
        <a-form-model-item label="购买招标文件时间">
          <a-textarea readOnly v-model="form2.h" />
        </a-form-model-item>
        <a-form-model-item label="网上报名时间">
          <a-input readOnly v-model="form2.j" />
        </a-form-model-item>
        <a-form-model-item label="购买招标文件地点">
          <a-textarea readOnly v-model="form2.i" />
        </a-form-model-item>
        <a-form-model-item label="投标截止时间">
          <a-textarea readOnly v-model="form2.k" />
        </a-form-model-item>
        <a-form-model-item label="开标时间">
          <a-textarea readOnly v-model="form2.l" />
        </a-form-model-item>
        <a-form-model-item label="联系人">
          <a-input readOnly v-model="form2.m" />
        </a-form-model-item>
        <a-form-model-item label="联系地址">
          <a-textarea readOnly v-model="form2.n" />
        </a-form-model-item>
        <a-form-model-item label="招标人">
          <a-input readOnly v-model="form2.o" />
        </a-form-model-item>
        <a-form-model-item label="传真">
          <a-input readOnly v-model="form2.p" />
        </a-form-model-item>
        <a-form-model-item label="联系电话">
          <a-input readOnly v-model="form2.q" />
        </a-form-model-item>
      </a-form-model>
    </form>

    <div class="button-group">
      <a-button-group>
        <a-button v-show="currentI !== 1" type="primary" @click="currentI--"
          ><a-icon type="left" />上一步</a-button
        >
        <a-button v-show="currentI !== 2" type="primary" @click="currentI++"
          >下一步<a-icon type="right" />
        </a-button>
      </a-button-group>
    </div>
    <div class="upload-container">
      <p v-if="fileList.length === 0" style="margin-top: 20px">暂无文件</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        title: "混泥土采购项目表",
        a: "2100135C",
        b: "珠海供排水管网有限公司针对供水工程项目混凝土材料采购项目。",
        c: "合同有效期为一年",
        d: "人民币伍佰万元整（¥5,000,000.00）",
        e:
          "人民币伍佰万元整（¥5,000,000.00），投标人报价超出相应限价的为无效报价。",
        f: "人民币壹拾万元整(小写：¥100,000.00)。",
        g: "人民币300元/套，（邮寄另加人民币50元）。招标文件售后不退。",
        h:
          "自2021年3月16日起至2021年3月24日止，每天09:00-12:00，14:30-17:30（节假日除外）。",
        i: "自2021年3月16日09:00起至2021年4月7日10:00止。",
        j: "珠海市物资招标有限公司（珠海市吉大石花西路林海大厦2楼）。",
        k: "2021年4月7日10:00（北京时间）。",
        l:
          "2021年4月7日10:00（北京时间）。于截止时间前30分钟开始接收投标文件，提前、逾期递交或不符合规定的投标文件恕不接受。届时请参加投标的代表出席开标仪式。",
        m: "岳志明",
        n: "珠海市香洲区梅华东路338号 邮编：519000",
        o: "珠海水务环境控股集团有限公司",
        p: "0756-8132269",
        q: "0756-8132748",
      },
      form2: {
        title: "臭氧催化剂采购项目表",
        a: "2000358C",
        b: "珠海市城市排水有限公司针对供水工程项目臭氧催化剂采购项目。",
        c: "人民币陆佰壹拾玖万贰仟元整（小写：¥6,192,000.00元）。",
        d: "344m³，数量仅作为本次招标评审使用",
        e: "人民币陆佰壹拾玖万贰仟元整（小写：¥6,192,000.00元）",
        f: "人民币壹拾贰万元整（小写：¥120,000.00元）。",
        g: "企业自筹",
        h: "人民币300元/套，邮寄另加人民币50元，招标文件售后不退。",
        i:
          "自2020年 10 月 23 日起至2020年 11月 2 日止，每天8:30-12:00，14:30-17:30（节假日除外）。",
        j: "珠海市香洲区兴华路113号5楼B区（广东华禹工程咨询有限公司）。",
        k: "2020年 11 月 13 日 9 : 30 （北京时间）。",
        l: "2020年 11 月 13 日 9 : 30 （北京时间）。",
        m: "岳志明",
        n: "珠海市香洲区梅华东路338号 邮编：519000",
        o: "珠海水务环境控股集团有限公司",
        p: "0756-8132269",
        q: "0756-8132748",
      },
      currentI: 1,
      fileList: [],
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
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding: 20px 270px;
}
</style>