function loadComponent(selector, path) {
  $(selector).load(path);
}

$(document).ready(function () {
  loadComponent("#header-container", "./src/components/header.html");
  loadComponent("#footer-container", "./src/components/footer.html");
});
