// Highlight current page in nav
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
// Toggle dropdown on click
const menu = document.querySelector(".menu");

menu.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent body click from closing immediately
  this.classList.toggle("active");
});

// Close menu if clicked outside
document.addEventListener("click", function () {
  menu.classList.remove("active");
});
