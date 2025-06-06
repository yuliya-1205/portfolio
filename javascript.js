window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  // var logo = document.getElementById("logoNav");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
    // logo.src = "./images/logo-name.png"; // Change to your new image
  } else {
    navbar.classList.remove("scrolled");
    // logo.src = "./images/Nav-logo.png"; // Original image
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



document.querySelectorAll('.bg-footer, .btn-contact, .logo-nav, .nav-item, .image-container, .next-prev').forEach(container => {
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

// Get the navbar collapse element
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

// Add scroll event listener to window
window.addEventListener('scroll', () => {
    // Check if the navbar menu is expanded
    if (navbarCollapse.classList.contains('show')) {
        // Collapse the navbar
        navbarCollapse.classList.remove('show');
        
        // Update the toggler button's aria-expanded attribute
        navbarToggler.setAttribute('aria-expanded', 'false');
        
        // Add the collapsed class back to the toggler button
        navbarToggler.classList.add('collapsed');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

// Share functionality remains the same
async function shareResume() {
  const button = event.target.closest('button');
  const originalText = button.innerHTML;
  
  try {
      button.disabled = true;
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sharing...';

      const shareData = {
          title: 'My Resume',
          text: 'Check out my resume!',
          url: window.location.href
      };

      if (navigator.share) {
          try {
              await navigator.share(shareData);
              showMessage('Resume shared successfully!', 'success');
          } catch (shareError) {
              await fallbackToClipboard();
          }
      } else {
          await fallbackToClipboard();
      }
  } catch (err) {
      showMessage('Unable to share resume. Please try again later.');
      console.error('Sharing failed:', err);
  } finally {
      button.disabled = false;
      button.innerHTML = originalText;
  }
}

async function fallbackToClipboard() {
  try {
      await navigator.clipboard.writeText(window.location.href);
      showMessage('Link copied to clipboard!', 'success');
  } catch (clipboardError) {
      throw new Error('Clipboard access denied');
  }
}

