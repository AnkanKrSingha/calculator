const resultInput = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "=") {
            calculate();
        } else if (value === "c") {
            clear();
        } else if (value === "backspace") {
            backspace();
        } else if (value === "%") {
            calculatePercentage();
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            handleOperator(value);
        } else {
            handleNumber(value);
        }

        updateDisplay();
    });
});

function handleNumber(value) {
    currentInput += value;
}

function handleOperator(value) {
    if (previousInput !== "") {
        calculate();
    }

    operator = value;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;

    if (operator === "+") {
        result = parseFloat(previousInput) + parseFloat(currentInput);
    } else if (operator === "-") {
        result = parseFloat(previousInput) - parseFloat(currentInput);
    } else if (operator === "*") {
        result = parseFloat(previousInput) * parseFloat(currentInput);
    } else if (operator === "/") {
        result = parseFloat(previousInput) / parseFloat(currentInput);
    } else if (operator === "%") {
        result = parseFloat(previousInput) % parseFloat(currentInput);
    }

    currentInput = result.toString();
    previousInput = "";
    operator = "";
}

function clear() {
    currentInput = "";
    previousInput = "";
    operator = "";
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
}

function calculatePercentage() {
    if (previousInput !== "") {
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)) / 100;
    }
}

function updateDisplay() {
    resultInput.value = currentInput;
}