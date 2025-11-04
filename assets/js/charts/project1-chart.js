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
                label: {
                    backgroundColor: '#283b56'
                }
            },
            formatter: function(params) {
                let result = `<b>${params[0].axisValue}</b><br/>`;
                params.forEach(item => {
                    const status = item.seriesName.includes('Projected') ? '📈 Projected' : '✅ Actual';
                    result += `${status} ${item.seriesName}: <b>${item.value}</b> 万人<br/>`;

                    // 计算增长率（如果有前一年数据）
                    if (item.dataIndex > 0 && item.value && params[0].data[item.dataIndex - 1]) {
                        const prevValue = item.seriesType === 'line' ?
                            (item.seriesIndex === 0 ? [30, 80, 160, 220.7, 496.1][item.dataIndex - 1] : null) :
                            null;
                        if (prevValue && item.seriesIndex === 0) {
                            const growthRate = ((item.value - prevValue) / prevValue * 100).toFixed(1);
                            result += `&nbsp;&nbsp;📊 Growth Rate: ${growthRate > 0 ? '+' : ''}${growthRate}%<br/>`;
                        }
                    }
                });
                return result;
            }
        },
        legend: {
            data: ['Historical Data', 'Market Projection'],
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
                    name: 'genetic-testing-market-analysis'
                }
            },
            right: '5%',
            top: '10%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '25%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
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
        yAxis: {
            type: 'value',
            name: 'Users (10,000)',
            nameTextStyle: {
                fontSize: 13,
                color: '#666'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                formatter: '{value}',
                fontSize: 12,
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e0e0e0'
                }
            }
        },
        series: [
            {
                name: 'Historical Data',
                type: 'line',
                data: [30, 80, 160, 220.7, 496.1, null, null],
                smooth: true,
                lineStyle: {
                    width: 4,
                    color: '#5470c6',
                    shadowColor: 'rgba(84, 112, 198, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                itemStyle: {
                    color: '#5470c6',
                    borderWidth: 3,
                    borderColor: '#fff'
                },
                symbol: 'circle',
                symbolSize: 10,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(84, 112, 198, 0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(84, 112, 198, 0.05)'
                        }]
                    }
                },
                emphasis: {
                    focus: 'series',
                    itemStyle: {
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: 'rgba(84, 112, 198, 0.5)'
                    }
                },
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name: '2020 Peak',
                            itemStyle: {
                                color: '#ee6666'
                            },
                            label: {
                                formatter: '2020 Peak\n{c} 万人'
                            }
                        }
                    ],
                    symbolSize: 60,
                    label: {
                        fontSize: 11,
                        fontWeight: 'bold'
                    }
                },
                markLine: {
                    silent: true,
                    lineStyle: {
                        color: '#91cc75',
                        type: 'dashed'
                    },
                    data: [
                        {
                            type: 'average',
                            name: 'Average',
                            label: {
                                formatter: 'Avg: {c} 万人',
                                fontSize: 11
                            }
                        }
                    ]
                }
            },
            {
                name: 'Market Projection',
                type: 'line',
                data: [null, null, null, null, 496.1, 650, 850],
                smooth: true,
                lineStyle: {
                    width: 4,
                    type: 'dashed',
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
                symbol: 'diamond',
                symbolSize: 10,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(145, 204, 117, 0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(145, 204, 117, 0.05)'
                        }]
                    }
                },
                emphasis: {
                    focus: 'series',
                    itemStyle: {
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: 'rgba(145, 204, 117, 0.5)'
                    }
                }
            }
        ],
        // 添加数据区域缩放
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                start: 0,
                end: 100,
                handleIcon: 'path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }
        ],
        textStyle: {
            fontFamily: 'Arial, sans-serif'
        },
        // 添加背景色
        backgroundColor: '#fff'
    };

    myChart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });

    return myChart;
}