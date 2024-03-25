<template>
    <div class="graph">
        <div class="card">
            <dv-scroll-board :config="config" ref="scrollBoard" />
        </div>
        <div class="card">
            <dv-scroll-board :config="config2" ref="scrollBoard2" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue';
import { getCurrentInstance } from "vue-demi";

export default {
    setup() {
        const { proxy } = getCurrentInstance();
        const config = ref({
            header: ['时间', '电流值(mA)'],
            data: [],
            rowNum: 10,
            headerBGC: "#285794",
            // oddRowBGC:"#486a8a",
            // evenRowBGC:"#a1c9d1",
            columnWidth: [1],
            columnWidth: [160],
        });

        const config2 = ref({
            header: ['时间', '电压值(V)'],
            data: [],
            rowNum: 10,
            headerBGC: "#285794",
            columnWidth: [1],
            columnWidth: [160],
        });

        const getindex = async () => {
            let res = await proxy.$api.getSindex();
            //console.log(res);
            const code = res.data.code;
            if (code === 0) {
                let originalDate = res.data.data.time;
                const dateObject = new Date(originalDate);
                dateObject.setHours(dateObject.getHours() - 8);
                const time = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')} ${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}:${String(dateObject.getSeconds()).padStart(2, '0')}`;
                //let time = res.data.timestamp;

                let current = res.data.data.current;
                let newData = { time, current };
                config.value.data.push(newData);
                if (config.value.data.length > 10) {
                    config.value.data.shift(); // 移除最旧的数据
                }
                doUpdate();

                let voltage = res.data.data.voltage;
                let newData2 = { time, voltage };
                config2.value.data.push(newData2);
                if (config2.value.data.length > 10) {
                    config2.value.data.shift(); // 移除最旧的数据
                }
                doUpdate2();
            }
        };

        const connectWebSocket = () => {
            const websocket = inject("socket");
            console.log(websocket);
            websocket.addEventListener("open", () => {
                console.log("WebSocket 已连接");
            });
            websocket.addEventListener("error", () => {
                console.log("WebSocket 连接发生错误");
            });
            websocket.addEventListener("close", () => {
                console.log("WebSocket 已关闭");
            });
            websocket.addEventListener("message", (event) => {
                // 处理接收到的消息
                console.log("接收到服务器发送的消息：", event.data);
                const receivedData = event.data;
                const parsedData = JSON.parse(receivedData);
                //console.log(parsedData);
                // 动态解析属性名并赋值给对应的响应式变量

                // 新数据在最上方
                if (parsedData.S7current) {
                    //console.log(parsedData.S7current);
                    const timestamp = parsedData.S7current.time;
                    const dateObject = new Date(timestamp);
                    const time = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')} ${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}:${String(dateObject.getSeconds()).padStart(2, '0')}`;

                    let current = parsedData.S7current.value;
                    let newData = { time, current };
                    config.value.data.unshift(newData); //新数据插入数组开头
                    if (config.value.data.length > 10) {
                        config.value.data.pop(); // 移除数组末尾的数据
                    }
                    //console.log(config.value);
                    doUpdate();
                }

                if (parsedData.S7nUa) {
                    const timestamp = parsedData.S7nUa.time;
                    const dateObject = new Date(timestamp);
                    const time = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')} ${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}:${String(dateObject.getSeconds()).padStart(2, '0')}`;

                    let voltage = parsedData.S7nUa.value;
                    let newData = { time, voltage };
                    config2.value.data.unshift(newData);
                    if (config2.value.data.length > 10) {
                        config2.value.data.pop(); // 移除数组开头的数据
                    }
                    //console.log(config2.value);
                    doUpdate2();
                }

                // 新数据在最下方
                // if (parsedData.S7nUa) {
                //     //console.log(parsedData.S7nUa);
                //     //let time = parsedData.S7nUa.time;
                //     const timestamp = parsedData.S7nUa.time;
                //     const dateObject = new Date(timestamp);
                //     const time = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')} ${String(dateObject.getHours()).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')}:${String(dateObject.getSeconds()).padStart(2, '0')}`;

                //     let voltage = parsedData.S7nUa.value;
                //     let newData = { time, voltage };
                //     config2.value.data.push(newData); //新数据插入数组末尾
                //     if (config2.value.data.length > 10) {
                //         config2.value.data.shift(); // 移除数组开头的数据
                //     }
                //     //console.log(config2.value);
                //     doUpdate2();
                // }
            });
        };

        function doUpdate() {
            //console.log(config.value.data);
            proxy.$refs.scrollBoard.updateRows(config.value.data)
        }

        function doUpdate2() {
            //console.log(config2.value.data);
            proxy.$refs.scrollBoard2.updateRows(config2.value.data)
        }

        onMounted(() => {
            getindex();
            connectWebSocket();
            // setInterval(() => {
            //     getindex();
            // }, 2000);
        });

        onBeforeUnmount(() => {
            const websocket = inject("socket");
            websocket.removeEventListener("open", () => { });
            websocket.removeEventListener("message", () => { });
            websocket.removeEventListener("error", () => { });
            websocket.removeEventListener("close", () => { });
        });


        return {
            config,
            config2,
        };
    }
};
</script>

<style lang="less" scoped>
.graph {
    margin-top: 24px;

    .card {
        height: 300px;
        width: 300px;
        padding: 20px;
        margin-bottom: 40px;

        border-radius: 3px;
        border-style: solid;
        border-width: 1.5px;
        border-color: #bdd2ef;
    }
}
</style>