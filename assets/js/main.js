document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach(function (section) {
    section.style.display = "none";
  });
  document.getElementById("luffy").style.display = "block";

  navLinks.forEach(function (navLink) {
    if (navLink.getAttribute("href") === "#luffy") {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      sections.forEach(function (section) {
        if (section.id === targetId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      navLinks.forEach(function (link) {
        if (link === navLink) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });
});
