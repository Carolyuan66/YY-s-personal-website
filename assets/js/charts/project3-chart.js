// Project 3: Municipal Infrastructure Construction Schedule Management
// 市政基础设施建设进度管理

function initProject3Chart() {
    const chartDom = document.getElementById('project3-chart');
    const myChart = echarts.init(chartDom);

    // 模拟776天的项目时间线
    const startDate = new Date('2024-01-01');

    const option = {
        title: {
            text: 'Municipal Building Project Timeline',
            subtext: '776-Day Construction Schedule (Gantt Chart)',
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
                const data = params[0].data;
                return `<b>${data.name}</b><br/>
                        Start: Day ${data.value[1]}<br/>
                        Duration: ${data.value[2] - data.value[1]} days<br/>
                        Phase: ${data.phase}`;
            }
        },
        legend: {
            data: ['Architectural', 'Mechanical', 'Electrical', 'Structural', 'Client Review'],
            top: '8%'
        },
        grid: {
            left: '15%',
            right: '5%',
            bottom: '5%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: 'Days',
            max: 776,
            axisLabel: {
                formatter: '{value}'
            }
        },
        yAxis: {
            type: 'category',
            data: ['Phase 5', 'Phase 4', 'Phase 3', 'Phase 2', 'Phase 1']
        },
        series: [
            {
                name: 'Architectural',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#5470c6'
                },
                data: [
                    { value: [0, 0, 120], name: 'Design Phase', phase: 'Phase 1' },
                    { value: [1, 120, 280], name: 'Development', phase: 'Phase 2' },
                    { value: [2, 280, 450], name: 'Construction Docs', phase: 'Phase 3' },
                    { value: [3, 450, 600], name: 'Construction Admin', phase: 'Phase 4' },
                    { value: [4, 600, 776], name: 'Final Review', phase: 'Phase 5' }
                ]
            },
            {
                name: 'Mechanical',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#91cc75'
                },
                data: [
                    { value: [0, 40, 140] },
                    { value: [1, 140, 310] },
                    { value: [2, 310, 480] },
                    { value: [3, 480, 630] },
                    { value: [4, 630, 776] }
                ]
            },
            {
                name: 'Electrical',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#fac858'
                },
                data: [
                    { value: [0, 60, 160] },
                    { value: [1, 160, 330] },
                    { value: [2, 330, 500] },
                    { value: [3, 500, 650] },
                    { value: [4, 650, 776] }
                ]
            },
            {
                name: 'Structural',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#ee6666'
                },
                data: [
                    { value: [0, 30, 130] },
                    { value: [1, 130, 300] },
                    { value: [2, 300, 470] },
                    { value: [3, 470, 620] },
                    { value: [4, 620, 776] }
                ]
            },
            {
                name: 'Client Review',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#73c0de'
                },
                data: [
                    { value: [0, 110, 120] },
                    { value: [1, 270, 280] },
                    { value: [2, 440, 450] },
                    { value: [3, 590, 600] },
                    { value: [4, 766, 776] }
                ]
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