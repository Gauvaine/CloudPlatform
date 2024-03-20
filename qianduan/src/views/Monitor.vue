<template>
    <el-row>
        <el-col :span="8">
            <div class="chart">
                <div class="itemtitle" style="">环境监测</div>
                <div class="nodetitle" style="">节点1</div>
                <el-card>
                    <el-row>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 温度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">温度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 湿度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">湿度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 光照强度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">光照强度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
                <div class="nodetitle" style="">节点2</div>
                <el-card>
                    <el-row>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 温度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">温度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 湿度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">湿度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 光照强度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">光照强度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
                <div class="nodetitle" style="">节点3</div>
                <el-card>
                    <el-row>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 温度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">温度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 湿度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">湿度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="flex">
                                <div>
                                    <!-- 光照强度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">光照强度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
                <div class="nodetitle" style="">即插即用传感器</div>
                <el-card>
                    <el-row>
                        <el-col :span="6">
                            <div class="flex">
                                <div>
                                    <!-- 温度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">温度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="flex">
                                <div>
                                    <!-- 湿度图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">湿度</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="flex">
                                <div>
                                    <!-- 湿球图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">湿球</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="flex">
                                <div>
                                    <!-- 液位图标 -->
                                </div>
                                <div class="flex_item">
                                    <div style="line-height:40px;color:#000000;">
                                        <span style="font-size:24px;font-weight:bold;">{{ e_temperature }}</span>
                                        <span style="font-size:20px;margin-left:5px">℃</span>
                                    </div>
                                    <div style="line-height: 40px;color: #000000;font-size: 16px;">
                                        <span style="margin-left: 5px;">液位</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="nodetitle" style="">电流</div>
            <div class="imagesize" ref="echartRef1"></div>
            <div class="nodetitle" style="">电压</div>
            <div class="imagesize" ref="echartRef2" ></div>
            <div class="nodetitle" style="">电功率</div>
            <div class="imagesize" ref="echartRef3"></div>
            <div class="nodetitle" style="">用电量</div>
            <div class="imagesize" ref="echartRef4"></div>
        </el-col>
        <el-col :span="8">
            <p>视频监控</p>
            <el-card style="height: 550px;">
                <div img="../../assets/images/温度.png"></div>
            </el-card>
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
        const echartRef1 = ref(null);
        let echartInstance1 = null;
        const option1 = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 240,
                    splitNumber: 6,
                    itemStyle: {
                        color: '#58D9F9',
                        shadowColor: 'rgba(0,138,255,0.45)',
                        shadowBlur: 10,
                        shadowOffsetX: 20,
                        shadowOffsetY: 2
                    },
                    progress: {
                        show: true,
                        roundCap: true,
                        width: 18
                    },
                    pointer: {
                        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                        length: '75%',
                        width: 16,
                        offsetCenter: [0, '5%']
                    },
                    axisLine: {
                        roundCap: true,
                        lineStyle: {
                            width: 18
                        }
                    },
                    axisTick: {
                        splitNumber: 2,
                        lineStyle: {
                            width: 2,
                            color: '#999'
                        }
                    },
                    splitLine: {
                        length: 12,
                        lineStyle: {
                            width: 3,
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: 30,
                        color: '#999',
                        fontSize: 11
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        backgroundColor: '#fff',
                        borderColor: '#999',
                        borderWidth: 2,
                        width: '50%',
                        lineHeight: 40,
                        height: 10,
                        borderRadius: 8,
                        offsetCenter: [0, '-98%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return '{value|' + value.toFixed(0) + '}{unit|km/h}';
                        },
                        rich: {
                            value: {
                                fontSize: 15,
                                fontWeight: 'bolder',
                                color: '#777',
                                padding: [-50, -5, -20, 10]
                            },
                            unit: {
                                fontSize: 15,
                                color: '#999',
                                padding: [-50, 10, -20, 10]
                            }
                        }
                    },
                    data: [
                        {
                            value: 10
                        }
                    ]
                }
            ]
        };
        const echartRef2 = ref(null);
        let echartInstance2 = null;
        const option2 = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 240,
                    splitNumber: 6,
                    itemStyle: {
                        color: '#58D9F9',
                        shadowColor: 'rgba(0,138,255,0.45)',
                        shadowBlur: 10,
                        shadowOffsetX: 20,
                        shadowOffsetY: 2
                    },
                    progress: {
                        show: true,
                        roundCap: true,
                        width: 18
                    },
                    pointer: {
                        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                        length: '75%',
                        width: 16,
                        offsetCenter: [0, '5%']
                    },
                    axisLine: {
                        roundCap: true,
                        lineStyle: {
                            width: 18
                        }
                    },
                    axisTick: {
                        splitNumber: 2,
                        lineStyle: {
                            width: 2,
                            color: '#999'
                        }
                    },
                    splitLine: {
                        length: 12,
                        lineStyle: {
                            width: 3,
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: 30,
                        color: '#999',
                        fontSize: 11
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        backgroundColor: '#fff',
                        borderColor: '#999',
                        borderWidth: 2,
                        width: '50%',
                        lineHeight: 40,
                        height: 10,
                        borderRadius: 8,
                        offsetCenter: [0, '-98%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return '{value|' + value.toFixed(0) + '}{unit|km/h}';
                        },
                        rich: {
                            value: {
                                fontSize: 15,
                                fontWeight: 'bolder',
                                color: '#777',
                                padding: [-50, -5, -20, 10]
                            },
                            unit: {
                                fontSize: 15,
                                color: '#999',
                                padding: [-50, 10, -20, 10]
                            }
                        }
                    },
                    data: [
                        {
                            value: 10
                        }
                    ]
                }
            ]
        };
        const echartRef3 = ref(null);
        let echartInstance3 = null;
        const option3 = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 240,
                    splitNumber: 6,
                    itemStyle: {
                        color: '#58D9F9',
                        shadowColor: 'rgba(0,138,255,0.45)',
                        shadowBlur: 10,
                        shadowOffsetX: 20,
                        shadowOffsetY: 2
                    },
                    progress: {
                        show: true,
                        roundCap: true,
                        width: 18
                    },
                    pointer: {
                        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                        length: '75%',
                        width: 16,
                        offsetCenter: [0, '5%']
                    },
                    axisLine: {
                        roundCap: true,
                        lineStyle: {
                            width: 18
                        }
                    },
                    axisTick: {
                        splitNumber: 2,
                        lineStyle: {
                            width: 2,
                            color: '#999'
                        }
                    },
                    splitLine: {
                        length: 12,
                        lineStyle: {
                            width: 3,
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: 30,
                        color: '#999',
                        fontSize: 11
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        backgroundColor: '#fff',
                        borderColor: '#999',
                        borderWidth: 2,
                        width: '50%',
                        lineHeight: 40,
                        height: 10,
                        borderRadius: 8,
                        offsetCenter: [0, '-98%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return '{value|' + value.toFixed(0) + '}{unit|km/h}';
                        },
                        rich: {
                            value: {
                                fontSize: 15,
                                fontWeight: 'bolder',
                                color: '#777',
                                padding: [-50, -5, -20, 10]
                            },
                            unit: {
                                fontSize: 15,
                                color: '#999',
                                padding: [-50, 10, -20, 10]
                            }
                        }
                    },
                    data: [
                        {
                            value: 10
                        }
                    ]
                }
            ]
        };
        const echartRef4 = ref(null);
        let echartInstance4 = null;
        const option4 = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 240,
                    splitNumber: 6,
                    itemStyle: {
                        color: '#58D9F9',
                        shadowColor: 'rgba(0,138,255,0.45)',
                        shadowBlur: 10,
                        shadowOffsetX: 20,
                        shadowOffsetY: 2
                    },
                    progress: {
                        show: true,
                        roundCap: true,
                        width: 18
                    },
                    pointer: {
                        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                        length: '75%',
                        width: 16,
                        offsetCenter: [0, '5%']
                    },
                    axisLine: {
                        roundCap: true,
                        lineStyle: {
                            width: 18
                        }
                    },
                    axisTick: {
                        splitNumber: 2,
                        lineStyle: {
                            width: 2,
                            color: '#999'
                        }
                    },
                    splitLine: {
                        length: 12,
                        lineStyle: {
                            width: 3,
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: 30,
                        color: '#999',
                        fontSize: 11
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        backgroundColor: '#fff',
                        borderColor: '#999',
                        borderWidth: 2,
                        width: '50%',
                        lineHeight: 40,
                        height: 10,
                        borderRadius: 8,
                        offsetCenter: [0, '-98%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return '{value|' + value.toFixed(0) + '}{unit|km/h}';
                        },
                        rich: {
                            value: {
                                fontSize: 15,
                                fontWeight: 'bolder',
                                color: '#777',
                                padding: [-50, -5, -20, 10]
                            },
                            unit: {
                                fontSize: 15,
                                color: '#999',
                                padding: [-50, 10, -20, 10]
                            }
                        }
                    },
                    data: [
                        {
                            value: 10
                        }
                    ]
                }
            ]
        };

        onMounted(() => {
            echartInstance1 = echarts.init(echartRef1.value);
            echartInstance1.setOption(option1);

            echartInstance2 = echarts.init(echartRef2.value);
            echartInstance2.setOption(option2);

            echartInstance3 = echarts.init(echartRef3.value);
            echartInstance3.setOption(option3);

            echartInstance4 = echarts.init(echartRef4.value);
            echartInstance4.setOption(option4);

        });
        return {
            e_temperature: 20,
            echartRef1,
            echartRef2,
            echartRef3,
            echartRef4
        };
    }
});
</script>

<style lang="less" scoped>
.imagesize {
    height: 120px;
}
</style>

