document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sectionOne = document.querySelector(".home_page");

  const sectionOneOptions = {
    rootMargin: "-150px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  }, sectionOneOptions);

  sectionOneObserver.observe(sectionOne);
});
