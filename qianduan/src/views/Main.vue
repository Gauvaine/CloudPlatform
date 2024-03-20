<template>
    <div class="common-layout">
      <el-container>
        <common-header />
        <el-main>
            <router-view />
        </el-main>
      </el-container>
    </div>
  </template>

<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
export default defineComponent({
  components: {
    CommonHeader,
  },
});
</script>


<style lang="less" scoped>
.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
}
.el-main {
    background-color: rgb(172, 214, 248);
}
</style>
