// Project 1: Genetic Testing Market Environment Analysis (Enhanced Version)
// 基因检测市场环境分析 - 增强版

function initProject1Chart() {
    const chartDom = document.getElementById('project1-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: 'China Consumer Genetic Testing Market',
            subtext: 'User Growth Analysis 2016-2022',
            left: 'center',
            textStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333'
            },
            subtextStyle: {
                fontSize: 14,
                color: '#666'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function(params) {
                let result = `<b>${params[0].axisValue}</b><br/>`;
                params.forEach(item => {
                    if (item.seriesName === 'User Count') {
                        result += `📊 ${item.seriesName}: <b>${item.value}</b> 万人<br/>`;
                    } else if (item.seriesName === 'Growth Rate') {
                        result += `📈 ${item.seriesName}: <b>${item.value}%</b><br/>`;
                    }
                });
                return result;
            }
        },
        legend: {
            data: ['User Count', 'Growth Rate'],
            top: '12%',
            textStyle: {
                fontSize: 13,
                fontWeight: 500
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    readOnly: false,
                    title: 'View Data',
                    lang: ['Data View', 'Close', 'Refresh']
                },
                restore: {
                    title: 'Restore'
                },
                saveAsImage: {
                    title: 'Save as Image',
                    name: 'genetic-testing-market-analysis',
                    pixelRatio: 2
                }
            },
            right: '5%',
            top: '5%'
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            top: '25%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020', '2021E', '2022E'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                fontSize: 12,
                color: '#666'
            }
        },
        yAxis: [
            {
                type: 'value',
                name: 'User Count (10,000)',
                nameTextStyle: {
                    fontSize: 13,
                    color: '#666',
                    padding: [0, 0, 0, -10]
                },
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5470c6'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    fontSize: 11,
                    color: '#666'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#e0e0e0'
                    }
                }
            },
            {
                type: 'value',
                name: 'Growth Rate (%)',
                nameTextStyle: {
                    fontSize: 13,
                    color: '#666',
                    padding: [0, 0, 0, 10]
                },
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#91cc75'
                    }
                },
                axisLabel: {
                    formatter: '{value}%',
                    fontSize: 11,
                    color: '#666'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: 'User Count',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万人';
                    }
                },
                data: [
                    { value: 10, itemStyle: { color: '#5470c6' } },
                    { value: 35, itemStyle: { color: '#5470c6' } },
                    { value: 104.3, itemStyle: { color: '#5470c6' } },
                    { value: 220.7, itemStyle: { color: '#5470c6' } },
                    { value: 496.1, itemStyle: { color: '#5470c6' } },
                    { value: 1065.5, itemStyle: { color: '#91cc75' } },  // 预测数据用不同颜色
                    { value: 2070.3, itemStyle: { color: '#91cc75' } }   // 预测数据用不同颜色
                ],
                itemStyle: {
                    borderRadius: [5, 5, 0, 0],
                    shadowColor: 'rgba(84, 112, 198, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(84, 112, 198, 0.5)'
                    }
                },
                barWidth: '45%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}',
                    fontSize: 11,
                    fontWeight: 'bold'
                }
            },
            {
                name: 'Growth Rate',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + '%';
                    }
                },
                // 计算增长率：((当年-上一年)/上一年)*100
                data: [
                    null,  // 2016年没有前一年数据
                    248.7,  // (35-10)/10*100 = 250%
                    198.5,  // (104.3-35)/35*100
                    111.5,  // (220.7-104.3)/104.3*100
                    124.8,  // (496.1-220.7)/220.7*100
                    114.8,  // 预测值
                    94.3    // 预测值
                ],
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#91cc75',
                    shadowColor: 'rgba(145, 204, 117, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                itemStyle: {
                    color: '#91cc75',
                    borderWidth: 3,
                    borderColor: '#fff'
                },
                symbol: 'circle',
                symbolSize: 8,
                emphasis: {
                    focus: 'series',
                    itemStyle: {
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: 'rgba(145, 204, 117, 0.5)'
                    }
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    fontSize: 10,
                    color: '#91cc75'
                }
            }
        ],
        textStyle: {
            fontFamily: 'Arial, sans-serif'
        },
        backgroundColor: '#fff'
    };

    myChart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });

    // 保存实例供外部调用
    window.project1ChartInstance = myChart;

    return myChart;
}