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

document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const response = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
