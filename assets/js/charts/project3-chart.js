// Project 3: Municipal Infrastructure Project Management
// 修复版本 - 限制整体容器高度

function initProject3Chart() {
    const chartDom = document.getElementById('project3-chart');

    if (!chartDom) {
        console.error('Chart container #project3-chart not found');
        return null;
    }

    chartDom.innerHTML = '';

    chartDom.innerHTML = `
        <div class="gantt-image-wrapper">
            <img 
                src="assets/images/project3-gantt.png" 
                alt="Municipal Infrastructure Project Gantt Chart"
                class="gantt-chart-image"
                id="gantt-main-image"
                onclick="openLightbox()"
            >
            <div class="image-hover-overlay">
                <span class="zoom-hint">🔍 Click to enlarge</span>
            </div>
        </div>
    `;

    const lightboxHTML = `
        <div id="lightbox-modal" class="lightbox-modal" onclick="closeLightbox()">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-content" id="lightbox-image">
            <div class="lightbox-caption">Municipal Infrastructure Project - Full Timeline</div>
        </div>
    `;

    const existingLightbox = document.getElementById('lightbox-modal');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    addMinimalStyles();

    window.project3ChartInstance = { type: 'minimal-image', initialized: true };
    console.log('✅ Project 3 chart initialized');
    return true;
}

function addMinimalStyles() {
    if (document.getElementById('project3-minimal-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'project3-minimal-styles';
    styleSheet.textContent = `
        /* 关键：限制图表容器本身的高度 */
        .project3-minimal-container {
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 0;
        }

        .gantt-image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            max-height: none;
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

        .gantt-image-wrapper:hover {
            box-shadow: none;
            transform: translateY(-2px);
        }

        .gantt-image-wrapper:hover .image-hover-overlay {
            opacity: 1;
        }

        .gantt-chart-image {
            width: 100%;
            height: auto;
            max-height: 100%;
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

        .zoom-hint {
            background: rgba(51, 122, 183, 0.95);
            color: white;
            padding: 12px 28px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        // .project-footer {
        //     text-align: center;
        //     margin-top: 20px;
        //     padding-top: 15px;
        //     border-top: 1px solid #e0e0e0;
        // }
        //
        // .project-footer p {
        //     margin: 8px 0;
        //     color: #666;
        //     font-size: 14px;
        // }
        //
        // .project-footer .highlight {
        //     color: #337ab7;
        //     font-weight: 600;
        // }

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

        .lightbox-caption {
            text-align: center;
            color: white;
            padding: 20px;
            margin-top: 15px;
            font-size: 16px;
        }

        /* 响应式断点 */
        @media (max-width: 1366px) {
            // .project3-minimal-container {
            //     max-width: 95%;
            //     padding: 0 20px;
            // }
            
            .gantt-image-wrapper {
                max-height: 450px;
            }
            
            .gantt-chart-image {
                max-height: 450px;
            }
        }

        @media (max-width: 1024px) {
            #project3-chart {
                max-height: 65vh !important;
            }
            
            .project3-minimal-container {
                max-width: 90%;
                padding: 0 15px;
            }
            
            .gantt-image-wrapper {
                max-height: 400px;
            }
            
            .gantt-chart-image {
                max-height: 400px;
            }
        }

        @media (max-width: 768px) {
            #project3-chart {
                max-height: 60vh !important;
            }
            
            .project3-minimal-container {
                padding: 0 12px;
            }
            
            .gantt-image-wrapper {
                border-radius: 8px;
                max-height: 350px;
            }
            
            .gantt-chart-image {
                max-height: 350px;
            }

            .zoom-hint {
                padding: 10px 20px;
                font-size: 13px;
            }

            .close-lightbox {
                top: 10px;
                right: 15px;
                font-size: 36px;
            }

            .project-footer {
                margin-top: 15px;
            }

            .project-footer p {
                font-size: 13px;
            }
        }

        @media (max-width: 576px) {
            .project3-minimal-container {
                padding: 0 8px;
            }
            
            .gantt-image-wrapper {
                border-radius: 6px;
                max-height: 300px;
            }
            
            .gantt-chart-image {
                max-height: 300px;
            }
            
            .zoom-hint {
                padding: 8px 16px;
                font-size: 12px;
            }
        }

        @media print {
            .lightbox-modal,
            .image-hover-overlay {
                display: none !important;
            }

            .gantt-image-wrapper {
                box-shadow: none;
                page-break-inside: avoid;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

function openLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('gantt-main-image');
    const modalImg = document.getElementById('lightbox-image');

    if (modal && img && modalImg) {
        modal.classList.add('active');
        modalImg.src = img.src;

        // 禁用body滚动
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // 禁用fullPage.js滚动
        if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.setAllowScrolling) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.remove('active');

        // 恢复body滚动
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';

        // 恢复fullPage.js滚动
        if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.setAllowScrolling) {
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }
    }
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('project3-chart');
        if (container && typeof initProject3Chart === 'function') {
            setTimeout(function() {
                initProject3Chart();
            }, 300);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
}