// Project 4: Customer Segmentation Analysis

function initProject4Chart() {
    const chartDom = document.getElementById('project4-chart');

    if (!chartDom) {
        console.error('Chart container #project4-chart not found');
        return null;
    }

    chartDom.innerHTML = '';

    chartDom.innerHTML = `
        <div class="dashboard-image-wrapper">
            <img 
                src="assets/images/project4-dashboard.png" 
                alt="Customer Segmentation Dashboard"
                class="dashboard-image"
                id="dashboard-main-image"
            >
            <div class="image-hover-overlay">
                <div class="overlay-buttons">
                    <span class="zoom-hint" onclick="openProject4Lightbox()">🔍 Click to enlarge</span>
                    <a href="https://public.tableau.com/app/profile/ye.yuan1114/viz/Busan543GroupWork/Dashboard1" 
                       target="_blank" 
                       class="tableau-btn"
                       onclick="event.stopPropagation()">
                        📊 View Tableau Dashboard
                    </a>
                </div>
            </div>
        </div>
        <div class="mobile-button-group">
            <button class="mobile-enlarge-btn" id="project4-enlarge-btn">
                🔍 Click to Enlarge
            </button>
            <a href="https://public.tableau.com/app/profile/ye.yuan1114/viz/Busan543GroupWork/Dashboard1" 
               target="_blank" 
               class="mobile-tableau-btn">
                📊 View Tableau
            </a>
        </div>
    `;

    const lightboxHTML = `
        <div id="project4-lightbox-modal" class="lightbox-modal" onclick="closeProject4Lightbox()">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-content" id="project4-lightbox-image">
        </div>
    `;

    const existingLightbox = document.getElementById('project4-lightbox-modal');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    addProject4MinimalStyles();

    // 添加图片点击事件 - 仅桌面端
    const dashboardImage = document.getElementById('dashboard-main-image');
    if (dashboardImage) {
        dashboardImage.addEventListener('click', function() {
            if (window.innerWidth > 768) {
                openProject4Lightbox();
            }
        });
    }

    // 添加移动端按钮点击事件
    const mobileEnlargeBtn = document.getElementById('project4-enlarge-btn');
    if (mobileEnlargeBtn) {
        mobileEnlargeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openProject4Lightbox();
        });
    }

    window.project4ChartInstance = { type: 'minimal-image', initialized: true };
    console.log('✅ Project 4 chart initialized');
    return true;
}

function addProject4MinimalStyles() {
    if (document.getElementById('project4-minimal-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'project4-minimal-styles';
    styleSheet.textContent = `
        .project4-minimal-container {
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 0;
        }
    
        .dashboard-image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            background: transparent;
            border-radius: 0;
            box-shadow: none;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .dashboard-image-wrapper:hover {
            box-shadow: none;
            transform: translateY(-2px);
        }
    
        .dashboard-image-wrapper:hover .image-hover-overlay {
            opacity: 1;
        }
    
        .dashboard-image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: contain;
        }
    
        .image-hover-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(51, 122, 183, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        
        .overlay-buttons {
            display: flex;
            gap: 15px;
            flex-direction: row;
            align-items: center;
            pointer-events: auto;
        }
        
        .zoom-hint, .tableau-btn {
            background: rgba(51, 122, 183, 0.95);
            color: white;
            padding: 12px 28px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
    
        .zoom-hint:hover, .tableau-btn:hover {
            background: rgba(51, 122, 183, 1);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }
    
        /* 移动端按钮组 - 基础样式 */
        .mobile-button-group {
            display: none;
            flex-direction: column;
            gap: 8px;
            margin-top: 15px;
            padding: 0;
            width: 100%;
            box-sizing: border-box;
        }
        
        .mobile-enlarge-btn, .mobile-tableau-btn {
            width: calc(100% - 20px);
            padding: 0 10px;
            background: #337ab7;
            color: white !important;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(51, 122, 183, 0.3);
            text-decoration: none;
            text-align: center;
            display: block;
            position: relative;
            z-index: 100;
            box-sizing: border-box;
        }
        
        .mobile-enlarge-btn:active, .mobile-tableau-btn:active {
            background: #23527c;
            transform: scale(0.98);
        }
    
        /* Lightbox Modal */
        .lightbox-modal {
            display: none;
            position: fixed !important;
            z-index: 9999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.95);
            animation: fadeIn 0.3s ease;
            inset: 0 !important;
        }
    
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    
        .lightbox-modal.active {
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 10px;
        }
    
        .lightbox-content {
            max-width: 98vw;
            max-height: 95vh;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 4px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
            animation: zoomIn 0.3s ease;
        }
    
        @keyframes zoomIn {
            from { 
                transform: scale(0.8); 
                opacity: 0; 
            }
            to { 
                transform: scale(1); 
                opacity: 1; 
            }
        }
    
        .close-lightbox {
            position: absolute;
            top: 20px;
            right: 35px;
            color: white;
            font-size: 48px;
            font-weight: 300;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10000;
        }
    
        .close-lightbox:hover {
            color: #337ab7;
            transform: scale(1.1);
        }
    
        @media (max-width: 1366px) {
            .project4-minimal-container {
                max-width: 95%;
                padding: 0 20px;
            }
        }
    
        @media (max-width: 1024px) {
            .project4-minimal-container {
                max-width: 90%;
                padding: 0 15px;
            }
        }
    
        @media (max-width: 768px) {
        .project4-minimal-container {
            padding: 0 12px 10px 12px;
        }
        
        .dashboard-image-wrapper {
            border-radius: 8px;
            max-height: 320px !important;
            min-height: auto;
            cursor: default;
        }
        
        .dashboard-image {
            max-height: 320px !important;
            min-height: auto;
            height: auto !important;
        }
    
        /* 移动端隐藏hover overlay */
        .image-hover-overlay {
            display: none !important;
        }
    
        /* 移动端显示按钮组 */
        .mobile-button-group {
            display: flex !important;
            flex-direction: column !important;
            margin-top: 6px;
            gap: 8px;
            padding: 0;
            width: 100%;
        }
       
        .mobile-enlarge-btn, .mobile-tableau-btn {
            font-size: 13px;
            padding: 10px 16px;
            width: calc(100% - 20px);
            margin: 0 10px;
        }
    
        .close-lightbox {
            top: 10px;
            right: 15px;
            font-size: 36px;
        }
    }
    
    @media (max-width: 576px) {
        .project4-minimal-container {
            padding: 0 8px 8px 8px;
        }
        
        .dashboard-image-wrapper {
            border-radius: 6px;
            max-height: 280px !important;
            min-height: auto;
        }
        
        .dashboard-image {
            max-height: 280px !important;
            min-height: auto;
            height: auto !important;
        }
    
        .mobile-button-group {
            display: flex !important;
            flex-direction: column !important;
            margin-top: 6px;
            gap: 8px;
            padding: 0;
            width: 100%;
        }
    
        .mobile-enlarge-btn, .mobile-tableau-btn {
            padding: 9px 14px;
            font-size: 12px;
            width: calc(100% - 16px);
            margin: 0 8px;
        }
    }
        
        /* 桌面端明确隐藏按钮组 */
        @media (min-width: 769px) {
            .mobile-button-group {
                display: none !important;
            }
        }
    
        @media print {
            .lightbox-modal,
            .image-hover-overlay,
            .mobile-button-group {
                display: none !important;
            }
    
            .dashboard-image-wrapper {
                box-shadow: none;
                page-break-inside: avoid;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

function openProject4Lightbox() {
    const modal = document.getElementById('project4-lightbox-modal');
    const img = document.getElementById('dashboard-main-image');
    const modalImg = document.getElementById('project4-lightbox-image');

    if (modal && img && modalImg) {
        modal.classList.add('active');
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // 禁用fullPage.js滚动
        if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.setAllowScrolling) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
    }
}

function closeProject4Lightbox() {
    const modal = document.getElementById('project4-lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';

        // 恢复fullPage.js滚动
        if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.setAllowScrolling) {
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }
    }
}

window.openProject4Lightbox = openProject4Lightbox;
window.closeProject4Lightbox = closeProject4Lightbox;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProject4Lightbox();
    }
});

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('project4-chart');
        if (container && typeof initProject4Chart === 'function') {
            setTimeout(function() {
                initProject4Chart();
            }, 300);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initProject4Chart };
}