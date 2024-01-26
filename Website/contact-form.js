
const form = document.querySelector('form');
const name = document.querySelector('contact-form-name');
const email = document.querySelector('contact-form-email');
const subject = document.querySelector('contact-form-subject');
const message = document.querySelector('contact-form-message');
const submit = document.getElementsByClassName('form-contact')[0];

/* function sendEmail(){
    cosole.log(`Naam: ${name.value} <br> email: ${email.value} <br> Onderwerp: ${subject.value} <br> Bericht: ${message.value}`)
} */

/* SubmitEvent.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
}) */

function send