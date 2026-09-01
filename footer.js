/* ==========================================================================
   SmartLearning - Footer Component Logic
   ========================================================================== */

function initFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    footerPlaceholder.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <span>Smart</span>Learning
                        </div>
                        <p>منصة تعليمية مبتكرة توفر الوصول السريع والمنظم للوحدات الدراسية لكافة المراحل من الصف الأول الابتدائي حتى الثالث الثانوي بأسلوب عرض وتصفح تفاعلي رائع.</p>
                    </div>
                    <div class="footer-links-col">
                        <h4>روابط سريعة</h4>
                        <ul class="footer-links">
                            <li><a href="#" onclick="navigateToHome(event)">الرئيسية</a></li>
                            <li><a href="#gradesSection" onclick="scrollToSection(event, 'gradesSection')">الصفوف الدراسية</a></li>
                            <li><a href="#" onclick="openContactModal(event)">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-col">
                        <h4>تواصل معنا</h4>
                        <p style="font-size: 14px; margin-bottom: 12px; line-height: 1.6;">للاستفسارات والاقتراحات، يسعدنا تواصلكم الدائم معنا.</p>
                        <div class="footer-socials">
                            <a href="#" class="social-icon" aria-label="فيسبوك">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="تويتر">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="لينكد إن">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>جميع الحقوق محفوظة &copy; 2026 SmartLearning</p>
                    <p>صُمم بحب لمساعدة الطلاب في مسيرتهم الدراسية.</p>
                </div>
            </div>
        </footer>
    `;
}

// فحص جاهزية المستند لتفادي مشاكل عدم التحميل في بروتوكول file://
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
