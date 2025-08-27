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

function initGalleryRotation(gallerySelector, delay = 2000) {
  const items = document.querySelectorAll(`${gallerySelector} .gallery-item`);

  items.forEach((item, index) => {
    setInterval(() => {
      item.classList.toggle("show-secondary");
    }, delay + index * 700);
  });
}

// Run for each gallery
initGalleryRotation(".gallery1", 2000);
initGalleryRotation(".gallery2", 2500);
// initGalleryRotation(".gallery3", 3000);

