// Get the input display element
const display = document.getElementById('display');

// Add clicked button value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display content
function clearDisplay() {
  display.value = '';
}

// Evaluate the expression in the display
function calculateResult() {
  try {
    display.value = eval(display.value); // Calculates the result
  } catch (error) {
    display.value = 'Error'; // Show error if invalid expression
  }
}