// Project 2 Scripts //
var checkPass = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'));
var showPassword = document.querySelector('#show-passwords');

console.log(checkPass);
console.log(showPassword);



showPassword.addEventListener('click', function (event) {
	checkPass.forEach(function (password) {

		if (showPassword.checked) {
			password.type = 'text';
		} else {
			password.type = 'password';
        }
	});

}, false);

