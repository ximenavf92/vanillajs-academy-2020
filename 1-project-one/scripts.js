// Toggle Password Scripts //
var checkPass = document.querySelector('#show-password');
var passwordInput = document.querySelector('#password');

if (checkPass) {
    checkPass.addEventListener('click', function (showPassword) {
        if (checkPass.checked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    }, false);
}


