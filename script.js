document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.getElementById("dynamicText");
  const words = ["Confident", "Creative", "Ambitious"];
  const interval = 3000; // Change the interval (in milliseconds) between word transitions
  let currentWordIndex = 0;

  function changeWord() {
    dynamicText.style.opacity = 0; // Fade out
    setTimeout(function () {
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
