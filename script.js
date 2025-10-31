// ===== Typing Text Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Naval Prakash"; // ✨ your name or intro
  const element = document.getElementById("intro-text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
});

// ===== Highlight Active Sidebar Link on Scroll =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".sidebar li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    const link = item.querySelector("a");
    if (link.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// ===== Mobile Navigation & Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const mobileOverlay = document.getElementById("mobile-overlay");

// ✅ Single unified toggle function
function toggleMobileNav() {
  const isOpen = hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open", isOpen);
  mobileOverlay.classList.toggle("visible", isOpen);
  document.body.classList.toggle("menu-open", isOpen); // 🚀 prevent scroll when open

  // Accessibility attributes
  hamburger.setAttribute("aria-expanded", isOpen);
  mobileNav.setAttribute("aria-hidden", !isOpen);

  if (isOpen) {
    mobileOverlay.removeAttribute("hidden");
  } else {
    mobileOverlay.setAttribute("hidden", "");
  }
}

// Close menu helper
function closeMobileNav() {
  hamburger.classList.remove("open");
  mobileNav.classList.remove("open");
  mobileOverlay.classList.remove("visible");
  document.body.classList.remove("menu-open");
  hamburger.setAttribute("aria-expanded", "false");
  mobileNav.setAttribute("aria-hidden", "true");
  mobileOverlay.setAttribute("hidden", "");
}

// Event listeners
hamburger.addEventListener("click", toggleMobileNav);
mobileOverlay.addEventListener("click", closeMobileNav);
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
