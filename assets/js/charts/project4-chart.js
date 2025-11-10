// Project 4: Customer Segmentation and Marketing Campaign Analysis
// 客户细分和营销活动分析 - 极简图片展示(只有图片和文字)

function initProject4Chart() {
    const chartDom = document.getElementById('project4-chart');

    // Check if container exists
    if (!chartDom) {
        console.error('Chart container #project4-chart not found');
        return null;
    }

    // Clear any existing content
    chartDom.innerHTML = '';

    // Create minimal image display (only image + text)
    const chartHTML = `
        <div class="project4-minimal-container">
            <!-- Main Dashboard Image -->
            <div class="dashboard-image-wrapper">
                <img 
                    src="assets/images/project4-dashboard.png" 
                    alt="Customer Segmentation Dashboard"
                    class="dashboard-image"
                    id="dashboard-main-image"
                    onclick="openProject4Lightbox()"
                >
                <div class="image-hover-overlay">
                    <span class="zoom-hint">🔍 Click to enlarge</span>
                </div>
            </div>

            <!-- Optional: Tool and Status Info -->
            <div class="project-footer">
                <p class="tool-info">Tools: <span class="highlight">Tableau, K-means Clustering</span></p>
                <p class="status-info">Status: <span class="highlight">Completed</span></p>
            </div>
        </div>

        <!-- Lightbox Modal for full-screen view -->
        <div id="project4-lightbox-modal" class="lightbox-modal" onclick="closeProject4Lightbox()">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-content" id="project4-lightbox-image">
            <div class="lightbox-caption">Customer Segmentation & Marketing Campaign Analysis</div>
        </div>
    `;

    chartDom.innerHTML = chartHTML;

    // Add minimal styles
    addProject4MinimalStyles();

    // Save instance marker
    window.project4ChartInstance = { type: 'minimal-image', initialized: true };

    console.log('✅ Project 4 chart initialized (minimal version)');
    return true;
}

// Add minimal styles
function addProject4MinimalStyles() {
    // Check if styles already added
    if (document.getElementById('project4-minimal-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'project4-minimal-styles';
    styleSheet.textContent = `
        /* Minimal Container */
        .project4-minimal-container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Dashboard Image Wrapper */
        .dashboard-image-wrapper {
            position: relative;
            width: 100%;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .dashboard-image-wrapper:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            transform: translateY(-3px);
        }

        .dashboard-image-wrapper:hover .image-hover-overlay {
            opacity: 1;
        }

        .dashboard-image {
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
            background: rgba(255, 152, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .zoom-hint {
            background: rgba(255, 152, 0, 0.95);
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
            color: #ff9800;
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
            color: #ff9800;
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
            .dashboard-image-wrapper {
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

            .dashboard-image-wrapper {
                box-shadow: none;
                page-break-inside: avoid;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

// Lightbox functions for Project 4
function openProject4Lightbox() {
    const modal = document.getElementById('project4-lightbox-modal');
    const img = document.getElementById('dashboard-main-image');
    const modalImg = document.getElementById('project4-lightbox-image');

    if (modal && img && modalImg) {
        modal.classList.add('active');
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden';
    }
}

function closeProject4Lightbox() {
    const modal = document.getElementById('project4-lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make functions globally available
window.openProject4Lightbox = openProject4Lightbox;
window.closeProject4Lightbox = closeProject4Lightbox;

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProject4Lightbox();
    }
});

// Auto-initialize after page load
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

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initProject4Chart };
}