// Get & store all elements (input) with a type of password (querySelectorAll) and convert the returned node list into an array (Array.prptptype.slice.call(…) ).
var getPasswords = Array.prototype.slice.call(document.querySelectorAll('[type=password]'));
// Get checkbox with ID of show-passwords
var checkbox = document.querySelector('#show-passwords');


if (checkbox) { // If checkbox exists run the following loop
    getPasswords.forEach(function (getPasswords) {
        checkbox.addEventListener('click', function (event) {
            if (checkbox.checked) {
                getPasswords.type = 'text'; // If checkbox is checked change type to password
            } else { 
                getPasswords.type = 'password'; // If checkbox is not checked change type to password
            }
        });
    });
};