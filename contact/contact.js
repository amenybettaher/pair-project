/*function to verify the password same as sign in or not */

function verifyPassword() {
    var loginPassword = document.getElementById("loginPassword").value;
    var signInPassword = document.getElementById("signInPassword").value;
    var loginUsername = document.getElementById("loginUsername").value;
    var UserName= document.getElementById("username").value;

    if (loginPassword.length === 0 && loginUsername.length === 0) {
        alert("Please enter a password.");
    } else if (loginPassword !== signInPassword || loginUsername !== UserName) {
        alert("Incorrect password. Please try again.");
    } else {
        alert("Login successful!");

        // Redirect to help page
        window.location.href = "http://127.0.0.1:5500/contact/help/help.html";
    }
}