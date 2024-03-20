<template>
    <el-header>
        <div class="l-content">
            <el-button @click="clickMenu('/home')">首页</el-button>
            <el-button @click="clickMenu('/monitor')">实时监测</el-button>

        </div>
        <div class="m-content">
            <el-card>温室云平台</el-card>
            <!-- <span style="color: rgb(255, 255, 255) fontsize:30px;">温室云平台</span> -->
        </div>
        <div class="r-content">
            <el-button @click="clickMenu('/control')">远程控制</el-button>
            <el-button @click="clickMenu('/view')">数据展示</el-button>
            <el-button size="small">
                <span>退出</span>
            </el-button>

        </div>
    </el-header>
</template>

<script>

import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter();

        const clickMenu = (path) => {
            router.push(path);
        };

        return {
            clickMenu
        };
    }
}

</script>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #275d96;
}
</style>