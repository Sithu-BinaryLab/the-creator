function loadComponent(selector, path) {
  $(selector).load(path, function () {
    // Run any scripts needed after component loads
    if (selector === "#header-container") {
      attachMenuToggle();
    }
  });
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

$(document).ready(function () {
  loadComponent("#header-container", "./src/components/header.html");
  loadComponent("#footer-container", "./src/components/footer.html");
});
