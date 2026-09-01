/* ==========================================================================
   SmartLearning - Header, Sidebar & Slide-in Panels Navigation Logic
   ========================================================================== */

// دالة حقن الهيدر والسايدبار عند جاهزية الصفحة
function initHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    // حقن كود الـ HTML للهيدر والسايدبار مع نظام الألواح المنزلقة (Slide-in Panels)
    headerPlaceholder.innerHTML = `
        <header>
            <div class="container">
                <div class="header-right">
                    <!-- زر العودة للخلف (Back Button) -->
                    <button class="back-btn" id="backBtn" aria-label="عودة للخلف" onclick="goBack()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                    
                    <!-- شعار المنصة (Logo) -->
                    <a href="#" class="logo" onclick="navigateToHome(event)">
                        <div class="logo-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                            </svg>
                        </div>
                        <span>SmartLearning</span>
                    </a>
                </div>

                <div class="header-left">
                    <!-- زر تبديل الوضع (Dark/Light Switcher) -->
                    <button class="theme-toggle" id="themeToggle" aria-label="تبديل الوضع الداكن والفاتح" onclick="toggleTheme()">
                        <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </button>

                    <!-- زر القائمة الجانبية (Hamburger Menu) -->
                    <button class="hamburger-menu" id="hamburgerBtn" aria-label="القائمة الجانبية" onclick="toggleSidebar(true)">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </header>

        <!-- الغطاء الشفاف والسايدبار -->
        <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar(false)"></div>
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <div class="logo-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                        </svg>
                    </div>
                    <span>SmartLearning</span>
                </div>
                <button class="close-sidebar" onclick="toggleSidebar(false)" aria-label="إغلاق القائمة">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <!-- حاوية الألواح المنزلقة للتصفح الاحترافي السلس -->
            <div class="sidebar-panels-wrapper">
                
                <!-- اللوح الأول: القائمة الرئيسية وقائمة تصفح الصفوف -->
                <div class="sidebar-panel active" id="panel-main">
                    <nav class="panel-menu">
                        <a href="#" class="panel-menu-item active" onclick="navigateToHome(event)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            الرئيسية
                        </a>
                        <a href="wheel.html" class="panel-menu-item" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2v20M2 12h20"></path>
                            </svg>
                            🎯 عجلة الأسماء التفاعلية
                        </a>
                        <a href="report.html" class="panel-menu-item" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            📋 تقرير الاستراتيجية
                        </a>
                        <a href="#gradesSection" class="panel-menu-item" onclick="scrollToSection(event, 'gradesSection')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            الصفوف الدراسية
                        </a>
                        <a href="#" class="panel-menu-item" onclick="openContactModal(event)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            تواصل معنا
                        </a>
                    </nav>
                    <div class="panel-title">تصفح المناهج</div>
                    <div class="panel-list" id="sidebar-grades-list">
                        <!-- سيتم توليد الصفوف هنا ديناميكياً -->
                    </div>
                </div>

                <!-- اللوح الثاني: الفصول الدراسية للصف الدراسي المحدد -->
                <div class="sidebar-panel shifted-left" id="panel-terms">
                    <div class="panel-header">
                        <button class="panel-back-btn" onclick="slideBackToMain()" aria-label="عودة للقائمة الرئيسية">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                        <div class="panel-header-title" id="panel-terms-title">
                            الفصول الدراسية
                        </div>
                    </div>
                    <div class="panel-list" id="sidebar-terms-list">
                        <!-- سيتم توليد الفصول هنا عند اختيار صف -->
                    </div>
                </div>

                <!-- اللوح الثالث: الوحدات الدراسية للفصل الدراسي المحدد -->
                <div class="sidebar-panel shifted-left" id="panel-units">
                    <div class="panel-header">
                        <button class="panel-back-btn" onclick="slideBackToTerms()" aria-label="عودة للفصول الدراسية">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                        <div class="panel-header-title" id="panel-units-title">
                            الوحدات الدراسية
                        </div>
                    </div>
                    <div class="panel-list" id="sidebar-units-list">
                        <!-- سيتم توليد الوحدات هنا عند اختيار فصل -->
                    </div>
                </div>

            </div>

            <div class="sidebar-footer">
                <p>SmartLearning</p>
                <p>منصة تفاعلية مميزة لتسهيل وصول الطلاب للدروس المقررة.</p>
            </div>
        </aside>
    `;

    // تهيئة مظهر التطبيق
    initTheme();
    // توليد قائمة الصفوف الأولية باللوح الرئيسي
    renderSidebarGrades();
    
    // المزامنة: إظهار زر الرجوع بالهيدر إذا كانت تفاصيل صف مفتوحة بالفعل
    if (window.selectedGradeId) {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) backBtn.classList.add('show');
    }
}

// فحص الجاهزية للتحميل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
} else {
    initHeader();
}

/* ==========================================================================
   دوال التحكم والتحريك والتنقل
   ========================================================================== */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function toggleSidebar(open) {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (!sidebar || !sidebarOverlay) return;

    if (open) {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // إعادة تهيئة الألواح المنزلقة بعد إغلاق القائمة لتكون جاهزة للمرة القادمة
        setTimeout(() => {
            const panelMain = document.getElementById('panel-main');
            const panelTerms = document.getElementById('panel-terms');
            const panelUnits = document.getElementById('panel-units');
            if (panelMain && panelTerms && panelUnits) {
                panelMain.className = 'sidebar-panel active';
                panelTerms.className = 'sidebar-panel shifted-left';
                panelUnits.className = 'sidebar-panel shifted-left';
            }
        }, 350);
    }
}

// توليد بطاقات الصفوف داخل اللوح الأول
function renderSidebarGrades() {
    const gradesList = document.getElementById('sidebar-grades-list');
    if (!gradesList || !window.gradesData) return;

    gradesList.innerHTML = '';

    window.gradesData.forEach(grade => {
        const item = document.createElement('div');
        item.className = 'panel-item';
        item.onclick = () => showGradeTerms(grade.id);
        item.innerHTML = `
            <div class="panel-item-left">
                <span class="panel-item-icon">${grade.icon}</span>
                <span>${grade.name}</span>
            </div>
            <!-- سهم يشير لليسار في اتجاه RTL للملاحة للأمام -->
            <svg class="panel-item-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        `;
        gradesList.appendChild(item);
    });
}

// الانتقال للوح الثاني وعرض فصول الصف المختار
function showGradeTerms(gradeId) {
    const grade = window.gradesData.find(g => g.id === gradeId);
    if (!grade) return;

    // المزامنة: تحديث محتوى الصفحة الرئيسية بالخلف
    if (typeof window.selectGrade === 'function') {
        window.selectGrade(gradeId);
    }

    // تحديث عنوان هيدر اللوح الثاني
    const termsTitle = document.getElementById('panel-terms-title');
    termsTitle.innerHTML = `
        <span style="font-size: 16px;">${grade.icon}</span>
        <span>${grade.name}</span>
    `;

    // ملء فصول الصف المختار باللوح الثاني
    const termsList = document.getElementById('sidebar-terms-list');
    termsList.innerHTML = '';

    grade.terms.forEach((term, index) => {
        const item = document.createElement('div');
        item.className = 'panel-item';
        item.onclick = () => showTermUnits(grade, term);
        item.innerHTML = `
            <div class="panel-item-left">
                <span style="color: var(--primary); font-weight: 700; font-size: 13px; margin-left: 8px;">${index + 1}</span>
                <span>${term.name}</span>
            </div>
            <svg class="panel-item-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        `;
        termsList.appendChild(item);
    });

    // تحريك الألواح
    const panelMain = document.getElementById('panel-main');
    const panelTerms = document.getElementById('panel-terms');

    panelMain.className = 'sidebar-panel shifted-right';
    panelTerms.className = 'sidebar-panel active';
}

// العودة من لوح الفصول للوح الرئيسي
function slideBackToMain() {
    const panelMain = document.getElementById('panel-main');
    const panelTerms = document.getElementById('panel-terms');

    panelMain.className = 'sidebar-panel active';
    panelTerms.className = 'sidebar-panel shifted-left';
}

// الانتقال للوح الثالث وعرض وحدات الفصل المختار
function showTermUnits(grade, term) {
    const unitsTitle = document.getElementById('panel-units-title');
    unitsTitle.innerHTML = `
        <span>${term.name}</span>
    `;

    const unitsList = document.getElementById('sidebar-units-list');
    unitsList.innerHTML = '';

    const isPrimary = grade.stage === 'primary';
    const isTerm1 = term.name === 'الفصل الدراسي الأول';

    term.units.forEach((unit, index) => {
        const isIntro = (unit === "مقدمة" || unit === "مقدمة وترحيب");
        const isUnit1 = unit.includes("الوحدة الأولى");
        const isUnitOpen = isPrimary && isTerm1 && (isIntro || isUnit1);

        const item = document.createElement('div');
        item.className = 'panel-item' + (isUnitOpen ? '' : ' locked-panel-item');
        if (!isUnitOpen) {
            item.style.opacity = '0.65';
        }
        item.onclick = (e) => {
            // إغلاق السايدبار بعد الاختيار
            toggleSidebar(false);
            // فتح التنبيه التفاعلي أو صفحة الدرس
            if (typeof window.showUnitDetail === 'function') {
                window.showUnitDetail(grade.name, term.name, unit, isUnitOpen, e);
            }
        };

        const iconBadge = isUnitOpen 
            ? `<span style="color: var(--accent); font-weight: 800; margin-left: 8px;">✨</span>`
            : `<span style="color: #94a3b8; font-size: 13px; margin-left: 8px;">🔒</span>`;

        const chevron = isUnitOpen 
            ? `<svg class="panel-item-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`
            : `<span style="font-size:11px; color:#94a3b8; font-weight:700;">مقفلة 🔒</span>`;

        item.innerHTML = `
            <div class="panel-item-left">
                ${iconBadge}
                <span>${unit}</span>
            </div>
            ${chevron}
        `;
        unitsList.appendChild(item);
    });

    // تحريك الألواح
    const panelTerms = document.getElementById('panel-terms');
    const panelUnits = document.getElementById('panel-units');

    panelTerms.className = 'sidebar-panel shifted-right';
    panelUnits.className = 'sidebar-panel active';
}

// العودة من لوح الوحدات للوح الفصول
function slideBackToTerms() {
    const panelTerms = document.getElementById('panel-terms');
    const panelUnits = document.getElementById('panel-units');

    panelTerms.className = 'sidebar-panel active';
    panelUnits.className = 'sidebar-panel shifted-left';
}
