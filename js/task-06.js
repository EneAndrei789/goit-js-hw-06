const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function() {
    const requiredLength = Number(validationInput.getAttribute("data-length"));

    if(validationInput.ariaValueMax.length === requiredLength) {
        validationInput.classList.add("valid");
        validationInput.classList.add("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.add("valid");
    }
});



