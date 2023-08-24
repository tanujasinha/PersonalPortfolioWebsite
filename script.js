const navIcon = document.getElementById('nav-icon');
const navtab = document.getElementById('navtab');

navIcon.addEventListener('click', () => {
  navtab.classList.toggle('active');
});

// Get all the sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navtab a');

// Function to determine which section is currently visible
function getActiveSection() {
  let activeSection = sections[0];
  let minDistance = window.innerHeight;

  sections.forEach(section => {
    const distance = Math.abs(section.getBoundingClientRect().top);
    if (distance < minDistance) {
      minDistance = distance;
      activeSection = section;
    }
  });

  return activeSection;
}

// Function to update active class on navbar links
function updateActiveLink() {
  const activeSection = getActiveSection();

  navLinks.forEach(link => {
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    if (activeSection === targetSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Scroll event listener to update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Initial update on page load
updateActiveLink();