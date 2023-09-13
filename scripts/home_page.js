document.addEventListener("DOMContentLoaded", () => {
const radioButtons = document.querySelectorAll('input[name="images"]');
let counter = 0;
let intervalId; // Variable to store the interval ID

// Function to handle changing the radio button and restarting the interval
function changeRadioButton() {
  clearInterval(intervalId); // 
  radioButtons[counter].checked = false;
  counter = (counter + 1) % radioButtons.length;
  radioButtons[counter].checked = true;
  intervalId = setInterval(changeRadioButton, 3000); // Start a new interval
}

// Add a click event listener to each radio button
radioButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    clearInterval(intervalId); // 
    counter = index; // Set the counter to the clicked button's index
    radioButtons[counter].checked = true; 
    intervalId = setInterval(changeRadioButton, 3000); 
  });
});

// Start the initial interval
intervalId = setInterval(changeRadioButton, 3000);
});
