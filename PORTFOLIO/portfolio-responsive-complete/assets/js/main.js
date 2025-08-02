// /*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu')

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//     const scrollDown = window.scrollY

//   sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-link')
//         }else{
//             sectionsClass.classList.remove('active-link')
//         }                                                    
//     })
// }
// window.addEventListener('scroll', scrollActive)

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
// //     reset: true
// });

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 
// sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
/**
 * @function scrollToSection
 * @description Smoothly scrolls the page to the target section.
 * @param {Event} event - The click event object.
 * @param {string} sectionId - The ID of the target section (e.g., 'home-section').
 */
function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent the default jump behavior of the anchor link

    const targetElement = document.getElementById(sectionId);

    // Log to console to check if the target element is found
    if (targetElement) {
        console.log(`Scrolling to section: ${sectionId}`);
        targetElement.scrollIntoView({
            behavior: 'smooth', // Makes the scroll animated
            block: 'start'       // Aligns the top of the element with the top of the viewport
        });

        // Optional: For Bootstrap's scrollspy to work correctly with smooth scroll,
        // you might need to manually update the URL hash after scrolling.
        // This line is commented out as it might interfere with Bootstrap's scrollspy
        // but can be useful if scrollspy isn't behaving as expected.
        // history.pushState(null, null, `#${sectionId}`);
    } else {
        console.error(`Target section with ID '${sectionId}' not found.`);
    }
}

// --- Mobile Navbar Toggle ---
// This part handles showing/hiding the mobile navigation menu.
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

// Event listener for the menu toggle icon
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show'); // Toggles the 'show' class on the navigation menu
    });
}

// Event listener to close the mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // If the menu is currently shown, remove the 'show' class to hide it
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});

// --- Scroll Sections Active Link (from your provided code) ---
// This part highlights the active link in the navbar based on scroll position.
const sections = document.querySelectorAll('section[id]'); // Selects all <section> elements that have an 'id'

const scrollActive = () => {
    const scrollDown = window.scrollY; // Current vertical scroll position

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; // Height of the current section
        // Top position of the current section, adjusted for fixed header height (58px)
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id'); // ID of the current section
        // Selects the corresponding navigation link for the current section
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        // Check if the current scroll position is within the bounds of the section
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link'); // Add 'active-link' class to highlight
        } else {
            sectionsClass.classList.remove('active-link'); // Remove 'active-link' class
        }
    });
};

// Add an event listener to call scrollActive whenever the window is scrolled
window.addEventListener('scroll', scrollActive);


// --- Scroll Reveal Animation (from your provided code) ---
// This assumes you have the ScrollReveal library loaded in your HTML.
// Example: <script src="https://unpkg.com/scrollreveal"></script>
const sr = ScrollReveal({
    origin: 'top',      // Animation starts from the top
    distance: '60px',   // Elements move 60px
    duration: 2000,     // Animation duration of 2 seconds
    delay: 200,         // 0.2 second delay before animation starts
    // reset: true      // Uncomment this if you want animations to re-trigger on scroll
});

// Reveal animations for different elements with varying delays and intervals
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
