// Form validation 

const emailError = document.getElementById('email-err');


//Validate email
function validateEmail()  {
    const email = document.getElementById('email').value;
    //check valid email address

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false; //so that form is not submitted
    }
    if(!email.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)) {
        emailError.innerHTML = 'Please enter a valid email address';
        return false; 
    }
    emailError.innerHTML = 'valid';
    return true; //so that form is about to submit

}


//add focus on fields if error


