// Create a place to store submitted keys
let keys = [];
// Create a place to store submitted keys as one big string
let display = "";
// Set the default state of the calculator to having not run any calculations.
// We need to reset this when someone does a new calculation
let hasCalculated = false;

// Update the display with the values of keys pressed into a string and display it in the #display h4
function updateDisplay() {
  display = keys.join("");
  document.getElementById("display").innerHTML = display;
}

function keyPress(key) {
  // Clear display on key press if a calculation has just occured
  if (hasCalculated) {
    clearKeys();
  }

  // Add the key to the array and update display
  keys.push(key);
  updateDisplay();

  // If key value is equals, calculate result of user's input
  if (key === "=") {
    calculate();
  }
}

// Reset the state of the calculator to empty and update the display to be empty too
function clearKeys() {
  hasCalculated = false;
  keys = [];
  updateDisplay();
}

// Complete calculation.
// Takes value of display split into an array of two strings based on what operator it contains.
// Then converts these values into a float and applies mathematical logic
// This does not do correct BODMAS math rules
function calculate() {
  hasCalculated = true;

  // Split string into the parts by each operator
  // This approach was adapted from https://stackoverflow.com/a/47526614
  const instructions = display.split(/(?=\+)|(?=\-)|(?=\÷)|(?=\×)|(?=\=)/);

  // Start with zero
  let result = 0;

  for (const instruction of instructions) {
    var operator = "+";
    var firstCharacter = instruction[0];
    switch (firstCharacter) {
      case "+":
        operator = "+";
        break;
      case "-":
        operator = "-";
        break;
      case "/":
      case "÷":
        operator = "÷";
        break;
      case "*":
      case "×":
        operator = "×";
        break;
    }

    // Remove any non digits and parse the number
    var number = parseFloat(instruction.replace(/[^\d.]/g, ""));
    if (Number.isNaN(number)) continue;

    // Do the operation
    switch (operator) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "÷":
        result = result / number;
        break;
      case "×":
        result = result * number;
        break;
    }
  }
  // Updates display to complete expression including result
  keys.push(result.toString());
  updateDisplay();

  return result;
}
