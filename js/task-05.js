const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function() {
    nameOutput.textContent = nameInput.ariaValueMax.trim() === "" ? "Anonymus" : nameInput.value 
});