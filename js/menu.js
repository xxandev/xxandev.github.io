const projects = [
    {
        id: 1,
        title: "Інтернет-магазин",
        description: "Повнофункціональний інтернет-магазин з корзиною, фільтрами та платіжною системою.",
        tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        category: "web",
        link: "#"
    },
    {
        id: 2,
        title: "Мобільний додаток для збору коштів",
        description: "Додаток для iOS та Android для збору коштів на благодійні цілі.",
        tags: ["React Native", "Firebase", "UI/UX"],
        category: "mobile",
        link: "#"
    },
    {
        id: 3,
        title: "Портфоліо сайт",
        description: "Сучасний адаптивний сайт-портфоліо для фотографа з галереєю робіт.",
        tags: ["HTML", "CSS", "JavaScript", "GSAP"],
        category: "web",
        link: "#"
    },
    {
        id: 4,
        title: "Фінансовий трекер",
        description: "Додаток для відстеження витрат та доходів з аналітикою та звітами.",
        tags: ["Vue.js", "Express", "MongoDB"],
        category: "web",
        link: "#"
    },
    {
        id: 5,
        title: "UI Kit для мобільних додатків",
        description: "Комплект інтерфейсних елементів для створення мобільних додатків.",
        tags: ["Figma", "UI Design", "Design System"],
        category: "design",
        link: "#"
    },
    {
        id: 6,
        title: "2D гра на JavaScript",
        description: "Класична аркадна гра, розроблена на чистому JavaScript з використанням Canvas.",
        tags: ["JavaScript", "Canvas", "Game Development"],
        category: "game",
        link: "#"
    },
    {
        id: 7,
        title: "Чат-бот для Telegram",
        description: "Інтерактивний чат-бот для Telegram з функціями розпізнавання мови.",
        tags: ["Python", "Telegram API", "NLP"],
        category: "web",
        link: "#"
    },
    {
        id: 8,
        title: "Система управління завданнями",
        description: "Веб-додаток для управління проектами та завданнями з командною роботою.",
        tags: ["Angular", "TypeScript", "MySQL"],
        category: "web",
        link: "#"
    },
    {
        id: 9,
        title: "Додаток для медитації",
        description: "Мобільний додаток з керованими медитаціями та трекінгом прогресу.",
        tags: ["Flutter", "Dart", "Audio Processing"],
        category: "mobile",
        link: "#"
    },
    {
        id: 10,
        title: "Візуалізація алгоритмів",
        description: "Інструмент для візуалізації роботи алгоритмів сортування та пошуку.",
        tags: ["React", "D3.js", "Algorithms"],
        category: "web",
        link: "#"
    },
    {
        id: 11,
        title: "Дизайн системи для e-commerce",
        description: "Повний дизайн системи для інтернет-магазину від іконок до компонентів.",
        tags: ["Figma", "Design System", "UI/UX"],
        category: "design",
        link: "#"
    },
    {
        id: 12,
        title: "Погодний додаток",
        description: "Додаток для перегляду погоди з прогнозом на 7 днів та детальною статистикою.",
        tags: ["React Native", "API", "Geolocation"],
        category: "mobile",
        link: "#"
    },
    {
        id: 13,
        title: "Блог платформа",
        description: "Сучасна платформа для ведення блогу з редактором Markdown та коментарями.",
        tags: ["Next.js", "GraphQL", "MongoDB"],
        category: "web",
        link: "#"
    },
    {
        id: 14,
        title: "3D гра на Unity",
        description: "Невелика 3D гра з відкритим світом та основним сюжетом.",
        tags: ["Unity", "C#", "3D Modeling"],
        category: "game",
        link: "#"
    },
    {
        id: 15,
        title: "Архітектура програмного забезпечення",
        description: "Проектування архітектури для великого корпоративного додатку.",
        tags: ["UML", "System Design", "Documentation"],
        category: "design",
        link: "#"
    },
    {
        id: 16,
        title: "Віртуальна галерея мистецтва",
        description: "Інтерактивна віртуальна галерея з можливістю 3D туру.",
        tags: ["Three.js", "WebGL", "3D"],
        category: "web",
        link: "#"
    },
    {
        id: 17,
        title: "Додаток для вивчення мов",
        description: "Мобільний додаток для вивчення іноземних мов з інтерактивними вправами.",
        tags: ["Kotlin", "Firebase", "Speech Recognition"],
        category: "mobile",
        link: "#"
    },
    {
        id: 18,
        title: "Аналітика соціальних мереж",
        description: "Система для аналізу активності в соціальних мережах та генерації звітів.",
        tags: ["Python", "Data Analysis", "API"],
        category: "web",
        link: "#"
    },
    {
        id: 19,
        title: "Дизайн мобильного додатку для фітнесу",
        description: "Повний дизайн фітнес-додатку з трекінгом тренувань та харчування.",
        tags: ["UI/UX", "Figma", "Prototyping"],
        category: "design",
        link: "#"
    },
    {
        id: 20,
        title: "Казуальна мобільна гра",
        description: "Проста казуальна гра для мобільних пристроїв з системою досягнень.",
        tags: ["Unity", "C#", "Mobile Games"],
        category: "game",
        link: "#"
    },
    {
        id: 21,
        title: "Платформа для онлайн-курсів",
        description: "Повноцінна платформа для навчання з відео-лекціями та тестами.",
        tags: ["Laravel", "Vue.js", "MySQL"],
        category: "web",
        link: "#"
    },
    {
        id: 22,
        title: "Додаток для зберігання паролів",
        description: "Безпечний додаток для зберігання та генерації паролів з шифруванням.",
        tags: ["Swift", "Core Data", "Security"],
        category: "mobile",
        link: "#"
    },
    {
        id: 23,
        title: "Інтерактивна інфографіка",
        description: "Серія інтерактивних інфографік для веб-сайту новин.",
        tags: ["D3.js", "Data Visualization", "SVG"],
        category: "design",
        link: "#"
    },
    {
        id: 24,
        title: "Текстова пригода",
        description: "Інтерактивна текстова гра з різними сюжетними лініями та кінцівками.",
        tags: ["JavaScript", "Node.js", "Interactive Fiction"],
        category: "game",
        link: "#"
    },
    {
        id: 25,
        title: "Система бронювання квитків",
        description: "Онлайн-система для бронювання та покупки квитків на події.",
        tags: ["Ruby on Rails", "PostgreSQL", "Payment Gateway"],
        category: "web",
        link: "#"
    },
    {
        id: 26,
        title: "Додаток для зустрічей",
        description: "Додаток для планування зустрічей з інтеграцією календаря та сповіщеннями.",
        tags: ["Java", "Android SDK", "Google Calendar API"],
        category: "mobile",
        link: "#"
    },
    {
        id: 27,
        title: "Ребрендинг компанії",
        description: "Повний ребрендинг технологічної компанії включаючи логотип та фірмовий стиль.",
        tags: ["Branding", "Logo Design", "Identity"],
        category: "design",
        link: "#"
    },
    {
        id: 28,
        title: "Шутер від першої особи",
        description: "Невеликий FPS з мультиплеєром та кількома режимами гри.",
        tags: ["Unreal Engine", "C++", "Multiplayer"],
        category: "game",
        link: "#"
    },
    {
        id: 29,
        title: "Соціальна мережа для музикантів",
        description: "Платформа для спілкування та співпраці музикантів.",
        tags: ["MERN Stack", "WebAudio API", "WebSockets"],
        category: "web",
        link: "#"
    },
    {
        id: 30,
        title: "Додаток для здоров'я",
        description: "Додаток для відстеження стану здоров'я з інтеграцією з медичними гаджетами.",
        tags: ["React Native", "HealthKit", "Data Visualization"],
        category: "mobile",
        link: "#"
    }
];

// Функція для відображення проектів
function renderProjects(projectsToRender) {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';

    if (projectsToRender.length === 0) {
        container.innerHTML = '<div class="no-projects">Проектів не знайдено</div>';
        return;
    }

    projectsToRender.forEach(project => {
        const projectEl = document.createElement('div');
        projectEl.className = 'project-card';
        projectEl.dataset.category = project.category;

        projectEl.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        Детальніше
                    </a>
                `;

        container.appendChild(projectEl);
    });
}

// Функція для фільтрації проектів
function filterProjects() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchText) ||
            project.description.toLowerCase().includes(searchText) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchText));

        const matchesFilter = activeFilter === 'all' || project.category === activeFilter;

        return matchesSearch && matchesFilter;
    });

    renderProjects(filteredProjects);
}

// Ініціалізація сторінки
document.addEventListener('DOMContentLoaded', () => {
    // Відобразити всі проекти спочатку
    renderProjects(projects);

    // Додати обробники подій для пошуку
    document.getElementById('searchInput').addEventListener('input', filterProjects);

    // Додати обробники подій для фільтрів
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects();
        });
    });

    // Плавна прокрутка до верху
    document.querySelector('.scroll-to-top').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Оптимізація для мобільних пристроїв
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Оптимізація продуктивності для старих пристроїв
    if (!('IntersectionObserver' in window)) {
        // Fallback для браузерів без підтримки Intersection Observer
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
            project.style.animation = 'none';
            project.style.opacity = '1';
        });
    }
});