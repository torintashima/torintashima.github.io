window.addEventListener('load', validate, false);

function validate() {
    const form = document.getElementsByTagName('form')[0];

    const fname = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const msg = document.getElementById('msg');

    const errname = document.getElementById('errname');
    const erremail = document.getElementById('erremail');
    const errsubject = document.getElementById('errsubject');
    const errmsg = document.getElementById('errmsg');

    fname.addEventListener('blur', function(event) {
        if (!fname.value) {
            errname.innerText = 'Please enter a name.';
        }
    });

    email.addEventListener('blur', function(event) {
        if (!email.value) {
            erremail.innerText = 'Please enter an email address.';
        } else if (!email.validity.valid) {
            erremail.innerText = 'Please enter a valid email address.';
        }
    });

    subject.addEventListener('blur', function(event) {
        if (!subject.value) {
            errsubject.innerText = 'Please enter a subject name.';
        }
    });

    msg.addEventListener('blur', function(event) {
        if (!msg.value) {
            errmsg.innerText = 'Please enter a message.';
        }
    });

    fname.addEventListener('input', function(event) {
        errname.innerText = '';
    });

    email.addEventListener('input', function(event) {
        erremail.innerText = '';
    });

    subject.addEventListener('input', function(event) {
        errsubject.innerText = '';
    });

    msg.addEventListener('input', function(event) {
        errmsg.innerText = '';
    });
}