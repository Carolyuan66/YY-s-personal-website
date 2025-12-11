/**
 * Portfolio Gallery - 摄影作品集（横向轮播版）
 * 功能：横向自动轮播、悬停暂停、lightbox查看、分类筛选
 */

// 照片数据配置
const portfolioData = {
    // 照片分类
    categories: [
        { id: 'all', name: 'All', label: '全部' },
        { id: 'landscape', name: 'Landscape', label: '风景' },
        { id: 'portrait', name: 'Close-up', label: '特写' },
        { id: 'street', name: 'Street', label: '街拍' },
        { id: 'nature', name: 'Nature', label: '自然' },
        { id: 'artistic', name: 'Artistic', label: '艺术' }
    ],

    // 照片列表
    photos: [
        { id: 1, src: 'assets/images/portfolio/1.jpg', category: 'landscape', title: 'After the storm', description: 'Sunset after a storm passes' },
        { id: 2, src: 'assets/images/portfolio/2.jpg', category: 'landscape', title: 'Between Sky and Water', description: 'Birds flying over the water' },
        { id: 3, src: 'assets/images/portfolio/3.jpg', category: 'portrait', title: 'Bloom in shadow', description: 'Yellow flower in dark background' },
        { id: 4, src: 'assets/images/portfolio/4.jpg', category: 'street', title: 'Concrete Garden', description: 'Urban street photography' },
        { id: 5, src: 'assets/images/portfolio/5.jpg', category: 'portrait', title: 'Empty Nest', description: 'Close-up of a bird cage' },
        { id: 6, src: 'assets/images/portfolio/6.jpg', category: 'artistic', title: 'Framed Solitude', description: 'View through an archway' },
        { id: 7, src: 'assets/images/portfolio/7.jpg', category: 'artistic', title: 'Liquid Geometry', description: 'Abstract ceiling lights reflection' },
        { id: 8, src: 'assets/images/portfolio/8.jpg', category: 'nature', title: 'Seasons Collide', description: 'Nature landscape photography' },
        { id: 9, src: 'assets/images/portfolio/9.jpg', category: 'portrait', title: 'Night of a Thousand Lights', description: 'Lanterns in the night' },
        { id: 10, src: 'assets/images/portfolio/10.jpg', category: 'nature', title: 'Wild Current', description: 'Rushing water through rocks' }
    ]
};

// Portfolio Carousel Gallery 类
class PortfolioCarousel {
    constructor() {
        this.currentFilter = 'all';
        this.currentPhotoIndex = 0;
        this.lightboxOpen = false;
        this.carouselInterval = null;
        this.scrollSpeed = 1; // 每次滚动的像素数
        this.scrollDelay = 30; // 滚动间隔（毫秒）
        this.isPaused = false;
        this.init();
    }

    init() {
        this.renderFilters();
        this.renderCarousel();
        this.bindEvents();
        this.startAutoScroll();
    }

    // 渲染分类筛选器
    renderFilters() {
        const filterContainer = document.getElementById('portfolio-filters');
        if (!filterContainer) return;

        const filterHTML = portfolioData.categories.map(cat => `
            <button class="portfolio-filter-btn ${cat.id === 'all' ? 'active' : ''}" 
                    data-filter="${cat.id}">
                ${cat.name}
            </button>
        `).join('');

        filterContainer.innerHTML = filterHTML;
    }

    // 渲染横向轮播
    renderCarousel(filter = 'all') {
        const carouselContainer = document.getElementById('portfolio-carousel');
        if (!carouselContainer) return;

        // 筛选照片
        const filteredPhotos = filter === 'all'
            ? portfolioData.photos
            : portfolioData.photos.filter(photo => photo.category === filter);

        // 复制照片数组以实现无限循环效果（重复3次）
        const repeatedPhotos = [...filteredPhotos, ...filteredPhotos, ...filteredPhotos];

        // 生成轮播项
        const carouselHTML = repeatedPhotos.map((photo, index) => `
            <div class="portfolio-carousel-item" data-category="${photo.category}" data-photo-id="${photo.id}">
                <div class="portfolio-item-inner">
                    <img src="${photo.src}" 
                         alt="${photo.title}" 
                         loading="lazy"
                         onerror="this.src='assets/images/placeholder.jpg'">
                    <div class="portfolio-overlay">
                        <div class="portfolio-info">
                            <h3>${photo.title}</h3>
                            <p>${photo.description}</p>
                        </div>
                        <button class="portfolio-view-btn" data-photo-id="${photo.id}">
                            <i class="fa fa-search-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        carouselContainer.innerHTML = `
            <div class="portfolio-carousel-track" id="portfolio-carousel-track">
                ${carouselHTML}
            </div>
        `;

        // 添加渐入动画
        setTimeout(() => {
            carouselContainer.classList.add('fade-in');
        }, 100);

        // 重置滚动位置到中间的一组
        const track = document.getElementById('portfolio-carousel-track');
        if (track) {
            const itemWidth = 350; // 与CSS中的宽度保持一致
            const gap = 25; // 与CSS中的gap保持一致
            track.scrollLeft = filteredPhotos.length * (itemWidth + gap);
        }
    }

    // 开始自动滚动
    startAutoScroll() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }

        this.carouselInterval = setInterval(() => {
            if (this.isPaused || this.lightboxOpen) return;

            const track = document.getElementById('portfolio-carousel-track');
            if (!track) return;

            // 平滑滚动
            track.scrollLeft += this.scrollSpeed;

            // 检查是否需要重置滚动位置（无限循环）
            const maxScroll = track.scrollWidth / 3; // 因为复制了3次
            if (track.scrollLeft >= maxScroll * 2) {
                track.scrollLeft = maxScroll;
            }
        }, this.scrollDelay);
    }

    // 停止自动滚动
    stopAutoScroll() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
            this.carouselInterval = null;
        }
    }

    // 打开Lightbox
    openLightbox(photoId) {
        const photo = portfolioData.photos.find(p => p.id === photoId);
        if (!photo) return;

        // 获取当前筛选的照片列表
        const filter = this.currentFilter;
        const filteredPhotos = filter === 'all'
            ? portfolioData.photos
            : portfolioData.photos.filter(p => p.category === filter);

        const currentIndex = filteredPhotos.findIndex(p => p.id === photoId);

        this.currentPhotoIndex = currentIndex;
        this.lightboxOpen = true;

        const lightboxHTML = `
            <div class="portfolio-lightbox" id="portfolio-lightbox">
                <div class="lightbox-overlay"></div>
                <div class="lightbox-content">
                    <button class="lightbox-close" id="lightbox-close">
                        <i class="fa fa-times"></i>
                    </button>
                    <button class="lightbox-prev" id="lightbox-prev" ${currentIndex === 0 ? 'disabled' : ''}>
                        <i class="fa fa-chevron-left"></i>
                    </button>
                    <button class="lightbox-next" id="lightbox-next" ${currentIndex === filteredPhotos.length - 1 ? 'disabled' : ''}>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                    <div class="lightbox-image-container">
                        <img src="${photo.src}" alt="${photo.title}" id="lightbox-image">
                        <div class="lightbox-caption">
                            <h3>${photo.title}</h3>
                            <p>${photo.description}</p>
                            <span class="lightbox-counter">${currentIndex + 1} / ${filteredPhotos.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lightboxHTML);

        // 添加打开动画
        setTimeout(() => {
            document.getElementById('portfolio-lightbox').classList.add('active');
        }, 10);

        this.bindLightboxEvents();
    }

    // 关闭Lightbox
    closeLightbox() {
        const lightbox = document.getElementById('portfolio-lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.remove();
                this.lightboxOpen = false;
            }, 300);
        }
    }

    // 切换Lightbox图片
    navigateLightbox(direction) {
        const filter = this.currentFilter;
        const photos = filter === 'all'
            ? portfolioData.photos
            : portfolioData.photos.filter(photo => photo.category === filter);

        let newIndex = this.currentPhotoIndex + direction;

        if (newIndex < 0) newIndex = 0;
        if (newIndex >= photos.length) newIndex = photos.length - 1;

        this.currentPhotoIndex = newIndex;
        const photo = photos[newIndex];

        // 更新图片
        const lightboxImage = document.getElementById('lightbox-image');
        const caption = document.querySelector('.lightbox-caption');
        const counter = document.querySelector('.lightbox-counter');

        if (lightboxImage) {
            lightboxImage.style.opacity = '0';
            setTimeout(() => {
                lightboxImage.src = photo.src;
                lightboxImage.alt = photo.title;
                lightboxImage.style.opacity = '1';
            }, 150);
        }

        if (caption) {
            caption.querySelector('h3').textContent = photo.title;
            caption.querySelector('p').textContent = photo.description;
        }

        if (counter) {
            counter.textContent = `${newIndex + 1} / ${photos.length}`;
        }

        // 更新按钮状态
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');

        if (prevBtn) prevBtn.disabled = newIndex === 0;
        if (nextBtn) nextBtn.disabled = newIndex === photos.length - 1;
    }

    // 绑定事件
    bindEvents() {
        // 筛选按钮事件
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('portfolio-filter-btn')) {
                const filter = e.target.dataset.filter;
                this.filterCarousel(filter);
            }

            // 查看按钮事件
            if (e.target.closest('.portfolio-view-btn')) {
                const btn = e.target.closest('.portfolio-view-btn');
                const photoId = parseInt(btn.dataset.photoId);
                this.openLightbox(photoId);
            }
        });

        // 轮播项悬停事件
        document.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.portfolio-carousel-item')) {
                this.isPaused = true;
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.closest('.portfolio-carousel-item')) {
                this.isPaused = false;
            }
        }, true);

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (this.lightboxOpen) {
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
                if (e.key === 'ArrowRight') this.navigateLightbox(1);
            }
        });
    }

    // Lightbox事件绑定
    bindLightboxEvents() {
        const closeBtn = document.getElementById('lightbox-close');
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');
        const overlay = document.querySelector('.lightbox-overlay');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeLightbox());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.navigateLightbox(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.navigateLightbox(1));
        }
    }

    // 筛选轮播
    filterCarousel(filter) {
        this.currentFilter = filter;

        // 更新按钮状态
        document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        // 淡出效果
        const carousel = document.getElementById('portfolio-carousel');
        if (carousel) {
            carousel.classList.remove('fade-in');
            setTimeout(() => {
                this.renderCarousel(filter);
                // 重新启动自动滚动
                this.startAutoScroll();
            }, 300);
        }
    }

    // 销毁实例
    destroy() {
        this.stopAutoScroll();
    }
}

// 初始化函数
function initPortfolioGallery() {
    // 确保DOM已加载
    if (document.getElementById('portfolio-carousel')) {
        // 如果已有实例，先销毁
        if (window.portfolioCarouselInstance) {
            window.portfolioCarouselInstance.destroy();
        }

        window.portfolioCarouselInstance = new PortfolioCarousel();
        console.log('Portfolio carousel initialized');
    }
}

// 导出初始化函数
if (typeof window !== 'undefined') {
    window.initPortfolioGallery = initPortfolioGallery;
}