// Project 4: Customer Segmentation and Marketing Campaign Analysis
// 客户细分和营销活动分析

function initProject4Chart() {
    const chartDom = document.getElementById('project4-chart');
    if (!chartDom) {
        return null;
    }

    const myChart = echarts.init(chartDom);

    // 模拟客户细分数据
    function generateClusterData(centerX, centerY, count, spread, cluster) {
        const data = [];
        for (let i = 0; i < count; i++) {
            data.push([
                centerX + (Math.random() - 0.5) * spread,
                centerY + (Math.random() - 0.5) * spread,
                Math.random() * 1000 + 500, // 消费金额
                cluster
            ]);
        }
        return data;
    }

    const cluster1 = generateClusterData(50, 60, 50, 20, 'High Value');
    const cluster2 = generateClusterData(30, 30, 60, 15, 'Medium Value');
    const cluster3 = generateClusterData(70, 40, 40, 18, 'Price Sensitive');
    const cluster4 = generateClusterData(45, 75, 35, 12, 'Loyal Customers');

    const option = {
        title: {
            text: 'Customer Segmentation Analysis',
            subtext: 'K-means Clustering Based on Spending Behavior',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `Cluster: ${params.data[3]}<br/>
                        Engagement: ${params.data[0].toFixed(1)}<br/>
                        Response Rate: ${params.data[1].toFixed(1)}<br/>
                        Spending: $${params.data[2].toFixed(0)}`;
            }
        },
        legend: {
            data: ['High Value', 'Medium Value', 'Price Sensitive', 'Loyal Customers'],
            top: '8%'
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: 'Campaign Engagement Score',
            nameLocation: 'middle',
            nameGap: 30,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'Response Rate (%)',
            nameLocation: 'middle',
            nameGap: 40,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                name: 'High Value',
                type: 'scatter',
                data: cluster1,
                symbolSize: function(data) {
                    return Math.sqrt(data[2]) / 3;
                },
                itemStyle: {
                    color: '#5470c6',
                    opacity: 0.7
                }
            },
            {
                name: 'Medium Value',
                type: 'scatter',
                data: cluster2,
                symbolSize: function(data) {
                    return Math.sqrt(data[2]) / 3;
                },
                itemStyle: {
                    color: '#91cc75',
                    opacity: 0.7
                }
            },
            {
                name: 'Price Sensitive',
                type: 'scatter',
                data: cluster3,
                symbolSize: function(data) {
                    return Math.sqrt(data[2]) / 3;
                },
                itemStyle: {
                    color: '#fac858',
                    opacity: 0.7
                }
            },
            {
                name: 'Loyal Customers',
                type: 'scatter',
                data: cluster4,
                symbolSize: function(data) {
                    return Math.sqrt(data[2]) / 3;
                },
                itemStyle: {
                    color: '#ee6666',
                    opacity: 0.7
                }
            }
        ],
        textStyle: {
            fontFamily: 'Arial, sans-serif'
        }
    };

    myChart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });

    window.project4ChartInstance = myChart;

    return myChart;
}