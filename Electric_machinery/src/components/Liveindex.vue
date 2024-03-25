<template>
    <div class="graph">
        <div class="card">
            <!-- <div class="indexstyle">电流</div> -->
            <div class="chart" ref="echartRef1"></div>
        </div>
        <div class="card">
            <!-- <div class="indexstyle">电压</div> -->
            <div class="chart" ref="echartRef3"></div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, ref, watch, inject, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import { getCurrentInstance } from "vue-demi";

export default {
    setup() {
        const echartRef1 = ref(null);
        const echartRef3 = ref(null);
        const gaugeData = reactive([
            {
                value: ref(0),
                name: "Current",
                // 指标位置
                title: {
                    offsetCenter: ["0%", "-125%"],
                },
                // 数值位置
                detail: {
                    offsetCenter: ["0%", "90%"],
                },
            },
        ]);

        const gaugeData3 = reactive([
            {
                value: ref(0),
                name: "Voltage",
                // 指标位置
                title: {
                    offsetCenter: ["0%", "-125%"],
                },
                // 数值位置
                detail: {
                    offsetCenter: ["0%", "90%"],
                },
            },
        ]);


        const init = () => {
            const myChart1 = echarts.init(echartRef1.value);
            const myChart3 = echarts.init(echartRef3.value);

            const option1 = {
                series: [
                    {
                        type: "gauge",
                        min: 0,
                        max: 500,
                        splitLine: 10,
                        // 中心点
                        anchor: {
                            show: true,
                            showAbove: true,
                            size: 18,
                            itemStyle: {
                                color: "#FAC858",
                            },
                        },
                        // 指针
                        pointer: {
                            icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
                            width: 8,
                            length: "80%",
                            offsetCenter: [0, "8%"],
                            itemStyle: {
                                color: "#2262ab",
                            },
                           
                        },
                        // 指针进度条样式
                        progress: {
                            show: true,
                            overlap: true,
                            roundCap: true,
                            itemStyle: {
                                color: "#2262ab",
                            },
                        },
                        axisLine: {
                            roundCap: true,
                        },
                        // 刻度数值
                        axisLabel: {
                            show: true, // 是否显示刻度标签
                            distance: 10, // 刻度标签距离刻度线的距离
                            formatter: function (value) {
                                if (value === 0 || value === 500) {
                                    // 只显示最小值和最大值的刻度标签
                                    return value;
                                } else {
                                    return "";
                                }
                            },
                            textStyle: {
                                color: "#eee", // 刻度标签文本颜色
                                fontSize: 15, // 刻度标签文本字号
                            },
                        },
                        // 刻度样式
                        axisTick: {
                            show: true, // 是否显示刻度
                            length: 10, // 刻度线的长度
                            lineStyle: {
                                color: "#aaa", // 刻度线的颜色
                                width: 0.8, // 刻度线的粗细
                            },
                        },
                        // 分割线样式
                        splitLine: {
                            show: true, // 是否显示分隔线
                            length: 15, // 分隔线的长度
                            lineStyle: {
                                color: "#aaa", // 分隔线的颜色
                                width: 5, // 分隔线的粗细
                            },
                        },
                        data: gaugeData,
                        // 指标样式
                        title: {
                            color: "#fff",
                            fontSize: 20,
                        },
                        // 数值展示与样式
                        detail: {
                            width: 90,
                            height: 18,
                            fontSize: 20,
                            color: "#fff",
                            backgroundColor: "#2262ab",
                            borderRadius: 3,
                            formatter: "{value}mA",
                        },
                    },
                ],
            };
            const option3 = {
                series: [
                    {
                        type: "gauge",
                        min: 0,
                        max: 600,
                        splitLine: 10,
                        // 中心点
                        anchor: {
                            show: true,
                            showAbove: true,
                            size: 18,
                            itemStyle: {
                                color: "#FAC858",
                            },
                        },
                        // 指针
                        pointer: {
                            icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
                            width: 8,
                            length: "80%",
                            offsetCenter: [0, "8%"],
                            itemStyle: {
                                color: "#2262ab",
                            },
                        },
                        // 指针进度条样式
                        progress: {
                            show: true,
                            overlap: true,
                            roundCap: true,
                            itemStyle: {
                                color: "#2262ab",
                            },
                        },
                        axisLine: {
                            roundCap: true,
                        },
                        // 刻度数值
                        axisLabel: {
                            show: true, // 是否显示刻度标签
                            distance: 10, // 刻度标签距离刻度线的距离
                            formatter: function (value) {
                                if (value === 0 || value === 600) {
                                    // 只显示最小值和最大值的刻度标签
                                    return value;
                                } else {
                                    return "";
                                }
                            },
                            textStyle: {
                                color: "#eee", // 刻度标签文本颜色
                                fontSize: 15, // 刻度标签文本字号
                            },
                        },
                        // 刻度样式
                        axisTick: {
                            show: true, // 是否显示刻度
                            length: 10, // 刻度线的长度
                            lineStyle: {
                                color: "#aaa", // 刻度线的颜色
                                width: 0.8, // 刻度线的粗细
                            },
                        },
                        // 分割线样式
                        splitLine: {
                            show: true, // 是否显示分隔线
                            length: 15, // 分隔线的长度
                            lineStyle: {
                                color: "#aaa", // 分隔线的颜色
                                width: 5, // 分隔线的粗细
                            },
                        },
                        data: gaugeData3,
                        // 指标样式
                        title: {
                            color: "#fff",
                            fontSize: 20,
                        },
                        // 数值展示与样式
                        detail: {
                            width: 90,
                            height: 18,
                            fontSize: 20,
                            color: "#fff",
                            backgroundColor: "#2262ab",
                            borderRadius: 3,
                            formatter: "{value}V",
                        },
                    },
                ],
            };

            myChart1.setOption(option1);
            myChart3.setOption(option3);

            echartRef1.value = myChart1;
            echartRef3.value = myChart3;

        };

        const { proxy } = getCurrentInstance();
        async function fetchData() {
            let res = await proxy.$api.getSindex();
            const code = res.data.code;
            if (code === 0) {
                gaugeData[0].value = res.data.data.current;
                gaugeData3[0].value = res.data.data.voltage;
            } else {
                gaugeData[0].value = 0;
                gaugeData3[0].value = 0;
            }
        }

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
                if (parsedData.S7current) {
                    gaugeData[0].value = parsedData.S7current.value;
                }
                if (parsedData.S7nUa) {
                    gaugeData3[0].value = parsedData.S7nUa.value;
                }
            });
        };

        onMounted(() => {
            // 初始化仪表盘数据
            init();
            fetchData();
            connectWebSocket();
        });

        // 在组件卸载时移除事件监听器
        onBeforeUnmount(() => {
            const websocket = inject("socket");
            websocket.removeEventListener("open", () => { });
            websocket.removeEventListener("message", () => { });
            websocket.removeEventListener("error", () => { });
            websocket.removeEventListener("close", () => { });
        });

        // 监听数据变化，实现实时更新仪表盘数据
        watch(
            () => gaugeData,
            (newVal) => {
                // 获取 ECharts 实例
                const myChart1 = echartRef1.value;
                // 更新仪表盘数据
                myChart1.setOption({
                    series: [
                        {
                            data: newVal,
                        },
                    ],
                });
                //console.log(gaugeData[0].value);
            },
            { deep: true }
        );

        watch(
            () => gaugeData3,
            (newVal) => {
                // 获取 ECharts 实例
                const myChart3 = echartRef3.value;
                // 更新仪表盘数据
                myChart3.setOption({
                    series: [
                        {
                            data: newVal,
                        },
                    ],
                });
            },
            { deep: true }
        );


        return {
            echartRef1,
            echartRef3,
        };
    },
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

    .indexstyle {
        color: #ffffff;
        text-align: center; //文字居中
        font-size: 14px;
    }

    .chart {
        height: 300px;
    }
}
</style>