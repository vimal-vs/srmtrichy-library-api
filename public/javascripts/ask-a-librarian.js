document.getElementById('ask-a-librarian-form').addEventListener('submit', sendMail);

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "passgen.pybot@gmail.com",
        Password : "",
        To : "librarian@ist.srmtrichy.edu.in",
        From : "passgen.pybot@gmail.com",
        Subject : document.getElementById("email").value,
        Body : document.getElementById("subject").value,
    }).then(
    alert('Submitted Successfully.'),
    );
}