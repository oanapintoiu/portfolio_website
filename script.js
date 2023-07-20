// Traits words transition on welcome-intro section

document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamicText");
  const words = ["Confident", "Creative", "Ambitious"];
  const interval = 3000; // Change the interval (in milliseconds) between word transitions
  let currentWordIndex = 0;

  function changeWord() {
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
  }

  changeWord();
});


// Scroll down feature
const scrollDownLink = document.getElementById('scroll-down-link');
const aboutSection = document.getElementById('about');

const handleIntersection = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    scrollDownLink.classList.add('hidden'); // Apply the hidden class
  } else {
    scrollDownLink.classList.remove('hidden'); // Remove the hidden class
  }
};

scrollDownLink.addEventListener('click', () => {
  scrollDownLink.classList.add('hidden');
});

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.15,
});

observer.observe(aboutSection);

// Scroll behavior
scrollDownLink.addEventListener('click', (event) => {
  event.preventDefault();
  const targetSection = document.querySelector(scrollDownLink.getAttribute('href'));

  targetSection.scrollIntoView({
    behavior: 'smooth',
  });
});
