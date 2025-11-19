// Project 2: Solar Thermal Collector Market Analysis (Mobile Responsive)

function initProject2Chart() {
    const chartDom = document.getElementById('project2-chart');

    // Check if container exists
    if (!chartDom) {
        return null;
    }

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
                    <select id="project2-series-selector" class="chart-selector">
                        <option value="all">All Data</option>
                        <option value="sales">Sales Data Only</option>
                        <option value="share">Market Share Only</option>
                    </select>
                    <button class="chart-info-btn" id="project2-info-btn">ℹ️</button>
                </div>
            `;
            parent.insertBefore(dropdown, chartDom);

            // 添加模态弹窗到body
            const modalHTML = `
                <div class="chart-info-modal" id="project2-info-modal">
                    <div class="chart-info-modal-content">
                        <button class="close-info">✕</button>
                        <h3>Chart Information</h3>
                        
                        <div class="info-section">
                            <h4>📊 Sales Data (Bars)</h4>
                            <div class="info-item">
                                <span class="series-indicator" style="background: #1f4e8c;"></span>
                                <span>Himin Flat-plate Solar Sales</span>
                            </div>
                            <div class="info-item">
                                <span class="series-indicator" style="background: #5dbedb;"></span>
                                <span>Flat-plate Solar Sales</span>
                            </div>
                            <div class="info-item">
                                <span class="series-indicator" style="background: #2d5d3f;"></span>
                                <span>Total Solar Water Heater Sales</span>
                            </div>
                        </div>
                        
                        <div class="info-section">
                            <h4>📈 Market Share (Lines)</h4>
                            <div class="info-item">
                                <span class="series-indicator line-indicator" style="background: #5dbedb;"></span>
                                <span>Flat-plate Share in Total Market</span>
                            </div>
                            <div class="info-item">
                                <span class="series-indicator line-indicator" style="background: #2d5d3f;"></span>
                                <span>Himin Share in Flat-plate Market</span>
                            </div>
                        </div>
                        
                        <div class="info-section">
                            <h4>📏 Units</h4>
                            <div class="info-item">
                                <span class="info-icon">•</span>
                                <span>Sales Volume: 10,000 m²</span>
                            </div>
                            <div class="info-item">
                                <span class="info-icon">•</span>
                                <span>Market Share: percentage (%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            // 添加信息按钮事件
            setTimeout(() => {
                const infoBtn = document.getElementById('project2-info-btn');
                const modal = document.getElementById('project2-info-modal');
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
            text: 'China Solar Thermal Collector Market',
            subtext: 'Sales Performance Analysis 2015-2019',
            left: 'center',
            top: '1%',
            textStyle: {
                fontSize: isMobile ? 14 : 17,
                fontWeight: 'bold',
                color: '#333'
            },
            subtextStyle: {
                fontSize: isMobile ? 10 : 11,
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
                    const icon = item.marker;
                    let unit;
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
            top: '14%',
            textStyle: {
                fontSize: 8,
                fontWeight: 500
            },
            itemGap: 5,
            itemWidth: 16,
            itemHeight: 8,
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
                    name: 'solar-thermal-market-analysis',
                    pixelRatio: 2
                }
            },
            right: '5%',
            top: '1%'
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            top: '27%',
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
                name: isMobile ? '' : 'Sales Volume (10k m²)',
                nameTextStyle: {
                    fontSize: 12,
                    color: '#666',
                    padding: [0, 0, 0, 0]
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
                name: isMobile ? '' : 'Market Share (%)',
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

    // 移动端下拉菜单控制
    if (isMobile) {
        const selector = document.getElementById('project2-series-selector');
        if (selector) {
            selector.addEventListener('change', function() {
                const value = this.value;

                // 根据选择更新图表
                if (value === 'all') {
                    myChart.setOption({
                        legend: {
                            selected: {
                                'Himin Flat-plate Solar Sales': true,
                                'Flat-plate Solar Sales': true,
                                'Total Solar Water Heater Sales': true,
                                'Flat-plate Share in Total Market': true,
                                'Himin Share in Flat-plate Market': true
                            }
                        }
                    });
                } else if (value === 'sales') {
                    myChart.setOption({
                        legend: {
                            selected: {
                                'Himin Flat-plate Solar Sales': true,
                                'Flat-plate Solar Sales': true,
                                'Total Solar Water Heater Sales': true,
                                'Flat-plate Share in Total Market': false,
                                'Himin Share in Flat-plate Market': false
                            }
                        }
                    });
                } else if (value === 'share') {
                    myChart.setOption({
                        legend: {
                            selected: {
                                'Himin Flat-plate Solar Sales': false,
                                'Flat-plate Solar Sales': false,
                                'Total Solar Water Heater Sales': false,
                                'Flat-plate Share in Total Market': true,
                                'Himin Share in Flat-plate Market': true
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
                    name: currentIsMobile ? '' : 'Sales Volume (10k m²)'
                },
                {
                    name: currentIsMobile ? '' : 'Market Share (%)'
                }
            ]
        });

        // 显示/隐藏移动端控制
        const mobileControls = document.querySelectorAll('.mobile-chart-controls')[1]; // 第二个是project2的
        if (mobileControls) {
            mobileControls.style.display = currentIsMobile ? 'block' : 'none';
        }
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