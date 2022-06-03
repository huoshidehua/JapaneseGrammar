<template>
  <van-sticky :offset-top="0">
    <div
      style="
        display: flex;
        justify-content: space-around;
        background: white;
        padding: 10px;
      "
    >
      <van-button icon="setting-o" type="primary" @click="show = true" />
      <van-button icon="replay" type="success" @click="getGrammars" />
    </div>
  </van-sticky>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    style="text-align: left"
  >
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      size="large"
      @click="grammarClick(item)"
    >
      <template #title>
        <span style="color: blue">{{ item.use }}</span>
        <span style="color: black; font-weight: bold">{{ item.grammar }}</span>
      </template>
    </van-cell>
  </van-list>
  <!-- 弹出设置窗口 -->
  <van-popup
    v-model:show="show"
    closeable
    round
    position="left"
    :style="{ height: '100%', width: '90%' }"
  >
    <div style="padding: 20px">
      <!-- 等级 -->
      <van-radio-group v-model="setting.level" direction="horizontal">
        <van-radio name="N1">N1</van-radio>
        <van-radio name="N2">N2</van-radio>
        <van-radio name="N3">N3</van-radio>
        <van-radio name="N4">N4</van-radio>
        <van-radio name="N5">N5</van-radio>
      </van-radio-group>
      <!-- 个数 -->
      <van-field name="stepper" label="个数">
        <template #input>
          <van-stepper v-model="setting.count" />
        </template>
      </van-field>
    </div>
  </van-popup>
  <!-- 弹出翻译窗口 -->
  <van-popup v-model:show="showDetail" :style="{ height: '50%', width: '90%' }">
    <h4 v-text="detail.mean"></h4>
    <h5
      v-text="'举例:' + detail.example"
      style="text-align: left; padding: 10px 2px"
    ></h5>
    <h5
      v-text="'翻译:' + detail.translate"
      style="text-align: left; padding: 10px 2px; color: orange"
    ></h5>
  </van-popup>
</template>

<script>
import { ref } from "vue";
import n2data from "@/assets/N2.json";
export default {
  name: "App",
  components: {
    // HelloWorld: HelloWorldVue,
  },
  setup(props) {
    const show = ref(false);
    const showDetail = ref(false);
    const detail = ref({ mean: "", example: "" });
    const loading = ref(false);
    const finished = ref(true);
    const setting = ref({ level: "N2", count: 10 });
    const list = ref([]);

    const getGrammars = async () => {
      loading.value = true;
      finished.value = false;
      let set = new Set();
      while (set.size < setting.value.count) {
        // 随机数
        var index = Math.floor(Math.random() * n2data.length);
        set.add(n2data[index]);
      }
      list.value = set;
      loading.value = false;
      finished.value = true;
    };

    // 点击详细
    const grammarClick = async (item) => {
      detail.value = item;
      showDetail.value = true;
    };

    return {
      show,
      setting,
      list,
      loading,
      finished,
      getGrammars,
      showDetail,
      detail,
      grammarClick,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 10px; */
}
</style>
