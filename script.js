// Create a place to store submitted keys
let keys = [];
// Create a place to store submitted keys in the display
let display = "";
// Set the default state of the calculator to having not run calculations.
let hasCalculated = false;

// Update the display with the values of keys pressed into a string
function updateDisplay() {
  display = keys.join("");
  document.getElementById("display").innerHTML = display;
}

function keyPress(key) {
  // Clear display on key press if a calculation has just occured
  if (hasCalculated) {
    clearKeys();
  }
  // Update display wih key value
  keys.push(key);
  updateDisplay();
  // If key value is equals, calculate result of expression
  if (key === "=") {
    calculate();
  }
}

// Reset the state of the calculator to empty and update the display
function clearKeys() {
  hasCalculated = false;
  keys = [];
  updateDisplay();
}

// Complete calculation. Takes value of display split into an array of two strings based on what operator it contains. Then converts these values into a float and applies mathematical logic
function calculate() {
  hasCalculated = true;

  const instructions = display.split(/(?=\+)|(?=\-)|(?=\÷)|(?=\×)|(?=\=)/);

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

    var number = parseFloat(instruction.replace(/[^\d.]/g, ""));
    if (Number.isNaN(number)) continue;

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
