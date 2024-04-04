
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;



var errorElement = document.getElementById('js-form-error');
errorElement.innerHTML = ''; // Clear previous error messages

if (name === '' || email === '' || phone === '' || message === '') {
    errorElement.innerHTML = 'All fields are required.';
    return false; // Prevent form submission
}

return true;

}


function onSubmit() {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
}



