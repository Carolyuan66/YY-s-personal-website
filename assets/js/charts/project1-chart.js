// Project 1: Genetic Testing Market Environment Analysis (Enhanced Version)

function initProject1Chart() {
    const chartDom = document.getElementById('project1-chart');
    const myChart = echarts.init(chartDom);
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;

    // 如果是移动设备，添加下拉菜单
    if (isMobile) {
        const parent = chartDom.parentElement;
        const existingDropdown = parent.querySelector('.mobile-chart-controls');
        if (!existingDropdown) {
            const dropdown = document.createElement('div');
            dropdown.className = 'mobile-chart-controls';
            dropdown.innerHTML = `
                <div class="chart-control-wrapper">
                    <select id="project1-series-selector" class="chart-selector">
                        <option value="both">All Data</option>
                        <option value="userCount">User Count Only</option>
                        <option value="growthRate">Growth Rate Only</option>
                    </select>
                    <button class="chart-info-btn" id="project1-info-btn">ℹ️</button>
                </div>
            `;
            parent.insertBefore(dropdown, chartDom);

            // 添加模态弹窗到body
            const modalHTML = `
                <div class="chart-info-modal" id="project1-info-modal">
                    <div class="chart-info-modal-content">
                        <button class="close-info">✕</button>
                        <h3>Chart Information</h3>
                        
                        <div class="info-section">
                            <h4>📊 Data Series</h4>
                            <div class="info-item">
                                <span class="series-indicator" style="background: #5470c6;"></span>
                                <span>User Count</span>
                            </div>
                            <div class="info-item">
                                <span class="series-indicator line-indicator" style="background: #91cc75;"></span>
                                <span>Growth Rate</span>
                            </div>
                        </div>
                        
                        <div class="info-section">
                            <h4>📏 Units</h4>
                            <div class="info-item">
                                <span class="info-icon">•</span>
                                <span>User Count: 10,000 people</span>
                            </div>
                            <div class="info-item">
                                <span class="info-icon">•</span>
                                <span>Growth Rate: percentage (%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            // 添加信息按钮事件
            setTimeout(() => {
                const infoBtn = document.getElementById('project1-info-btn');
                const modal = document.getElementById('project1-info-modal');
                const closeBtn = modal.querySelector('.close-info');

                infoBtn.addEventListener('click', () => {
                    modal.classList.add('active');

                    // 锁定滚动
                    document.body.style.overflow = 'hidden';
                    document.documentElement.style.overflow = 'hidden';

                    // 禁用fullPage.js滚动
                    if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.setAllowScrolling) {
                        $.fn.fullpage.setAllowScrolling(false);
                        $.fn.fullpage.setKeyboardScrolling(false);
                    }
                });

                const closeModal = () => {
                    modal.classList.remove('active');

                    // 恢复滚动
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';

                    // 恢复fullPage.js滚动
                    if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.setAllowScrolling) {
                        $.fn.fullpage.setAllowScrolling(true);
                        $.fn.fullpage.setKeyboardScrolling(true);
                    }
                };

                closeBtn.addEventListener('click', closeModal);

                // 点击模态背景关闭
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        closeModal();
                    }
                });

                // ESC键关闭
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        closeModal();
                    }
                });
            }, 100);
        }
    }

    const option = {
        title: {
            text: 'China Consumer Genetic Testing Market',
            subtext: 'User Growth Analysis 2016-2022',
            left: 'center',
            top: '1%',
            textStyle: {
                fontSize: isMobile? 14 : 17,
                fontWeight: 'bold',
                color: '#333'
            },
            subtextStyle: {
                fontSize: isMobile? 10 : 11,
                color: '#666'
            },
            itemGap: 2
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
                        result += `📊 ${item.seriesName}: <b>${item.value}</b> 10K people<br/>`;
                    } else if (item.seriesName === 'Growth Rate') {
                        result += `📈 ${item.seriesName}: <b>${item.value}%</b><br/>`;
                    }
                });
                return result;
            }
        },
        legend: {
            data: ['User Count', 'Growth Rate'],
            top: '14%',
            textStyle: {
                fontSize: 10,
                fontWeight: 500
            },
            show: !isMobile
        },
        toolbox: {
            show: !isMobile,
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
            top: '1%'
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            top: '24%',
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
                name: isMobile? '' : 'User Count (10,000)',
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
                name: isMobile? '' : 'Growth Rate (%)',
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
                        return value + ' 10,000 people';
                    }
                },
                data: [
                    { value: 10, itemStyle: { color: '#5470c6' } },
                    { value: 35, itemStyle: { color: '#5470c6' } },
                    { value: 104.3, itemStyle: { color: '#5470c6' } },
                    { value: 220.7, itemStyle: { color: '#5470c6' } },
                    { value: 496.1, itemStyle: { color: '#5470c6' } },
                    { value: 1065.5, itemStyle: { color: '#91cc75' } },
                    { value: 2070.3, itemStyle: { color: '#91cc75' } }
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

    // 移动端下拉菜单控制
    if (isMobile) {
        const selector = document.getElementById('project1-series-selector');
        if (selector) {
            selector.addEventListener('change', function() {
                const value = this.value;

                // 根据选择更新图表
                if (value === 'both') {
                    myChart.setOption({
                        legend: {
                            selected: {
                                'User Count': true,
                                'Growth Rate': true
                            }
                        }
                    });
                } else if (value === 'userCount') {
                    myChart.setOption({
                        legend: {
                            selected: {
                                'User Count': true,
                                'Growth Rate': false
                            }
                        }
                    });
                } else if (value === 'growthRate') {
                    myChart.setOption({
                        legend: {
                            selected: {
                                'User Count': false,
                                'Growth Rate': true
                            }
                        }
                    });
                }
            });
        }
    }

    // 响应式调整 - 重新检测屏幕大小
    window.addEventListener('resize', function() {
        const currentIsMobile = window.innerWidth <= 768;

        // 更新图表大小
        myChart.resize();

        // 更新图表配置以显示/隐藏元素
        myChart.setOption({
            title: {
                textStyle: {
                    fontSize: currentIsMobile ? 14 : 17
                },
                subtextStyle: {
                    fontSize: currentIsMobile ? 10 : 11
                }
            },
            legend: {
                show: !currentIsMobile
            },
            toolbox: {
                show: !currentIsMobile
            },
            yAxis: [
                {
                    name: currentIsMobile ? '' : 'User Count (10,000)'
                },
                {
                    name: currentIsMobile ? '' : 'Growth Rate (%)'
                }
            ]
        });

        // 显示/隐藏移动端控制
        const mobileControls = document.querySelector('.mobile-chart-controls');
        if (mobileControls) {
            mobileControls.style.display = currentIsMobile ? 'block' : 'none';
        }
    });

    // 保存实例供外部调用
    window.project1ChartInstance = myChart;

    return myChart;
}