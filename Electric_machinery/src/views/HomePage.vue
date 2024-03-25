<template>
    <dv-full-screen-container>
        <dv-border-box-3>
            <div class="screen-body">
                <section class="screen-left">
                    <div>
                        <!-- 指标监测 -->
                        <div class="itemtitle"><span>▎ 实时数据监测</span></div>
                        <dv-decoration-2 :color="['#a4c1eb']" class="decoration" />
                        <Liveindex :socket="socket" />
                    </div>
                </section>
                <section class="screen-middle">
                    <div>
                        <!-- 仪表盘
                        <div class="itemtitle"><span>▎ 数据展示</span></div>
                        <dv-decoration-2 :color="['#a4c1eb']" class="decoration" /> -->
                        <Viewdata :socket="socket" />
                    </div>
                </section>
                <section class="screen-right">
                    <div>
                        <div class="itemtitle"><span>▎ 实时数据更新</span></div>
                        <dv-decoration-2 :color="['#a4c1eb']" class="decoration" />
                        <Newdata :socket="socket" />
                    </div>
                </section>
            </div>
        </dv-border-box-3>
    </dv-full-screen-container>


</template>

<script>
import Liveindex from "../components/Liveindex.vue";
import Viewdata from "../components/Viewdata.vue";
import Newdata from "../components/Newdata.vue";
import { ref, provide, onBeforeUnmount } from 'vue'

export default {
    components: {
        Liveindex,
        Viewdata,
        Newdata
    },
    setup() {
        const socket = ref(null);
        // 在组件初始化时建立 WebSocket 连接
        socket.value = new WebSocket('ws://1.92.106.62:8001/');
        // 在组件销毁时关闭 WebSocket 连接
        onBeforeUnmount(() => {
            socket.value.close();
        });
        // 提供 WebSocket 对象给子组件
        provide('socket', socket.value);
        return {
            socket
        };
    }
};
</script>

<style lang="less" scoped>
// 全屏样式的定义
#dv-full-screen-container {
    background-color: #100c2a;
    overflow: hidden;
    padding: 20px;
    position: absolute;
}

.screen-body {
    width: 100%;
    height: 100%;
    display: flex;
}

.screen-left {
    width: 25%;
    padding-top: 50px;
    padding-left: 50px;
    .decoration {
    width:250px;
    height:2px;
}
}

.screen-middle {
    width: 45%;
    padding-top: 50px;
}

.screen-right {
    width: 25%;
    padding-top: 50px;
    .decoration {
    width:300px;
    height:2px;

}
}

.itemtitle {
    color: #ffffff;
    font-size: 17px;
    margin-bottom: 5px;
}




</style>