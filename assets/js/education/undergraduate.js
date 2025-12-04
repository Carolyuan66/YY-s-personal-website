// Education 1: Bachelor of Arts in Journalism
// Sichuan University, China

function initEducation1() {
    const container = document.getElementById('education1-content');

    if (!container) {
        console.error('Container #education1-content not found');
        return null;
    }

    container.innerHTML = '';

    const contentHTML = `
        <div class="education-detail-wrapper">
            <div class="education-header">
                <div class="header-content">
                    <div class="header-text">
                        <h2 class="institution-name">Sichuan University, China</h2>
                        <p class="gpa-info">GPA: 3.5/4.0</p>
                    </div>
                    <div class="institution-logo">
                        <img src="assets/images/sichuanuni.png" alt="Sichuan University" class="university-logo">
                    </div>
                </div>
            </div>

            <div class="education-body">
                <!-- Core Curriculum - 全宽显示在顶部 -->
                <div class="curriculum-section">
                    <h3>📚 Core Curriculum</h3>
                    <p class="section-intro">The undergraduate curriculum provided comprehensive training in both journalism theory and hands-on media production.</p>
                    
                    <div class="course-grid">
                        <div class="course-item">
                            <span class="course-icon">📰</span>
                            <span>News Theory</span>
                        </div>
                        <div class="course-item">
                            <span class="course-icon">🎤</span>
                            <span>Interviewing Techniques</span>
                        </div>
                        <div class="course-item">
                            <span class="course-icon">✍️</span>
                            <span>News Writing</span>
                        </div>
                        <div class="course-item">
                            <span class="course-icon">📝</span>
                            <span>Editorial Commentary</span>
                        </div>
                        <div class="course-item">
                            <span class="course-icon">✂️</span>
                            <span>News Editing</span>
                        </div>
                        <div class="course-item">
                            <span class="course-icon">📸</span>
                            <span>News Photography</span>
                        </div>
                    </div>
                </div>

                <!-- Skills和Experience横向排列 -->
                <div class="bottom-grid">
                    <div class="skills-section">
                        <h3>💡 Key Skills Developed</h3>
                        <div class="skills-list">
                            <div class="skill-item">
                                <span class="skill-badge">Communication</span>
                                <p>Extracting key information from complex situations and conducting effective stakeholder interviews</p>
                            </div>
                            <div class="skill-item">
                                <span class="skill-badge">Technical Production</span>
                                <p>Visual and written media training through Broadcast Theory & Operations and Television News Production</p>
                            </div>
                            <div class="skill-item">
                                <span class="skill-badge">Research & Analysis</span>
                                <p>Advanced coursework in Investigative Reporting and Mass Communication Theory</p>
                            </div>
                        </div>
                    </div>

                    <div class="experience-section">
                        <h3>🌟 Notable Experience</h3>
                        <div class="experience-card">
                            <div class="experience-header">
                                <h4>Phoenix Television - Hong Kong</h4>
                                <span class="role-badge">Competitive Internship</span>
                            </div>
                            <p class="experience-desc">Worked under the Deputy Head of Phoenix Chinese Channel in a fast-paced international broadcast environment. Enhanced adaptability and cross-cultural communication skills, resulting in a strong letter of recommendation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = contentHTML;
    addEducation1Styles();

    window.education1Instance = { type: 'education-detail', initialized: true };
    console.log('✅ Education 1 (Undergraduate) initialized');
    return true;
}

function addEducation1Styles() {
    if (document.getElementById('education1-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'education1-styles';
    styleSheet.textContent = `
        /* 覆盖全局chart-container样式 - education专用 */
        #education1-content {
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
            width: 50px;
            height: 50px;
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

        .education-body h3 {
            color: #337ab7;
            font-size: 1.15rem;
            margin: 12px 0 8px 0;
            font-weight: 600;
        }

        .education-body {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .curriculum-section {
            width: 100%;
        }

        /* Skills和Experience横向布局 */
        .bottom-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 10px;
        }

        .skills-section,
        .experience-section {
            min-width: 0;
        }

        .section-intro {
            color: #555;
            line-height: 1.4;
            margin-bottom: 10px;
            font-size: 0.9rem;
        }

        .course-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 15px;
        }

        .course-item {
            background: linear-gradient(135deg, rgba(51, 122, 183, 0.05), rgba(51, 122, 183, 0.1));
            padding: 10px 12px;
            border-radius: 6px;
            border-left: 3px solid #337ab7;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }

        .course-item:hover {
            transform: translateX(3px);
            box-shadow: 0 2px 8px rgba(51, 122, 183, 0.15);
        }

        .course-icon {
            font-size: 18px;
        }

        .skills-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .skill-item {
            background: white;
            padding: 12px 15px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
        }

        .skill-item:hover {
            box-shadow: 0 3px 12px rgba(51, 122, 183, 0.15);
            transform: translateY(-2px);
        }

        .skill-badge {
            display: inline-block;
            background: #337ab7;
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 6px;
        }

        .skill-item p {
            color: #666;
            line-height: 1.4;
            margin: 6px 0 0 0;
            font-size: 0.85rem;
        }

        .experience-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
        }

        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            flex-wrap: wrap;
            gap: 8px;
        }

        .experience-header h4 {
            margin: 0;
            font-size: 1.05rem;
            color: white;
        }

        .role-badge {
            background: rgba(255, 255, 255, 0.3);
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .experience-desc {
            line-height: 1.4;
            margin: 0;
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.85rem;
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
            .bottom-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .skills-list {
                grid-template-columns: 1fr;
            }

            .institution-name {
                font-size: 1.4rem;
            }

            .gpa-info {
                font-size: 1rem;
            }

            .education-body h3 {
                font-size: 1.1rem;
            }

            .course-grid {
                grid-template-columns: 1fr;
                gap: 10px;
            }

            .course-item {
                padding: 12px;
            }

            .experience-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

// 自动初始化
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('education1-content');
        if (container && typeof initEducation1 === 'function') {
            setTimeout(function() {
                initEducation1();
            }, 300);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initEducation1 };
}