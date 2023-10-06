let currentDisplay = "0";

function clearDisplay () {
    currentDisplay =0;
    updateDisplay();
}
function updateDisplay() {
const displayElement = document.getElementById("input");
displayElement.textContent = currentDisplay;
}
function deleteLastElement(){
    currentDisplay = currentDisplay.slice(0,-1);
    if(currentDisplay==""){
        currentDisplay ="0"
    }
    updateDisplay();
}
function appendToDisplay(value) {
    if(currentDisplay==0) {
        currentDisplay = value;
    }
    else {
        currentDisplay += value;
    }
    updateDisplay();
}

function calculateResult() {
    currentDisplay = eval(currentDisplay);
    updateDisplay();
}