// Form validation 

const nameError = document.getElementById('name-err');
const emailError = document.getElementById('email-err');


function validateName() {
    var name = document.getElementById('name').value;  // this looks at the value stored in the name input field

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false; //so that form is not submitted
    }
    nameError.innerHTML = 'valid';
    return true;

}