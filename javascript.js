window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();


  const side_wide_cursor = document.querySelector(".custom-cursor.site-wide");

  document.addEventListener('mouseenter', () => {
    side_wide_cursor.style.display = "block";
  });

  document.addEventListener('mouseleave', () => { 
    side_wide_cursor.style.display = "none";
  });

  document.addEventListener('mousemove', TrackCursor);

  function TrackCursor(e) {
    const w = side_wide_cursor.clientWidth;
    const h = side_wide_cursor.clientHeight;
    side_wide_cursor.style.transform = `translate(${e.clientX - w / 2}px, ${e.clientY - h / 2}px)`;
  }



document.querySelectorAll('.bg-footer, .btn-contact, .logo-nav, .nav-item, .image-container').forEach(container => {
  container.addEventListener('mouseenter', () => {
      document.querySelector('.custom-cursor.site-wide').style.backgroundColor = '#c4d9d8';

  });

  container.addEventListener('mouseleave', () => {
      document.querySelector('.custom-cursor.site-wide').style.backgroundColor = ''; 
  });
});


// Get all nav links
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Function to update active link based on current page URL
function setActiveLink() {
  navLinks.forEach((link) => {
    // Remove 'active' class from all links
    link.classList.remove("active");

    // Check if the link's href matches the current URL
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

// Call setActiveLink on page load
setActiveLink();

// Add event listeners to handle link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
