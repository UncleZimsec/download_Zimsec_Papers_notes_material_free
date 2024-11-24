window.addEventListener('DOMContentLoaded', () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
});
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
document.querySelector('.search-form').onsubmit = function(event) {
   event.preventDefault(); // Prevent default form submission

   let searchQuery = document.querySelector('[name="search_box"]').value.toLowerCase().trim();

   // Define mappings for subject keywords to URLs
   const subjectMap = {
       'maths a level': 'Mathematics A level.html',
       'english a-level': 'English A level.html',
       // Add more subjects here
   };

   // Check if search query matches a key in subjectMap
   if (subjectMap[searchQuery]) {
       // Redirect to the specific subject page
       window.location.href = subjectMap[searchQuery];
   } else {
       // Redirect to a general search results page or display an error
       alert("Subject not found. Redirecting to general search results.");
       window.location.href = 'search_results.html';
   }
};
const papersData = [
   {
       subject: 'Math',
       years: [
           {
               year: 2018,
               sessions: [
                   {
                       session: 'May/June',
                       papers: [
                           { name: 'Paper 1', file: 'math_2018_mj_paper1.pdf' },
                           { name: 'Paper 2', file: 'math_2018_mj_paper2.pdf' }
                       ]
                   },
                   {
                       session: 'November',
                       papers: [
                           { name: 'Paper 1', file: 'math_2018_nov_paper1.pdf' },
                           { name: 'Paper 2', file: 'math_2018_nov_paper2.pdf' }
                       ]
                   }
               ]
           },
           {
               year: 2019,
               sessions: [
                   {
                       session: 'May/June',
                       papers: [
                           { name: 'Paper 1', file: 'math_2019_mj_paper1.pdf' },
                           { name: 'Paper 2', file: 'math_2019_mj_paper2.pdf' }
                       ]
                   }
               ]
           }
       ]
   },
   {
       subject: 'Statistics',
       years: [
           {
               year: 2018,
               sessions: [
                   {
                       session: 'May/June',
                       papers: [
                           { name: 'Paper 1', file: 'stats_2018_mj_paper1.pdf' },
                           { name: 'Paper 2', file: 'stats_2018_mj_paper2.pdf' }
                       ]
                   },
                   {
                       session: 'November',
                       papers: [
                           { name: 'Paper 1', file: 'stats_2018_nov_paper1.pdf' },
                           { name: 'Paper 2', file: 'stats_2018_nov_paper2.pdf' }
                       ]
                   }
               ]
           }
       ]
   }
];
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
 
    function adjustFooter() {
       const contentHeight = document.body.scrollHeight; // Total height of content
       const viewportHeight = window.innerHeight; // Height of visible screen
 
       // Check if the content height is smaller than the viewport
       if (contentHeight <= viewportHeight) {
          // Fix footer at the bottom if the page content doesn't fill the screen
          footer.style.position = "fixed";
          footer.style.bottom = "0";
          footer.style.width = "100%";
       } else {
          // Make footer part of natural scrolling
          footer.style.position = "relative";
       }
    }
 
    // Run on page load and whenever the window resizes
    adjustFooter();
    window.addEventListener("resize", adjustFooter);
 });

  function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the page from refreshing
 
    // Get the values entered by the user
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const message = document.querySelector('textarea[name="msg"]').value;
 
    // Create a WhatsApp message
    const whatsappMessage = `Hello! Here is a new message from your website:
    - Name: ${name}
    - Email: ${email}
    - Phone: ${number}
    - Message: ${message}`;
 
    // Replace YOUR_PHONE_NUMBER with your WhatsApp number, e.g., 263771234567 for Zimbabwe
    const whatsappURL = `https://wa.me/263786430096?text=${encodeURIComponent(whatsappMessage)}`;
 
    // Open WhatsApp
    window.open(whatsappURL, "_blank");
 }
 document.addEventListener('DOMContentLoaded', () => {
    // Get the last time the popup was shown
    const lastSeen = localStorage.getItem('popupLastSeen');
    const now = new Date();
 
    // Check if the popup should be shown
    if (!lastSeen || (now - new Date(lastSeen)) > 30 * 24 * 60 * 60 * 1000) {
       // Show the popup
       document.getElementById('popup').style.display = 'block';
 
       // Update the last seen date
       localStorage.setItem('popupLastSeen', now);
    }
 });
 
 function closePopup() {
    document.getElementById('popup').style.display = 'none';
 }
 
 