function loadComponent(selector, path) {
  const element = document.querySelector(selector);
  fetch(path)
    .then((response) => response.text())
    .then((data) => {
      element.innerHTML = data;
      if (selector === "#header-container") {
        attachMenuToggle();
      }
    })
    .catch((error) => console.error(`Error loading component ${path}:`, error));
}

function attachMenuToggle() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-links");
  const closeBtn = document.getElementById("close-btn");

  function toggleMenu() {
    nav.classList.toggle("active");
  }

  hamburger?.addEventListener("click", toggleMenu);
  closeBtn?.addEventListener("click", toggleMenu);
}

function carousel() {
  let currentIndex = 0;
  const totalCards = 3;
  const carousel = document.getElementById("carousel");
  const leftButton = document.querySelector(
    'button[onclick="moveCarousel(-1)"]'
  );
  const rightButton = document.querySelector(
    'button[onclick="moveCarousel(1)"]'
  );
  const cardWidthPercentage = 25; // Move by 25% for smoother transitions

  function updateButtonStates() {
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex >= totalCards - 1;
    leftButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
    rightButton.style.opacity = currentIndex >= totalCards - 1 ? "0.5" : "1";
  }

  window.moveCarousel = function (direction) {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < totalCards) {
      currentIndex = newIndex;
      const offset = currentIndex * -cardWidthPercentage;
      carousel.style.transform = `translateX(${offset}%)`;
      console.log(
        `Moving carousel: direction=${direction}, currentIndex=${currentIndex}, offset=${offset}%`
      );
      updateButtonStates();
    }
  };

  // Initial setup
  carousel.style.transform = "translateX(0%)";
  updateButtonStates();
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#header-container", "./src/components/header.html");
  loadComponent("#footer-container", "./src/components/footer.html");
  carousel();
});
