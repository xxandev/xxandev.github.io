document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalContainer = document.getElementById('modal-container');
    const caption = document.getElementById('caption');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const zoomInfo = document.getElementById('zoom-info');

    let currentImageIndex = 0;
    let images = [];
    let currentScale = 1;
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    // Функція для завантаження JSON з списком зображень
    async function loadGalleryData() {
        try {
            // Завантажуємо JSON файл зі списком зображень
            const response = await fetch('gallery-data.json');
            if (!response.ok) {
                throw new Error('Не вдалося завантажити дані галереї');
            }

            const galleryData = await response.json();

            // Відображаємо зображення
            displayImages(galleryData.images);
        } catch (error) {
            console.error('Помилка завантаження галереї:', error);
            gallery.innerHTML = `
                        <div class="no-images">
                            <h2>Помилка завантаження</h2>
                            <p>Не вдалося завантажити дані галереї. Будь ласка, спробуйте пізніше.</p>
                        </div>
                    `;
        }
    }

    // Функція для відображення зображень
    function displayImages(imageList) {
        gallery.innerHTML = '';

        if (!imageList || imageList.length === 0) {
            gallery.innerHTML = `
                        <div class="no-images">
                            <h2>Зображення не знайдено</h2>
                            <p>У галереї немає доступних зображень.</p>
                        </div>
                    `;
            return;
        }

        imageList.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.style.animationDelay = `${index * 0.05}s`;

            const img = document.createElement('img');
            img.src = image.url;
            img.alt = image.title || `Зображення ${index + 1}`;
            img.loading = 'lazy';

            const nameDiv = document.createElement('div');
            nameDiv.className = 'image-name';
            nameDiv.textContent = image.title || `Зображення ${index + 1}`;

            img.onclick = function () {
                currentImageIndex = index;
                openModal(img.src, nameDiv.textContent);
            };

            item.appendChild(img);
            item.appendChild(nameDiv);
            gallery.appendChild(item);

            // Зберігаємо дані про зображення
            images.push({
                src: img.src,
                alt: nameDiv.textContent
            });
        });
    }

    // Відкриття модального вікна
    function openModal(src, alt) {
        modal.style.display = 'block';
        modalImg.src = src;
        caption.innerHTML = alt;
        document.body.style.overflow = 'hidden';

        // Скидаємо масштаб при відкритті нового зображення
        currentScale = 1;
        updateZoom();
    }

    // Закриття модального вікна
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Скидаємо масштаб при закритті
        currentScale = 1;
    }

    // Оновлення масштабу
    function updateZoom() {
        modalContainer.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
        zoomInfo.textContent = `${Math.round(currentScale * 100)}%`;

        // Показуємо інформацію про масштаб на короткий час
        zoomInfo.style.opacity = '1';
        setTimeout(() => {
            zoomInfo.style.opacity = '0';
        }, 1500);
    }

    // Збільшення масштабу
    function zoomIn() {
        currentScale += 0.1;
        if (currentScale > 3) currentScale = 3;
        updateZoom();
    }

    // Зменшення масштабу
    function zoomOut() {
        currentScale -= 0.1;
        if (currentScale < 0.5) currentScale = 0.5;
        updateZoom();
    }

    // Скидання масштабу
    function resetZoom() {
        currentScale = 1;
        updateZoom();
    }

    // Перехід до наступного зображення
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex].src;
        caption.innerHTML = images[currentImageIndex].alt;
        resetZoom();
    }

    // Перехід до попереднього зображення
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentImageIndex].src;
        caption.innerHTML = images[currentImageIndex].alt;
        resetZoom();
    }

    // Обробка прокрутки миші для масштабування
    modalContainer.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });

    // Обробники подій
    closeBtn.onclick = closeModal;

    prevBtn.onclick = function (e) {
        e.stopPropagation();
        prevImage();
    };

    nextBtn.onclick = function (e) {
        e.stopPropagation();
        nextImage();
    };

    modal.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener('keydown', function (event) {
        if (modal.style.display === 'block') {
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            } else if (event.key === '+' || event.key === '=') {
                zoomIn();
            } else if (event.key === '-' || event.key === '_') {
                zoomOut();
            } else if (event.key === '0') {
                resetZoom();
            }
        }
    });

    // Завантажуємо дані галереї
    loadGalleryData();
});
