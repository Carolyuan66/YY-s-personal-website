// Education 3: Master of Digital Business
// University of Waikato, New Zealand

function initEducation3() {
    const container = document.getElementById('education3-content');

    if (!container) {
        console.error('Container #education3-content not found');
        return null;
    }

    container.innerHTML = '';

    const contentHTML = `
        <div class="education-detail-wrapper">
            <div class="education-header">
                <div class="header-content">
                    <div class="header-text">
                        <h2 class="institution-name">University of Waikato, New Zealand</h2>
                        <p class="gpa-info">GPA: 8.0/9.0</p>
                    </div>
                    <div class="institution-logo">
                        <img src="assets/images/waikatouni.png" alt="University of Waikato" class="university-logo">
                    </div>
                </div>
            </div>

            <div class="education-body-columns">
                <!-- 左侧列 -->
                <div class="left-column">
                    <div class="program-overview">
                        <h3>🎓 Advanced Program Focus</h3>
                        <p class="overview-text">This advanced postgraduate program deepened technical expertise and strategic business capabilities, with a focus on applied analytics and organizational digital transformation. Building upon foundational knowledge from the Graduate Diploma, the curriculum emphasized real-world application through rigorous coursework and a professional field internship that bridged academic theory with industry practice.</p>
                    </div>

                    <div class="highlight-section">
                        <h3>⭐ Applied Business Analytics</h3>
                        <div class="analytics-showcase">
                            <div class="analytics-feature">
                                <div class="feature-icon">📊</div>
                                <div class="feature-content">
                                    <h4>Tableau Mastery</h4>
                                    <p>Significantly enhanced technical proficiency beyond basic visualization—covering advanced dashboard design, calculated fields, data blending techniques, and interactive storytelling frameworks</p>
                                </div>
                            </div>
                            <div class="analytics-feature">
                                <div class="feature-icon">🎯</div>
                                <div class="feature-content">
                                    <h4>Strategic Insights</h4>
                                    <p>Creation of sophisticated analytical solutions that transform complex datasets into executive-level strategic insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右侧列 -->
                <div class="right-column">
                    <div class="strategic-modules">
                        <h3>💼 Strategic Business Modules</h3>
                        <div class="modules-timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h4>Digital Business Management</h4>
                                    <p>Examined emerging challenges in digital ecosystems, platform economics, and technology-driven business model innovation</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h4>Contemporary Issues</h4>
                                    <p>Critical frameworks for evaluating technological disruption and formulating adaptive organizational strategies</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h4>International Management</h4>
                                    <p>Cross-cultural business perspectives and global digital market dynamics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="capstone-section">
                        <h3>🚀 Capstone Experience</h3>
                        <div class="capstone-grid">
                            <div class="capstone-card research">
                                <div class="card-header">
                                    <span class="card-icon">🔬</span>
                                    <h4>Applied Research</h4>
                                </div>
                                <p>Synthesized analytical skills with rigorous research methodologies, cultivating the ability to design, execute, and present comprehensive business research projects.</p>
                            </div>
                            <div class="capstone-card internship">
                                <div class="card-header">
                                    <span class="card-icon">💼</span>
                                    <h4>Field Internship</h4>
                                </div>
                                <p>Hands-on exposure to organizational challenges, applying classroom learning to solve real business problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = contentHTML;
    addEducation3Styles();

    window.education3Instance = { type: 'education-detail', initialized: true };
    console.log('✅ Education 3 (Master) initialized');
    return true;
}

function addEducation3Styles() {
    if (document.getElementById('education3-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'education3-styles';
    styleSheet.textContent = `
        /* 覆盖全局chart-container样式 - education专用 */
        #education3-content {
            max-width: none !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
            border-radius: 0 !important;
        }

        .education-detail-wrapper {
            width: 100%;
            max-width: 2400px;
            margin: 0 auto;
            padding: 10px 40px;
        }

        .education-header {
            text-align: center;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 2px solid #337ab7;
        }

        .header-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
        }

        .header-text {
            text-align: left;
        }

        .institution-logo {
            flex-shrink: 0;
        }

        .university-logo {
            width: 70px;
            height: 70px;
            object-fit: contain;
            display: block;
        }

        .institution-name {
            font-size: 1.4rem;
            color: #337ab7;
            margin: 0 0 5px 0;
            font-weight: 600;
        }

        .gpa-info {
            font-size: 0.95rem;
            color: #666;
            font-weight: 500;
            margin: 0;
        }

        /* 左右分栏布局 */
        .education-body-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px !important;
            margin-top: 5px;
        }

        .left-column,
        .right-column {
            min-width: 0;
            padding: 0 !important;
            margin: 0 !important;
        }

        .right-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .strategic-modules,
        .capstone-section {
            min-width: 0;
        }

        .education-detail-wrapper h3 {
            color: #337ab7;
            font-size: 1.15rem;
            margin: 12px 0 8px 0;
            font-weight: 600;
        }

        .overview-text {
            background: linear-gradient(135deg, rgba(51, 122, 183, 0.1), rgba(51, 122, 183, 0.05));
            padding: 12px 15px;
            border-radius: 8px;
            border-left: 3px solid #337ab7;
            line-height: 1.4;
            color: #555;
            font-size: 0.9rem;
            margin-bottom: 12px;
        }

        .analytics-showcase {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 10px;
        }

        .analytics-feature {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            background: white;
            padding: 12px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
        }

        .analytics-feature:hover {
            box-shadow: 0 4px 12px rgba(51, 122, 183, 0.12);
            transform: translateY(-3px);
        }

        .feature-icon {
            font-size: 28px;
            flex-shrink: 0;
        }

        .feature-content h4 {
            color: #337ab7;
            margin: 0 0 5px 0;
            font-size: 0.95rem;
        }

        .feature-content p {
            color: #666;
            line-height: 1.3;
            margin: 0;
            font-size: 0.8rem;
        }

        .modules-timeline {
            position: relative;
            padding-left: 28px;
            margin-top: 8px;
        }

        .modules-timeline::before {
            content: '';
            position: absolute;
            left: 9px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, #667eea, #764ba2);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 8px;
        }

        .timeline-item:last-child {
            margin-bottom: 0;
        }

        .timeline-marker {
            position: absolute;
            left: -24px;
            top: 2px;
            width: 10px;
            height: 10px;
            background: #337ab7;
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 0 0 0 2px rgba(51, 122, 183, 0.15);
        }

        .timeline-content {
            background: white;
            padding: 8px 10px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
        }

        .timeline-content:hover {
            box-shadow: 0 4px 12px rgba(51, 122, 183, 0.12);
            transform: translateX(3px);
        }

        .timeline-content h4 {
            color: #337ab7;
            margin: 0 0 3px 0;
            font-size: 0.85rem;
        }

        .timeline-content p {
            color: #666;
            line-height: 1.25;
            margin: 0;
            font-size: 0.75rem;
        }

        .capstone-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 10px;
        }

        .capstone-card {
            padding: 12px 15px;
            border-radius: 12px;
            color: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            transition: all 0.3s ease;
        }

        .capstone-card.research {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .capstone-card.internship {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .capstone-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
        }

        .card-icon {
            font-size: 24px;
        }

        .card-header h4 {
            margin: 0;
            font-size: 0.95rem;
            color: white;
        }

        .capstone-card p {
            line-height: 1.3;
            margin: 0;
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.8rem;
        }

        .achievement-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .stat-card {
            background: linear-gradient(135deg, rgba(51, 122, 183, 0.1), rgba(51, 122, 183, 0.05));
            padding: 30px 20px;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .stat-card:hover {
            border-color: #337ab7;
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(51, 122, 183, 0.2);
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            color: #337ab7;
            margin-bottom: 10px;
        }

        .stat-icon {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 0.95rem;
            color: #666;
            font-weight: 500;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .education-detail-wrapper {
                padding: 15px;
            }

            .header-content {
                flex-direction: column;
                gap: 10px;
            }

            .header-text {
                text-align: center;
            }

            .university-logo {
                width: 60px;
                height: 60px;
            }

            /* 移动端改为单列 */
            .education-body-columns {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .right-column {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .analytics-showcase {
                grid-template-columns: 1fr;
            }

            .analytics-feature {
                flex-direction: column;
                padding: 20px;
            }

            .feature-icon {
                font-size: 36px;
            }

            .modules-timeline {
                padding-left: 30px;
            }

            .modules-timeline::before {
                left: 10px;
            }

            .timeline-marker {
                left: -27px;
                width: 12px;
                height: 12px;
            }

            .capstone-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .capstone-card {
                padding: 25px;
            }

            .achievement-stats {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }

            .stat-value {
                font-size: 2rem;
            }

            .stat-icon {
                font-size: 2.5rem;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

// 自动初始化
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('education3-content');
        if (container && typeof initEducation3 === 'function') {
            setTimeout(function() {
                initEducation3();
            }, 300);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initEducation3 };
}