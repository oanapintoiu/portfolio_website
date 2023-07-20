// Traits words transition on welcome-intro section

document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamicText");

  const words = ["Confident", "Creative", "Ambitious"];
  const interval = 3000; // Change the interval (in milliseconds) between word transitions
  let currentWordIndex = 0;

  const changeWord = () => {
    dynamicText.style.opacity = 0; // Fade out
    setTimeout(() => {
      dynamicText.textContent = words[currentWordIndex];
      dynamicText.style.opacity = 1; // Fade in

      currentWordIndex++;
      if (currentWordIndex === words.length) {
        currentWordIndex = 0;
      }
      setTimeout(changeWord, interval);
    }, 500); // Adjust the duration (in milliseconds) for the fade-out effect
  };

  changeWord();

  const aboutSection = document.getElementById("about");

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dynamicText.classList.add("hidden"); // Apply the hidden class
    } else {
      dynamicText.classList.remove("hidden"); // Remove the hidden class
    }
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.15,
  });

  observer.observe(aboutSection);
});
