// Toggle Password Scripts //
var checkPass = document.querySelector('#show-password');
console.log(checkPass);

if (checkPass) {
    checkPass.addEventListener('click', function (showPassword) {
        console.log(showPassword); // The event details
        var passwordInput = document.querySelector('#password');
        passwordInput.type = this.checked ? 'text' : 'password';
        console.log(passwordInput.value);
    }, false);
}
