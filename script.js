const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const loginregisterbtnLink = document.querySelector('.loginregisterbtnlink');
const createAccountBtn = document.getElementById('createAccountBtn');

const toggleDivsButton = document.getElementById('toggleDivsButton'); // Add this line
const divs = document.getElementById('myDivs'); 

createAccountBtn.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

toggleDivsButton.addEventListener("click", function () {
    // Toggle the visibility of the .divs element
    if (divs.style.display === "none" || divs.style.display === "") {
        divs.style.display = "block";
    } else {
        divs.style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const inputBoxes = document.querySelectorAll(".input-box input");

    inputBoxes.forEach((inputBox) => {
        inputBox.addEventListener("focus", function () {
            this.nextElementSibling.style.transform = "translateY(-120%)";
            this.nextElementSibling.style.fontSize = "0.8em";
        });

        inputBox.addEventListener("blur", function () {
            if (this.value === "") {
                this.nextElementSibling.style.transform = "translateY(-50%)";
                this.nextElementSibling.style.fontSize = "1em";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements with the specified classes
    var loginForm = document.querySelector(".form-box.login");
    var signinForm = document.querySelector(".form-box.signin");

    // Hide the forms initially
    loginForm.style.display = "none";
    signinForm.style.display = "none";

    // Example: Use a button click to toggle visibility
    var toggleButton = document.getElementById("toggleButton");

    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            // Toggle visibility of forms
            loginForm.style.display = (loginForm.style.display === "none") ? "block" : "none";
            signinForm.style.display = (signinForm.style.display === "none") ? "block" : "none";
        });
    }
});
function validateForm() {
    var yourname = document.forms['myForm']['yourname'];
    var email = document.forms['myForm']['email'];
    var message = document.forms['myForm']['message'];
  
    var name_error = document.getElementById('name_error');
    var email_error = document.getElementById('email_error');
    var mess_error = document.getElementById('mess_error');
  
    name_error.style.display = 'none';
    email_error.style.display = 'none';
    mess_error.style.display = 'none';
  
    var isValid = true;
  
    if (yourname.value.trim() === "") {
      name_error.innerHTML = "Please fill the field";
      name_error.style.display = "block";
      yourname.classList.add('error-input'); // Add the error class
      isValid = false;
    } else {
      yourname.classList.remove('error-input'); // Remove the error class
    }
  
    if (email.value.trim() === "") {
      email_error.innerHTML = "Please fill the field";
      email_error.style.display = "block";
      email.classList.add('error-input'); // Add the error class
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      email_error.innerHTML = "Please enter a valid email address";
      email_error.style.display = "block";
      email.classList.add('error-input'); // Add the error class
      isValid = false;
    } else {
      email.classList.remove('error-input'); // Remove the error class
    }
  
    if (message.value.trim() === "") {
      mess_error.innerHTML = "Please fill the field";
      mess_error.style.display = "block";
      message.classList.add('error-input'); // Add the error class
      isValid = false;
    } else {
      message.classList.remove('error-input'); // Remove the error class
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    // You can implement a more sophisticated email validation if needed
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  
  document.getElementById('showPassword').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      this.textContent = 'Hide';
    } else {
      passwordField.type = 'password';
      this.textContent = 'Show';
    }
  });
  document.getElementById('showPassword').addEventListener('click', function() {
    var passwordField = document.querySelector('input[type="password"]');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      this.textContent = 'Hide';
    } else {
      passwordField.type = 'password';
      this.textContent = 'Show';
    }
  });
    