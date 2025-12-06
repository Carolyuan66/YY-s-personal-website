// Education 2: Graduate Diploma in Digital Business
// University of Waikato, New Zealand

function initEducation2() {
    const container = document.getElementById('education2-content');

    if (!container) {
        console.error('Container #education2-content not found');
        return null;
    }

    container.innerHTML = '';

    container.innerHTML = `
        <div class="education-detail-wrapper">
            <div class="education-header">
                <div class="header-content">
                    <div class="header-text">
                        <h2 class="institution-name">University of Waikato, New Zealand</h2>
                        <p class="gpa-info">GPA: 7.8/9.0</p>
                    </div>
                    <div class="institution-logo">
                        <img src="assets/images/waikatouni.png" alt="University of Waikato" class="university-logo">
                    </div>
                </div>
            </div>

            <div class="education-body-columns desktop-content">
                <!-- 左侧列 -->
                <div class="left-column">
                    <div class="program-overview">
                        <h3>🚀 Program Focus</h3>
                        <p class="overview-text">This intensive postgraduate program provided comprehensive training in digital transformation strategies and business analytics, focusing on bridging technical proficiency with strategic business acumen.</p>
                    </div>

                    <div class="technical-skills-section">
                        <h3>💻 Technical Proficiency</h3>
                        <div class="tech-stack">
                            <div class="tech-category">
                                <h4>Enterprise Systems</h4>
                                <div class="tech-items">
                                    <span class="tech-badge">SAP ERP</span>
                                    <span class="tech-badge">Business Process Integration</span>
                                    <span class="tech-badge">Workflow Optimization</span>
                                </div>
                                <p class="tech-desc">In-depth SAP implementation projects, developing expertise in enterprise-level systems and cross-functional collaboration.</p>
                            </div>

                            <div class="tech-category">
                                <h4>Analytics Platforms</h4>
                                <div class="tech-items">
                                    <span class="tech-badge primary">Power BI</span>
                                    <span class="tech-badge">Gephi</span>
                                    <span class="tech-badge">Business Intelligence Tools</span>
                                </div>
                                <p class="tech-desc">Advanced coursework in Creating Value with Social Media Analytics and digital business intelligence for interactive dashboards and predictive modeling.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右侧列 -->
                <div class="right-column">
                    <div class="strategic-modules">
                        <h3>📊 Strategic Business Modules</h3>
                        <div class="modules-grid">
                            <div class="module-card">
                                <div class="module-icon">🔄</div>
                                <h4>Digital Transformation</h4>
                                <p>Frameworks for evaluating emerging technologies and leading organizational change initiatives</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">📈</div>
                                <h4>Technology Trends</h4>
                                <p>Critical relationship between technological innovation and business value creation</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">⚡</div>
                                <h4>Project Management</h4>
                                <p>Agile methodologies and stakeholder management capabilities</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">🚢</div>
                                <h4>Supply Chain</h4>
                                <p>Domain-specific insights into operational complexity and logistics optimization</p>
                            </div>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h3>🎯 Key Outcomes</h3>
                        <div class="outcome-list">
                            <div class="outcome-item">
                                <span class="outcome-number">01</span>
                                <div class="outcome-content">
                                    <h4>Data-Driven Decision Making</h4>
                                    <p>Ability to transform raw data into strategic insights and identify opportunities for technology-driven organizational outcomes</p>
                                </div>
                            </div>
                            <div class="outcome-item">
                                <span class="outcome-number">02</span>
                                <div class="outcome-content">
                                    <h4>Enterprise Integration</h4>
                                    <p>Understanding of how organizations leverage technology to streamline operations and enhance collaboration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 移动端纯文字内容 -->
            <div class="mobile-text-content">
                <p>This intensive postgraduate program provided comprehensive training in digital transformation strategies and business analytics. The curriculum covered enterprise systems implementation through in-depth SAP projects, while advanced coursework built proficiency in Power BI for interactive dashboards, Gephi for network analysis, and various business intelligence tools for predictive modeling.</p>
                
                <p>Strategic business modules including Digital Business Technology Trends and Managing Digital Business Transformation provided frameworks for evaluating emerging technologies and leading organizational change. Specialized studies in Project Management, Supply Chain Management, and Business Ecosystems developed the ability to transform raw data into strategic insights and identify opportunities where technology infrastructure drives competitive advantage.</p>
            </div>
        </div>
    `;
    addEducation2Styles();

    window.education2Instance = { type: 'education-detail', initialized: true };
    console.log('✅ Education 2 (Graduate Diploma) initialized');
    return true;
}

function addEducation2Styles() {
    if (document.getElementById('education2-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'education2-styles';
    styleSheet.textContent = `
        /* 覆盖全局chart-container样式 - education专用 */
        #education2-content {
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
            max-width: 1700px;
            margin: 0 auto;
            padding: 10px 60px;
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
            grid-template-columns: 1.5fr 1fr;
            gap: 15px !important;
        }

        .strategic-modules,
        .key-takeaways {
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

        .tech-stack {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

        .tech-category {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
        }

        .tech-category:hover {
            box-shadow: 0 4px 12px rgba(51, 122, 183, 0.12);
            transform: translateY(-2px);
        }

        .tech-category h4 {
            color: #337ab7;
            margin: 0 0 10px 0;
            font-size: 1.05rem;
        }

        .tech-items {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
        }

        .tech-badge {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 5px 12px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .tech-badge.primary {
            background: linear-gradient(135deg, #f093fb, #f5576c);
        }

        .tech-badge:hover {
            transform: scale(1.05);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .tech-desc {
            color: #666;
            font-size: 0.85rem;
            line-height: 1.4;
        }

        .modules-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-top: 12px;
        }

        .module-card {
            background: linear-gradient(135deg, rgba(51, 122, 183, 0.05), rgba(51, 122, 183, 0.1));
            padding: 8px 10px;
            border-radius: 10px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            min-width: 0;
        }

        .module-card:hover {
            border-color: #337ab7;
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(51, 122, 183, 0.15);
        }

        .module-icon {
            font-size: 22px;
            margin-bottom: 4px;
        }

        .module-card h4 {
            color: #337ab7;
            margin: 0 0 3px 0;
            font-size: 0.8rem;
        }

        .module-card p {
            color: #666;
            line-height: 1.2;
            font-size: 0.7rem;
            margin: 0;
        }

        .outcome-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .outcome-item {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            background: white;
            padding: 8px 10px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
        }

        .outcome-item:hover {
            box-shadow: 0 4px 12px rgba(51, 122, 183, 0.12);
            transform: translateX(3px);
        }

        .outcome-number {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: 700;
        }

        .outcome-content h4 {
            color: #337ab7;
            margin: 0 0 3px 0;
            font-size: 0.8rem;
        }

        .outcome-content p {
            color: #666;
            line-height: 1.2;
            margin: 0;
            font-size: 0.7rem;
        }

        /* 桌面端显示可视化内容，隐藏文字内容 */
        .desktop-content {
            display: grid;
        }

        .mobile-text-content {
            display: none;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .education-detail-wrapper {
                padding: 15px;
            }

            /* 移动端隐藏复杂内容，显示纯文字 */
            .desktop-content {
                display: none !important;
            }

            .mobile-text-content {
                display: block !important;
                padding: 15px 0;
            }

            .mobile-text-content p {
                font-size: 0.95rem;
                line-height: 1.6;
                color: #444;
                margin-bottom: 15px;
                text-align: justify;
            }

            .mobile-text-content p:last-child {
                margin-bottom: 0;
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

            .tech-stack {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .tech-category {
                padding: 20px;
            }

            .modules-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .module-card {
                padding: 20px;
            }

            .outcome-item {
                flex-direction: column;
                gap: 15px;
                padding: 20px;
            }

            .outcome-number {
                width: 40px;
                height: 40px;
                font-size: 1rem;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

// 自动初始化
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('education2-content');
        if (container && typeof initEducation2 === 'function') {
            setTimeout(function() {
                initEducation2();
            }, 300);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initEducation2 };
}