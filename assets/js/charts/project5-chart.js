// Project 5: E-commerce and AI Integration Research for Chinese SMEs
// 电子商务与AI集成研究

function initProject5Chart() {
    const chartDom = document.getElementById('project5-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: 'Barriers to AI Adoption in Chinese SMEs',
            subtext: 'Survey Results from 100 E-commerce Companies',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                return `<b>${params[0].name}</b><br/>
                        ${params[0].seriesName}: ${params[0].value}%<br/>
                        Impact Level: ${params[0].value > 60 ? 'High' : params[0].value > 40 ? 'Medium' : 'Low'}`;
            }
        },
        legend: {
            data: ['Primary Barriers'],
            top: '8%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [
                'High\nImplementation\nCosts',
                'Limited\nTechnical\nExpertise',
                'Data\nAccessibility\nIssues',
                'Integration\nComplexity',
                'Security\nConcerns',
                'ROI\nUncertainty',
                'Lack of\nSupport'
            ],
            axisLabel: {
                interval: 0,
                rotate: 0,
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            name: 'Percentage (%)',
            max: 100,
            axisLabel: {
                formatter: '{value}%'
            }
        },
        series: [
            {
                name: 'Primary Barriers',
                type: 'bar',
                data: [
                    {
                        value: 78,
                        itemStyle: { color: '#ee6666' }
                    },
                    {
                        value: 72,
                        itemStyle: { color: '#ee6666' }
                    },
                    {
                        value: 65,
                        itemStyle: { color: '#fac858' }
                    },
                    {
                        value: 58,
                        itemStyle: { color: '#fac858' }
                    },
                    {
                        value: 52,
                        itemStyle: { color: '#91cc75' }
                    },
                    {
                        value: 48,
                        itemStyle: { color: '#91cc75' }
                    },
                    {
                        value: 35,
                        itemStyle: { color: '#5470c6' }
                    }
                ],
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    fontSize: 11,
                    fontWeight: 'bold'
                },
                barWidth: '60%'
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

    return myChart;
}