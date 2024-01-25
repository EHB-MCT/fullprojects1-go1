function send(event){
    event.preventDefault();                                             // voorkomt refreshen
    const form = document.querySelector('form');
    const name = document.querySelector('#contact-form-name');
    const email = document.querySelector('#contact-form-email');
    const subject = document.querySelector('#contact-form-subject');
    const message = document.querySelector('#contact-form-message');

    console.log(name.value);
    console.log(email.value);
    console.log(subject.value);
    console.log(message.value);
}

document.getElementById('contact-form').addEventListener('submit', send);

    
