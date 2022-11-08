// Accessible modal js

// Cache DOM elements as variables
const text = "here's some text";
const label = "video";
const openVid = document.getElementById('.vidClick');
//Below selects everything else other than the modal so this can be taken out of focus:
const FOCUSABLE_SELECTORS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';

//Create modal and append to index.html body:

const vidDialog = document.createElement('div');
vidDialog.setAttribute('role', 'dialog'); //important semantic mark up
vidDialog.setAttribute('aria-labelledby', `${label}`);
vidDialog.setAttribute('class', `modal`);
vidDialog.innerHTML = `
    <p id="something">${text}</p>
    <!-- video placeholder -->
    <div class="buttons">
        <button class="closeModal">Close</button>

        <button class="">Something else</button>
    </div>
`;

// Append to body:
document.body.appendChild(vidDialog);  //


// Open and close functions



// event listeners to list for open / close clicks

//openVid.addEventListener('click', openModal);
//closeVid.addEventListener('click', closeModal);