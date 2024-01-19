const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
});

// STICKY NAVBAR
window.onscroll = () => {
  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

// circle skill
