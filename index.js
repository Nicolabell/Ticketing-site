// BURGER MENU ---

const header = document.querySelector('.main-header');   // caches main header class to header const variable

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;             //vertical scroll position
    if(scrollPos > 10){
        header.classList.add('scrolled');         //Adds the background class if scroll greater than X
    } else {
        header.classList.remove('scrolled');      //Removes background if not
    }
})  




// ACCESSIBLE VIDEO MODAL ---
//cache the DOM elements as js variables;

const KEYCODE = {  // So user can use escape key to exit modal
    ESC: 27
}; 

const dialog = document.querySelector('.dialog');
const vidImg = document.getElementById('openVid');  //this one works
const dialogWindow = document.querySelector('.dialog__window');
const dialogMask = document.querySelector('.dialog__mask');   // Uncaught TypeError: dialog is null

let perviousActiveElement; //let is used so this variable can be overwritten

//Open modal
vidImg.addEventListener('click', () => {   //trying to get modal to display when video image clicked...
    dialog.classList.add('opened');
    console.log('why isnt this workin');
  });


//When modal opened:
function openDialog()  {
    //Grabs reference to prev activeElement
    perviousActiveElement = document.activeElement;

    // Make everthing else inert whil dialog active - all children of document body cannot be focused
    Array.from(document.body.children).forEach(child => {
        if (child !== dialog)
        child.inert = true;
    });

    // Dialog made visible
    dialog.classList.add('opened');

    // Listen for closing of dialog
    dialogMask.addEventListener('click', closeDialog);
    dialogWindow.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', closeDialog);
    });
    document.addEventListener('keydown', checkCloseDialog);

    // Move focus into the dialog.
    dialog.querySelector('button').focus();

}

  // close dialog on escape key
  function checkCloseDialog(e) {
    if (e.keyCode === KEYCODE.ESC)
    closeDialog();
}


//On close of modal:
function closeDialog() {
    // event listener clean up
    dialogMask.removeEventListener('click' , closeDialog);
    dialogWindow.querySelectorAll('button').forEach(btn => {
        btn.removeEventListener('click, closeDialog');
    });

    //Uninert siblings 
    Array.from(document.body.children).forEach(child => {
        if (child !== dialog)
        child.inert = false;
    });


    //Hide the dialog again
    dialog.classList.remove('opened');

    // Restore focus to previous active element so user not lost
    perviousActiveElement.focus();


}





// POST FUNCTION for newsletter sign up ---
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


