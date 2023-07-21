document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamicText");
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  const words = ["Welcome to my Website.", "I am a Web Developer.", "Resourceful Project Manager.", "Experienced Transfomational Leader.","Passionate about People, Business and Tech.", "Caught your attention?", "Good.", "Scroll on Down to find out More."];
  const interval = 3000; // change the interval (in milliseconds) between word transitions
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
    }, 500); 
  };

  prevButton.addEventListener("click", () => {
    currentWordIndex = (currentWordIndex - 1 + words.length) % words.length; // decrements 'currentWordIndex' variable by 1 meaning it wraps around the last word of the 'words' array
    dynamicText.style.opacity = 0;
    setTimeout(() => {
      dynamicText.textContent = words[currentWordIndex];
      dynamicText.style.opacity = 1; 
    }, 500);
  });

  nextButton.addEventListener("click", () => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    dynamicText.style.opacity = 0;
    setTimeout(() => {
      dynamicText.textContent = words[currentWordIndex];
      dynamicText.style.opacity = 1; 
    }, 500);
  });

  changeWord();

  const aboutSection = document.getElementById("about");

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dynamicText.classList.add("hidden"); 
    } else {
      dynamicText.classList.remove("hidden"); 
      nextButton.classList.remove("hidden");
      prevButton.classList.remove("hidden");
    }
  };

  const handleButtonIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      nextButton.classList.add("hidden");
      prevButton.classList.add("hidden");
    } else {
      nextButton.classList.remove("hidden");
      prevButton.classList.remove("hidden");
    }
  }

 
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.15,
  });
  const buttonObserver = new IntersectionObserver (handleButtonIntersection, {
    threshold: 0.1278,
  })

  observer.observe(aboutSection);
  buttonObserver.observe(aboutSection);
});
