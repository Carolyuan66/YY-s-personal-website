// Project 2: Solar Thermal Collector Market Analysis (Enhanced Version)
// 太阳能热水器市场分析 - 增强版

function initProject2Chart() {
    const chartDom = document.getElementById('project2-chart');

    // 检查容器是否存在
    if (!chartDom) {
        return null;
    }

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: 'China Solar Thermal Collector Market',
            subtext: 'Sales Performance Analysis 2015-2019',
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
                    const icon = item.seriesType === 'bar' ? '📊' : '📈';
                    const unit = item.seriesName.includes('Share') ? '%' :
                        item.seriesName.includes('Area') ? ' 万m²' : ' 亿元';
                    result += `${icon} ${item.seriesName}: <b>${item.value}${unit}</b><br/>`;
                });
                return result;
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: false,
                    title: 'Data View',
                    lang: ['Data View', 'Close', 'Refresh']
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar'],
                    title: {
                        line: 'Switch to Line Chart',
                        bar: 'Switch to Bar Chart'
                    }
                },
                restore: {
                    show: true,
                    title: 'Restore'
                },
                saveAsImage: {
                    show: true,
                    title: 'Save as Image',
                    name: 'solar-thermal-market-analysis',
                    pixelRatio: 2
                }
            },
            right: '5%',
            top: '10%'
        },
        legend: {
            data: ['Sales Area', 'Sales Revenue', 'Market Share'],
            top: '12%',
            textStyle: {
                fontSize: 13,
                fontWeight: 500
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '25%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2015', '2016', '2017', '2018', '2019'],
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
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Sales Volume',
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
                name: 'Market Share (%)',
                nameTextStyle: {
                    fontSize: 13,
                    color: '#666',
                    padding: [0, 0, 0, 10]
                },
                position: 'right',
                min: 18,
                max: 23,
                interval: 1,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ee6666'
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
                name: 'Sales Area',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万m²';
                    }
                },
                data: [4300, 3900, 3600, 3400, 3250],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#5470c6'
                        }, {
                            offset: 1,
                            color: '#91a5d8'
                        }]
                    },
                    borderRadius: [5, 5, 0, 0],
                    shadowColor: 'rgba(84, 112, 198, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                emphasis: {
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#3a5bc7'
                            }, {
                                offset: 1,
                                color: '#5470c6'
                            }]
                        },
                        shadowBlur: 15,
                        shadowColor: 'rgba(84, 112, 198, 0.5)'
                    }
                },
                barWidth: '25%',
                label: {
                    show: false,
                    position: 'top',
                    formatter: '{c}',
                    fontSize: 11
                }
            },
            {
                name: 'Sales Revenue',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 亿元';
                    }
                },
                data: [720, 680, 650, 630, 618.9],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#91cc75'
                        }, {
                            offset: 1,
                            color: '#b7e19e'
                        }]
                    },
                    borderRadius: [5, 5, 0, 0],
                    shadowColor: 'rgba(145, 204, 117, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                emphasis: {
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#6fb85a'
                            }, {
                                offset: 1,
                                color: '#91cc75'
                            }]
                        },
                        shadowBlur: 15,
                        shadowColor: 'rgba(145, 204, 117, 0.5)'
                    }
                },
                barWidth: '25%',
                label: {
                    show: false,
                    position: 'top',
                    formatter: '{c}',
                    fontSize: 11
                }
            },
            {
                name: 'Market Share',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + '%';
                    }
                },
                data: [22, 21, 20.5, 19.5, 19.04],
                smooth: true,
                lineStyle: {
                    width: 4,
                    color: '#ee6666',
                    shadowColor: 'rgba(238, 102, 102, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                itemStyle: {
                    color: '#ee6666',
                    borderWidth: 3,
                    borderColor: '#fff'
                },
                symbol: 'circle',
                symbolSize: 10,
                emphasis: {
                    focus: 'series',
                    itemStyle: {
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: 'rgba(238, 102, 102, 0.5)'
                    }
                },
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name: 'Peak 2015',
                            itemStyle: {
                                color: '#fac858'
                            },
                            label: {
                                formatter: '2015 Peak\n{c}%'
                            }
                        },
                        {
                            type: 'min',
                            name: 'Lowest 2019',
                            itemStyle: {
                                color: '#73c0de'
                            },
                            label: {
                                formatter: '2019 Low\n{c}%'
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
                        color: '#fac858',
                        type: 'dashed',
                        width: 2
                    },
                    data: [
                        {
                            type: 'average',
                            name: 'Average Share',
                            label: {
                                formatter: 'Avg: {c}%',
                                fontSize: 11
                            }
                        }
                    ]
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(238, 102, 102, 0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(238, 102, 102, 0.05)'
                        }]
                    }
                }
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
                xAxisIndex: 0
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
    window.project2ChartInstance = myChart;


    return myChart;
}