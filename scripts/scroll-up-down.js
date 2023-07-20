document.addEventListener("DOMContentLoaded", () => {
  const scrollDownLink = document.getElementById("scroll-down-link");
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");
  const scrollUpLink = document.getElementById("scroll-up-link");

  // Scroll down behavior
  const handleDownIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      scrollDownLink.classList.add("hidden");
    } else {
      scrollDownLink.classList.remove("hidden");
    }
  };

  const downObserver = new IntersectionObserver(handleDownIntersection, {
    threshold: 0.15,
  });

  downObserver.observe(aboutSection);

  // Scroll down behavior
  scrollDownLink.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(
      scrollDownLink.getAttribute("href")
    );

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });

  // Scroll up behavior
  const handleUpIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      scrollUpLink.classList.remove("hidden");
    } else {
      scrollUpLink.classList.add("hidden");
    }
  };

  const welcomeSection = document.getElementById("portofolio");
  const upObserver = new IntersectionObserver(handleUpIntersection, {
    threshold: 0.8,
  });

  upObserver.observe(contactSection);

  scrollUpLink.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(
      scrollUpLink.getAttribute("href")
    );

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
