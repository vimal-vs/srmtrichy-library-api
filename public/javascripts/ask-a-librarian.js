document.getElementById('ask-a-librarian-form').addEventListener('submit', sendMail);

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "passgen.pybot@gmail.com",
        Password : "5F2A4A21A5273FE9A98F4626313BECF4E21D",
        To : "chieflibrarian@ist.srmtrichy.edu.in",
        From : "passgen.pybot@gmail.com",
        Subject : document.getElementById("email").value,
        Body : document.getElementById("subject").value,
    }).then(
    alert('Submitted Successfully.'),
    );
}