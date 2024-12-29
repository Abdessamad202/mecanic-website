// Menu Button and Navigation Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ScrollReveal Animations
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header Animations
ScrollReveal().reveal(".nav__bar,.banner__card h4,.experience__image", {
  ...scrollRevealOptions,
  origin: "left", // Override origin for navbar
  interval: 500, // Delay navbar animation
});

ScrollReveal().reveal("ul.nav__links *,.experience__content,.contact__content", {
  ...scrollRevealOptions,
  origin: "right", // Override origin for navbar links
});
ScrollReveal().reveal(".customisation__content", {
  ...scrollRevealOptions,
  origin: "top", // Override origin for navbar links
}

); // Apply options to all children

ScrollReveal().reveal(".header__content h1", scrollRevealOptions);

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500, // Delay button animation
});

// Service and Price Card Animations (Staggered)
const staggeredRevealOptions = {
  ...scrollRevealOptions, // Inherit base options
  interval: 500, // Add interval for staggered effect
};

ScrollReveal().reveal(".service__card, .price__card", staggeredRevealOptions);

// Counter Animation with ScrollReveal
ScrollReveal().reveal(".customisation__card", {
  ...scrollRevealOptions,
  beforeReveal: (el) => {
    const counter = el.querySelector('.counter');
    animateCounter(counter); // Call counter animation function
  },
});

// Swiper Initialization (assuming Swiper.js is loaded)
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Counter Animation Function (unchanged)
const counters = document.querySelectorAll('.counter');

function animateCounter(counter) {
  const target = parseInt(counter.dataset.target);
  anime({
    targets: counter,
    innerHTML: [0, target],
    easing: 'linear',
    duration: 1500,
    round: 1,
    update: function(anim) {
      const value = anim.animations[0].currentValue;
      counter.innerHTML = value.toLocaleString();
    }
  });
}
window.onload = () => {
  window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
};
