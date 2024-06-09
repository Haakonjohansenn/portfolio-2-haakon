document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const links = document.querySelectorAll('ul.nav-menu li:not(:first-child) a');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  const checkOutButton = document.querySelector('.check-out-button');
  checkOutButton.addEventListener('click', smoothScrollToProjects);

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  function smoothScrollToProjects(event) {
    event.preventDefault();
    const projectsSection = document.getElementById('projects-section');
    
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  }
});
