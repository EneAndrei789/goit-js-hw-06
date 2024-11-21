document.addEventListener('DOMContentLoaded', function() {

const login = document.querySelector(".login-form");

    login.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = loginForm.elements['email'].value;
      const password = loginForm.elements['password'].value;

      if (!email || !password) {
        alert('Toate câmpurile trebuie completate.');
        return;
      }

      const formData = {
        email: email,
        password: password
      };
      
      console.log(formData);

      loginForm.reset();
    });
});



