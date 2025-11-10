// Project 5: E-commerce and AI Integration Research for Chinese SMEs
// 电子商务与AI集成研究 - 极简图片展示(只有图片和文字)

function initProject5Chart() {
    const chartDom = document.getElementById('project5-chart');

    // Check if container exists
    if (!chartDom) {
        console.error('Chart container #project5-chart not found');
        return null;
    }

    // Clear any existing content
    chartDom.innerHTML = '';

    // Create minimal image display (only image + text)
    const chartHTML = `
        <div class="project5-minimal-container">
            <!-- Main Research Poster Image -->
            <div class="poster-image-wrapper">
                <img 
                    src="assets/images/project5-poster.png" 
                    alt="E-commerce and AI Integration Research Poster"
                    class="poster-image"
                    id="poster-main-image"
                    onclick="openProject5Lightbox()"
                >
                <div class="image-hover-overlay">
                    <span class="zoom-hint">🔍 Click to enlarge</span>
                </div>
            </div>

            <!-- Optional: Tool and Status Info -->
            <div class="project-footer">
                <p class="tool-info">Tools: <span class="highlight">Academic Research, Survey Analysis</span></p>
                <p class="status-info">Status: <span class="highlight">Published</span></p>
            </div>
        </div>
    `;

    chartDom.innerHTML = chartHTML;

    // Create lightbox modal and append to body (CRITICAL: not in chart container!)
    const lightboxHTML = `
        <div id="project5-lightbox-modal" class="lightbox-modal" onclick="closeProject5Lightbox()">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-content" id="project5-lightbox-image">
            <div class="lightbox-caption">Obstacles for China's SMEs in E-commerce and AI Integration</div>
        </div>
    `;

    // Remove existing lightbox if any
    const existingLightbox = document.getElementById('project5-lightbox-modal');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    // Append lightbox directly to body
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // Add minimal styles
    addProject5MinimalStyles();

    // Save instance marker
    window.project5ChartInstance = { type: 'minimal-image', initialized: true };

    console.log('✅ Project 5 chart initialized (minimal version)');
    return true;
}

// Add minimal styles
function addProject5MinimalStyles() {
    // Check if styles already added
    if (document.getElementById('project5-minimal-styles')) {
        return;
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = 'project5-minimal-styles';
    styleSheet.textContent = `
        /* Minimal Container */
        .project5-minimal-container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Poster Image Wrapper */
        .poster-image-wrapper {
            position: relative;
            width: 100%;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .poster-image-wrapper:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            transform: translateY(-3px);
        }

        .poster-image-wrapper:hover .image-hover-overlay {
            opacity: 1;
        }

        .poster-image {
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
            background: rgba(76, 175, 80, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .zoom-hint {
            background: rgba(76, 175, 80, 0.95);
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
            color: #4caf50;
            font-weight: 600;
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
            overflow: hidden;  /* Changed from auto to hidden */
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
            color: #4caf50;
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
            .poster-image-wrapper {
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

            .poster-image-wrapper {
                box-shadow: none;
                page-break-inside: avoid;
            }
        }
    `;

    document.head.appendChild(styleSheet);
}

// Lightbox functions for Project 5
function openProject5Lightbox() {
    const modal = document.getElementById('project5-lightbox-modal');
    const img = document.getElementById('poster-main-image');
    const modalImg = document.getElementById('project5-lightbox-image');

    if (modal && img && modalImg) {
        modal.classList.add('active');
        modalImg.src = img.src;
        // Enhanced scroll lock
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
}

function closeProject5Lightbox() {
    const modal = document.getElementById('project5-lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        // Restore scroll
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }
}

// Make functions globally available
window.openProject5Lightbox = openProject5Lightbox;
window.closeProject5Lightbox = closeProject5Lightbox;

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProject5Lightbox();
    }
});

// Auto-initialize after page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('project5-chart');
        if (container && typeof initProject5Chart === 'function') {
            setTimeout(function() {
                initProject5Chart();
            }, 300);
        }
    });
}

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initProject5Chart };
}