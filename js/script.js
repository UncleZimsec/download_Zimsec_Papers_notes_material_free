document.addEventListener('DOMContentLoaded', () => {
    let sideBar = document.querySelector('.side-bar');
    let body = document.body;
    let toggleBtn = document.getElementById('toggle-btn');
    let profile = document.querySelector('.header .flex .profile');
    let search = document.querySelector('.header .flex .search-form');
    let darkMode = localStorage.getItem('dark-mode');
 
    // Ensure elements exist before modifying them
    if (sideBar) sideBar.classList.remove('active');
    if (body) body.classList.remove('active');
 
    // 🌙 Dark Mode Toggle
    const enableDarkMode = () => {
       toggleBtn.classList.replace('fa-sun', 'fa-moon');
       body.classList.add('dark');
       localStorage.setItem('dark-mode', 'enabled');
    };
    const disableDarkMode = () => {
       toggleBtn.classList.replace('fa-moon', 'fa-sun');
       body.classList.remove('dark');
       localStorage.setItem('dark-mode', 'disabled');
    };
    if (darkMode === 'enabled') enableDarkMode();
    toggleBtn.onclick = () => {
       darkMode = localStorage.getItem('dark-mode');
       darkMode === 'disabled' ? enableDarkMode() : disableDarkMode();
    };
 
    // 👤 Profile Toggle
    document.querySelector('#user-btn')?.addEventListener('click', () => {
       profile?.classList.toggle('active');
       search?.classList.remove('active');
    });
 
    // 🔍 Search Toggle
    document.querySelector('#search-btn')?.addEventListener('click', () => {
       search?.classList.toggle('active');
       profile?.classList.remove('active');
    });
 
    // 📂 Sidebar Toggle
    document.querySelector('#menu-btn')?.addEventListener('click', () => {
       sideBar?.classList.toggle('active');
       body?.classList.toggle('active');
    });
    document.querySelector('#close-btn')?.addEventListener('click', () => {
       sideBar?.classList.remove('active');
       body?.classList.remove('active');
    });
 
    // 🖥️ Close menu on small screens
    window.addEventListener('scroll', () => {
       profile?.classList.remove('active');
       search?.classList.remove('active');
       if (window.innerWidth < 1200) {
          sideBar?.classList.remove('active');
          body?.classList.remove('active');
       }
    });
 
    // 🔍 Search Form Submission
    document.querySelector('.search-form')?.addEventListener('submit', (event) => {
       event.preventDefault();
       let searchQuery = document.querySelector('[name="search_box"]').value.toLowerCase().trim();
       const subjectMap = {
          'maths a level': 'Mathematics A level.html',
          'english a-level': 'English A level.html',
       };
       window.location.href = subjectMap[searchQuery] || 'search_results.html';
    });
 
    // 📄 Footer Fix
    const footer = document.querySelector(".footer");
    function adjustFooter() {
       if (document.body.scrollHeight <= window.innerHeight) {
          footer.style.position = "fixed";
          footer.style.bottom = "0";
          footer.style.width = "100%";
       } else {
          footer.style.position = "relative";
       }
    }
    adjustFooter();
    window.addEventListener("resize", adjustFooter);
 
    // 📲 WhatsApp Form Submission
    document.querySelector("#whatsapp-form")?.addEventListener("submit", sendToWhatsApp);
    function sendToWhatsApp(event) {
       event.preventDefault();
       let name = document.querySelector('input[name="name"]').value;
       let email = document.querySelector('input[name="email"]').value;
       let number = document.querySelector('input[name="number"]').value;
       let message = document.querySelector('textarea[name="msg"]').value;
       const whatsappURL = `https://wa.me/263786430096?text=${encodeURIComponent(
          `Hello! Here is a new message from your website:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${number}\n- Message: ${message}`
       )}`;
       window.open(whatsappURL, "_blank");
    }
 
    // 📌 Popup Display (once per month)
    const lastSeen = localStorage.getItem('popupLastSeen');
    const now = new Date();
    if (!lastSeen || now - new Date(lastSeen) > 30 * 24 * 60 * 60 * 1000) {
       document.getElementById('popup').style.display = 'block';
       localStorage.setItem('popupLastSeen', now);
    }
    document.querySelector("#close-popup")?.addEventListener("click", () => {
       document.getElementById('popup').style.display = 'none';
    });
 
 });
    