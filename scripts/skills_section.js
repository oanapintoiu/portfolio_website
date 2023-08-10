document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".bar span");
  let skillSectionVisible = false;

  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      const width = bar.dataset.width;
      bar.style.width = width;
    });
  };

  const unfillSkillBars = () => {
    skillBars.forEach((bar) => {
      bar.style.width = "0";
    });
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillSectionVisible = true;
        animateSkillBars();
      } else {
        skillSectionVisible = false;
        unfillSkillBars();
      }
    });
  };

  const skillObserver = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
  });

  const skillSection = document.querySelector(".skill-type");
  skillObserver.observe(skillSection);

  const handleScroll = () => {
    if (!skillSectionVisible) {
      const rect = skillSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        skillSectionVisible = true;
        animateSkillBars();
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
});
