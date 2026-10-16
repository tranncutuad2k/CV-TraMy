// Menu mobile, chế độ sáng/tối, nút lên đầu trang và form liên hệ.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? '✕' : '☰'; });
const themeButton = document.getElementById('theme-toggle');
if (localStorage.getItem('cv-theme') === 'dark') document.body.classList.add('dark');
if (themeButton) themeButton.addEventListener('click', () => { document.body.classList.toggle('dark'); localStorage.setItem('cv-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); });
const backTop = document.getElementById('back-top');
function updateBackTop() { if (backTop) backTop.classList.toggle('show', window.scrollY > 350); }
window.addEventListener('scroll', updateBackTop, { passive: true }); updateBackTop();
if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    // Kiểm tra nếu đang ở trang có chứa biểu mẫu liên hệ thì mới chạy code
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Ngăn chặn hành vi tải lại trang mặc định
            event.preventDefault();

            // 1. Địa chỉ email nhận cố định của bạn
            const recipient = "mymit104@gmail.com";

            // 2. Thu thập dữ liệu tự động từ Form dựa trên thuộc tính 'name' trong HTML
            const formData = new FormData(contactForm);
            const senderName = formData.get('name');
            const senderEmail = formData.get('email');
            const messageContent = formData.get('message');

            // 3. Thiết lập tiêu đề cho Email
            const subject = encodeURIComponent(`Liên hệ từ CV - ${senderName}`);

            // 4. Tạo cấu trúc nội dung văn bản cho Email
            const bodyText = `Tên: ${senderName}\n` +
                             `Email: ${senderEmail}\n\n` +
                             `Nội dung:\n${messageContent}`;
            
            const encodedBody = encodeURIComponent(bodyText);

            // 5. Mở ứng dụng Email mặc định và điền sẵn thông tin
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodedBody}`;
        });
    }
});
