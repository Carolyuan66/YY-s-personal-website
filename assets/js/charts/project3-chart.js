// Project 3: Municipal Infrastructure Project Management (Minimal Image Display)
// 市政基础设施项目管理 - 极简图片展示（只有图片和文字）

function initProject3Chart() {
    const chartDom = document.getElementById('project3-chart');

    // Check if container exists
    if (!chartDom) {
        console.error('Chart container #project3-chart not found');
        return null;
    }

    // Clear any existing content
    chartDom.innerHTML = '';

    // Create minimal image display (only image + text)
    const chartHTML = `
        <div class="project3-minimal-container">
            <!-- Main Gantt Chart Image -->
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

            <!-- Optional: Tool and Status Info -->
            <div class="project-footer">
                <p class="tool-info">Tools: <span class="highlight">ECharts, Gantt Chart</span></p>
                <p class="status-info">Status: <span class="highlight">Completed</span></p>
            </div>
        </div>

        <!-- Lightbox Modal for full-screen view -->
        <div id="lightbox-modal" class="lightbox-modal" onclick="closeLightbox()">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-content" id="lightbox-image">
            <div class="lightbox-caption">Municipal Infrastructure Project - Full Timeline</div>
        </div>
    `;

    chartDom.innerHTML = chartHTML;

    // Add minimal styles
    addMinimalStyles();

    // Save instance marker
    window.project3ChartInstance = { type: 'minimal-image', initialized: true };

    console.log('✅ Project 3 chart initialized (minimal version)');
    return true;
}

// Add minimal styles
function addMinimalStyles() {
    // Check if styles already added
    if (document.getElementById('project3-minimal-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'project3-minimal-styles';
    styleSheet.textContent = `
        /* Minimal Container */
        .project3-minimal-container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Gantt Image Wrapper */
        .gantt-image-wrapper {
            position: relative;
            width: 100%;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .gantt-image-wrapper:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            transform: translateY(-3px);
        }

        .gantt-image-wrapper:hover .image-hover-overlay {
            opacity: 1;
        }

        .gantt-chart-image {
            width: 100%;
            height: auto;
            display: block;
        }

        /* Hover Overlay */
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

        /* Project Footer (Tool and Status Info) */
        .project-footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #e0e0e0;
        }

        .project-footer p {
            margin: 8px 0;
            color: #666;
            font-size: 14px;
        }

        .project-footer .highlight {
            color: #337ab7;
            font-weight: 600;
        }

        /* Lightbox Modal */
        .lightbox-modal {
            display: none;
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.95);
            animation: fadeIn 0.3s ease;
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
        
        /* Force full viewport coverage */
        .lightbox-modal {
            position: fixed !important;
            inset: 0 !important;
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

        /* Responsive Design */
        @media (max-width: 768px) {
            .gantt-image-wrapper {
                border-radius: 8px;
            }

            .zoom-hint {
                padding: 10px 20px;
                font-size: 13px;
            }

            .lightbox-content {
                max-width: 98%;
                max-height: 80vh;
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

        /* Print Styles */
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

// Lightbox functions
function openLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('gantt-main-image');
    const modalImg = document.getElementById('lightbox-image');

    if (modal && img && modalImg) {
        modal.classList.add('active');
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make functions globally available
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Auto-initialize after page load
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

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initProject3Chart };
}