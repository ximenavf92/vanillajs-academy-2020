var getPassword = document.querySelector('#password'); // Get input with id of password
var checkbox = document.querySelector('#show-password'); // Get checkbox with id of show-password

if (checkbox) { // if element stored in checkbox exists trigger the following event
    checkbox.addEventListener('click', function (event) { // when checkbox is clicked
        if (checkbox.checked) {
            getPassword.type = "text"; // If checked change input type to text and reveal password input value
        } else {
            getPassword.type = "password"; // if not checked set type to password and conceal password input value
        }
    })
}