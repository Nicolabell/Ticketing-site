// Burger menu

const header = document.querySelector('.main-header');   // caches main header class to header const variable

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;             //vertical scroll position
    if(scrollPos > 10){
        header.classList.add('scrolled');         //Adds the background class if scroll greater than X
    } else {
        header.classList.remove('scrolled');      //Removes background if not
    }
})  


// Post function for newsletter sign up
// This JSON function is copied from https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/

function sendJSON(){
              
    let result = document.querySelector('.result');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
      
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "submit.php";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({ "name": name.value, "email": email.value });

    // Sending data with the request
    xhr.send(data);
}


