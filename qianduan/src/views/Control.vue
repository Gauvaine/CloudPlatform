<template>
    <el-row>
        <el-col :span="8">
            <div>卷帘机</div>
            <div>
                表格
            </div>
            <div>
                温馨提示
                <el-card class="attention">
                    卷帘机的使用卷帘机的使用卷帘机的使用卷帘机的使用卷帘机的使用卷帘机的使用
                </el-card>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="graph">
                    <el-card style="height: 280px;">
                        <div>电流</div>
                        <div ref="dianliuRef" style="height: 260px;"></div>
                    </el-card>
                    <el-card style="height: 280px;">
                        <div>电压</div>
                        <div ref="dianyaRef" style="height: 260px;"></div>
                    </el-card>
            </div>
            <div class="graph">
                <el-card style="height: 280px;">
                    <div>电功率</div>
                    <div ref="diangonglvRef" style="height: 260px;"></div>
                </el-card>
               
                <el-card style="height: 280px;">
                    <div>用电量</div>
                    <div ref="yongdianliangRef" style="height: 260px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>


<script>
import {
    defineComponent,
    onMounted,
    ref,
} from "vue";

import * as echarts from "echarts";
export default defineComponent({
    setup() {
        const dianliuRef = ref(null);
        let echartInstance1 = null;
        const option1 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        const dianyaRef = ref(null);
        let echartInstance2 = null;
        const option2 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        const diangonglvRef = ref(null);
        let echartInstance3 = null;
        const option3 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        const yongdianliangRef = ref(null);
        let echartInstance4 = null;
        const option4 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };

        onMounted(() => {
            echartInstance1 = echarts.init(dianliuRef.value);
            echartInstance1.setOption(option1);

            echartInstance2 = echarts.init(dianyaRef.value);
            echartInstance2.setOption(option2);

            echartInstance3 = echarts.init(diangonglvRef.value);
            echartInstance3.setOption(option3);

            echartInstance4 = echarts.init(yongdianliangRef.value);
            echartInstance4.setOption(option4);

        });
        return {
            dianliuRef,
            dianyaRef,
            diangonglvRef,
            yongdianliangRef
        };
    }
});
</script>

<style lang="less" scoped>
.attention {
    margin-top: 20px;
    margin-right: 13px;
    height: auto;
    font-size: 1cap;
    color: darkslategray;

}

.graph {
    margin-top: 20px;
    margin-left: 18px;
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 48%;
    }
}
</style>

