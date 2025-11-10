// Project 2: Solar Thermal Collector Market Analysis (Matching Project 1 - No Toggle Buttons)
// Solar Water Heater Market Analysis - Single View with Toolbox Only

function initProject2Chart() {
    const chartDom = document.getElementById('project2-chart');

    // Check if container exists
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
                    const icon = item.marker;
                    let unit = '';
                    let value = item.value;

                    if (item.seriesName.includes('Share')) {
                        unit = '%';
                    } else {
                        unit = ' (10k m²)';
                    }

                    result += `${icon} ${item.seriesName}: <b>${value}${unit}</b><br/>`;
                });
                return result;
            }
        },
        legend: {
            data: [
                'Himin Flat-plate Solar Sales',
                'Flat-plate Solar Sales',
                'Total Solar Water Heater Sales',
                'Flat-plate Share in Total Market',
                'Himin Share in Flat-plate Market'
            ],
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
                    name: 'solar-thermal-market-analysis',
                    pixelRatio: 2
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
        },
        yAxis: [
            {
                type: 'value',
                name: 'Sales Volume (10k m²)',
                nameTextStyle: {
                    fontSize: 13,
                    color: '#666',
                    padding: [0, 0, 0, -10]
                },
                position: 'left',
                min: 0,
                max: 5000,
                interval: 500,
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
                min: 0,
                max: 20,
                interval: 2,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#91cc75'
                    }
                },
                axisLabel: {
                    formatter: '{value}.00%',
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
                name: 'Himin Flat-plate Solar Sales',
                type: 'bar',
                barWidth: '12%',
                data: [60, 64.5, 66.1, 64.6, 61.2],
                itemStyle: {
                    color: '#1f4e8c',
                    borderRadius: [5, 5, 0, 0],
                    shadowColor: 'rgba(31, 78, 140, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(31, 78, 140, 0.5)'
                    }
                }
            },
            {
                name: 'Flat-plate Solar Sales',
                type: 'bar',
                barWidth: '12%',
                data: [550, 530, 602.8, 598, 618.9],
                itemStyle: {
                    color: '#5dbedb',
                    borderRadius: [5, 5, 0, 0],
                    shadowColor: 'rgba(93, 190, 219, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(93, 190, 219, 0.5)'
                    }
                }
            },
            {
                name: 'Total Solar Water Heater Sales',
                type: 'bar',
                barWidth: '12%',
                data: [4350, 3950, 3730, 3543, 3250],
                itemStyle: {
                    color: '#2d5d3f',
                    borderRadius: [5, 5, 0, 0],
                    shadowColor: 'rgba(45, 93, 63, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(45, 93, 63, 0.5)'
                    }
                }
            },
            {
                name: 'Flat-plate Share in Total Market',
                type: 'line',
                yAxisIndex: 1,
                data: [12.64, 13.42, 16.16, 16.88, 19.04],
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#5dbedb',
                    shadowColor: 'rgba(93, 190, 219, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                itemStyle: {
                    color: '#5dbedb',
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
                        shadowColor: 'rgba(93, 190, 219, 0.5)'
                    }
                }
            },
            {
                name: 'Himin Share in Flat-plate Market',
                type: 'line',
                yAxisIndex: 1,
                data: [8.50, 9.20, 10.00, 10.80, 11.50],
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#2d5d3f',
                    shadowColor: 'rgba(45, 93, 63, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                },
                itemStyle: {
                    color: '#2d5d3f',
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
                        shadowColor: 'rgba(45, 93, 63, 0.5)'
                    }
                }
            }
        ],
        textStyle: {
            fontFamily: 'Arial, sans-serif'
        },
        backgroundColor: '#fff'
    };

    myChart.setOption(option);

    // Responsive resizing
    window.addEventListener('resize', function() {
        myChart.resize();
    });

    // Save instance for external access
    window.project2ChartInstance = myChart;

    return myChart;
}

// Auto-initialize after page load if needed
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Wait for ECharts library to load
        if (typeof echarts !== 'undefined') {
            initProject2Chart();
        }
    });
}