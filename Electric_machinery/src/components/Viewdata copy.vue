<template>
    <!-- 仪表盘 -->
    <div class="header">
        <span class="distance">▎ 数据查询</span>
        <el-date-picker v-model="timevalue" type="datetimerange" :shortcuts="shortcuts" range-separator="To"
            start-placeholder="Start date" end-placeholder="End date" size="small" />
    </div>
    <dv-decoration-2 :color="['#a4c1eb']" class="decoration" />
    <div class="graph">
        <div class="card">
            <div class="indexstyle">电 流
                <button @click="exportData1">
                    <el-icon style="color: #fff">
                        <Download />
                    </el-icon>
                </button>
            </div>
            <div ref="echartRef1" style="height: 300px"></div>
        </div>
        <div class="card">
            <div class="indexstyle">电 压
                <button @click="exportData3">
                    <el-icon style="color: #fff">
                        <Download />
                    </el-icon>
                </button>
            </div>
            <div ref="echartRef3" style="height: 300px"></div>
        </div>
        <!-- <div class="card">
            <div class="indexstyle2">
                <span class="distance">电压</span>
                <button @click="exportData3">
                    <el-icon style="color: #fff">
                        <Download />
                    </el-icon>
                </button>
            </div>
            <div ref="echartRef3" style="height: 300px"></div>
        </div> -->
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch, reactive } from "vue";
import * as echarts from "echarts";
import { getCurrentInstance } from "vue-demi";
export default defineComponent({
    setup() {
        const timevalue = ref("");
        const shortcuts = [
            {
                text: "Last week",
                value: () => {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    return [start, end];
                },
            },
            {
                text: "Last month",
                value: () => {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    return [start, end];
                },
            },
        ];

        const echartRef1 = ref(null);
        const echartRef3 = ref(null);
        const alldata = reactive({});

        const { proxy } = getCurrentInstance();
        const switchStartData = async () => {
            const EndTime = new Date();
            EndTime.setHours(EndTime.getHours() + 8);
            const isoEndTime = EndTime.toISOString();
            let res = await proxy.$api.switchFindData("", isoEndTime);
            //console.log(res);
            const data = res.data.data;
            alldata.data1 = data.map(item => [item.time, item.current])
            alldata.data3 = data.map(item => [item.time, item.voltage])

            const standDateList = data.map(item => item.time);
            const dateList = standDateList.map((dateString) => {
                const date = new Date(dateString);
                return date.toLocaleString("zh-CN", { hour12: false, timeZone: "UTC" });
            });

            const valueList1 = data.map(item => item.current);
            const valueList3 = data.map(item => item.voltage);
            const option1 = {
                // Make gradient line here
                visualMap: [
                    {
                        show: false,
                        type: "continuous",
                        seriesIndex: 0,
                        min: 0,
                        max: 400,
                    },
                ],
                tooltip: {
                    trigger: "axis",
                },
                xAxis: [
                    {
                        data: dateList,
                    },
                ],
                yAxis: [{}],
                grid: [
                    {
                        top: "7%",
                        bottom: "16%",
                        left: "14%",
                        right: "4%",
                    },
                ],
                series: [
                    {
                        type: "line",
                        showSymbol: false,
                        data: valueList1,
                    },
                ],
            };

            const option3 = {
                // Make gradient line here
                visualMap: [
                    {
                        show: false,
                        type: "continuous",
                        seriesIndex: 0,
                        min: 0,
                        max: 400,
                    },
                ],
                tooltip: {
                    trigger: "axis",
                },
                xAxis: [
                    {
                        data: dateList,
                    },
                ],
                yAxis: [{}],
                grid: [
                    {
                        top: "7%",
                        bottom: "16%",
                        left: "14%",
                        right: "4%",
                    },
                ],
                series: [
                    {
                        type: "line",
                        showSymbol: false,
                        data: valueList3,
                    },
                ],
            };

            const echartInstance1 = echarts.init(echartRef1.value);
            echartInstance1.setOption(option1);

            const echartInstance3 = echarts.init(echartRef3.value);
            echartInstance3.setOption(option3);
        };

        const switchFindData = async () => {
            const StartTime = new Date(timevalue.value[0]);
            StartTime.setHours(StartTime.getHours() + 8);
            const isoStartTime = StartTime.toISOString();
            const EndTime = new Date(timevalue.value[1]);
            EndTime.setHours(EndTime.getHours() + 8);
            const isoEndTime = EndTime.toISOString();

            let res = await proxy.$api.switchFindData(isoStartTime, isoEndTime);
            //console.log(res);
            const data = res.data.data;
            alldata.data1 = data.map(item => [item.time, item.current])
            alldata.data3 = data.map(item => [item.time, item.voltage])

            const standDateList = data.map(item => item.time);
            const dateList = standDateList.map((dateString) => {
                const date = new Date(dateString);
                return date.toLocaleString("zh-CN", { hour12: false, timeZone: "UTC" });
            });

            const valueList1 = data.map(item => item.current);
            const valueList3 = data.map(item => item.voltage);

            const option1 = {
                // Make gradient line here
                visualMap: [
                    {
                        show: false,
                        type: "continuous",
                        seriesIndex: 0,
                        min: 0,
                        max: 400,
                    },
                ],
                tooltip: {
                    trigger: "axis",
                },
                xAxis: [
                    {
                        data: dateList,
                    },
                ],
                yAxis: [{}],
                grid: [
                    {
                        top: "7%",
                        bottom: "16%",
                        left: "14%",
                        right: "4%",
                    },
                ],
                series: [
                    {
                        type: "line",
                        showSymbol: false,
                        data: valueList1,
                    },
                ],
            };
            const option3 = {
                // Make gradient line here
                visualMap: [
                    {
                        show: false,
                        type: "continuous",
                        seriesIndex: 0,
                        min: 0,
                        max: 400,
                    },
                ],
                tooltip: {
                    trigger: "axis",
                },
                xAxis: [
                    {
                        data: dateList,
                    },
                ],
                yAxis: [{}],
                grid: [
                    {
                        top: "7%",
                        bottom: "16%",
                        left: "14%",
                        right: "4%",
                    },
                ],
                series: [
                    {
                        type: "line",
                        showSymbol: false,
                        data: valueList3,
                    },
                ],
            };

            const echartInstance1 = echarts.getInstanceByDom(echartRef1.value);
            if (echartInstance1) {
                // 销毁现有的echarts实例
                echartInstance1.dispose();
            }
            const echartInstance3 = echarts.getInstanceByDom(echartRef3.value);
            if (echartInstance3) {
                // 销毁现有的echarts实例
                echartInstance3.dispose();
            }

            const newechartInstance1 = echarts.init(echartRef1.value);
            newechartInstance1.setOption(option1);
            const newechartInstance3 = echarts.init(echartRef3.value);
            newechartInstance3.setOption(option3);
        };

        const exportData1 = () => {
            // 获取数据（假设 data 是一个包含要导出的数据的数组）
            const data = alldata.data1;
            // 将数据转换为 CSV 格式
            const csv = convertToCSV(data);
            // 下载文件
            console.log(data);
            downloadCSV(csv, "CurrentData.csv");
        };

        const exportData3 = () => {
            // 获取数据（假设 data 是一个包含要导出的数据的数组）
            const data = alldata.data3;
            // 将数据转换为 CSV 格式
            const csv = convertToCSV(data);
            // 下载文件
            downloadCSV(csv, "VoltageData.csv");
        };

        const convertToCSV = (data) => {
            const csvRows = [];
            // 添加表头
            // const headers = Object.keys(data[0]);
            const headers = ["time", "value"];
            csvRows.push(headers.join(","));

            for (const row of data) {
                const values = row.map((value) => {
                    const escaped = ("" + value).replace(/"/g, '\\"');
                    return `"${escaped}"`;
                });
                csvRows.push(values.join(","));
            }
            // 返回 CSV 格式的字符串
            return csvRows.join("\n");
        };

        const downloadCSV = (csv, filename) => {
            const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            const csvURL = URL.createObjectURL(csvData);
            const tempLink = document.createElement("a");
            tempLink.href = csvURL;
            tempLink.setAttribute("download", filename);
            tempLink.click();
        };

        onMounted(() => {
            switchStartData();
        });
        watch(timevalue, (newTime) => {
            switchFindData();
        });

        return {
            timevalue,
            shortcuts,
            echartRef1,
            echartRef3,
            exportData1,
            exportData3,
        };
    },
});
</script>

<style lang="less" scoped>
.header {
    margin-bottom: 5px;
    color: #ffffff;
    font-size: 17px;

    .distance {
        margin-right: 25px;
    }
}

.decoration {
    width: 550px;
    height: 2px;

}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;

}

.graph {
    margin-top: 20px;

    .card {
        height: 300px;
        width: 590px;
        padding: 20px;
        padding-left: 0px;
        margin-bottom: 40px;

        border-radius: 3px;
        border-style: solid;
        border-width: 1.5px;
        border-color: #bdd2ef;
    }

    .indexstyle {
        color: #ffffff;
        font-size: 16px;
        text-align: center;
    }

    .indexstyle2 {
        color: #ffffff;
        font-size: 16px;

        .distance {
            margin-left: 80px;
            margin-right: 430px;
        }
    }
}
</style>