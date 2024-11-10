let counterValue = 0;

const valueDisplay = document.getElementById("value");
const decrementButton = document.querySelector("button[data-action='decrement']");
const  incrementButton = document.querySelector("button[data-action='increment']");

decrementButton.addEventListener("click", () => {
    counterValue--;
    updateDisplay()
});

incrementButton.addEventListener("click", () => {
    counterValue++;
    updateDisplay()
});

function updateDisplay() {
    valueDisplay.textContent = counterValue;
};  