// Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all
      navLinks.forEach(nav => nav.classList.remove('active'));
      
      // Add active to the clicked one
      this.classList.add('active');
    });
  });
