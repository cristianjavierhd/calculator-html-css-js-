let currentDisplay = "";

function updateDisplay(val) {
  currentDisplay += val;
  document.querySelector(".display").innerHTML = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  document.querySelector(".display").innerHTML = currentDisplay;
}

function calculate() {
  let result = eval(currentDisplay);
  document.querySelector(".display").innerHTML = result;
}

