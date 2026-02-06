let display = document.getElementById("display");

// Add value
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result safely
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    if (
        (event.key >= "0" && event.key <= "9") ||
        ["+", "-", "*", "/", ".", "%"].includes(event.key)
    ) {
        appendValue(event.key);
    }

    if (event.key === "Enter") {
        calculate();
    }

    if (event.key === "Backspace") {
        deleteLast();
    }

    if (event.key === "Escape") {
        clearDisplay();
    }
});
