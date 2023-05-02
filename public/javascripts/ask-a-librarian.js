document.getElementById('ask-a-librarian-form').addEventListener('submit', sendMail);

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "passgen.pybot@gmail.com",
        Password : "rkceuqitrzntjsee",
        To : "vimalchan24@gmail.com",
        From : "passgen.pybot@gmail.com",
        Subject : document.getElementById("email").value,
        Body : document.getElementById("subject").value,
    }).then(
    alert('Submitted Successfully.'),
    );
}