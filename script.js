document.addEventListener('DOMContentLoaded', function() { //event is needed because it ensures that the JavaScript code is executed only after the initial HTML document has been completely loaded and parsed
    var features = document.querySelectorAll('.feature');
    features.forEach(function(feature) {
        feature.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

function toggleFaq(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('i');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        content.style.display = "none";
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

//https://github.com/levinunnink/html-form-to-google-sheet 

const scriptURL = "https://script.google.com/macros/s/AKfycby9EdGm_RGX4rKxkM7otTngO0ZZ2mb0ISF9YibETOFE8XfBN2Ebfuv5bt6OB7Gsfh0uWQ/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("You will be updated shortly! " ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})





// const form = document.querySelector('form');
// const inputs = document.querySelectorAll('input');
// const progressBar = document.querySelector('#progress');

// let progress = 0;

// inputs.forEach((input) => {
//   input.addEventListener('focus', () => {
//     console.log('Focus event triggered on input field');
//     progress += 33.33;
//     progressBar.style.width = `${progress}%`;
//     console.log(`Progress bar width updated to ${progress}%`);
//   });
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   progressBar.style.width = '100%';
//   console.log('Form submitted, progress bar width updated to 100%');
// });


