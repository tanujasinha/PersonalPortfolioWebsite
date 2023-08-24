// Get the navigation icon and navigation tab elements
const navIcon = document.getElementById('nav-icon');
const navtab = document.getElementById('navtab');
// Get all the sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navtab a');

// Toggle navigation tab visibility on icon click
navIcon.addEventListener('click', () => {
  navtab.classList.toggle('active');
});

// Function to hide dropdown
function hideDropdown() {
  navtab.classList.remove('active');
}

// Add event listeners to hide dropdown when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', hideDropdown);
});

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
// Define the text for typing animation
const typingText = "Explore my journey through technology, creativity, and innovation.";

// Function to simulate typing animation
function typeWriter(text, element, delay) {
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, delay);
}

// Call the typing animation function on page load
window.addEventListener('load', () => {
  const typingElement = document.getElementById('typing-text');
  typeWriter(typingText, typingElement, 30); // Adjust delay as needed
});
