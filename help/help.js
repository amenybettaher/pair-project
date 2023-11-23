
function validateForm(formId) {
    var form = document.getElementById(formId);

    // Check if the form is for the client
    if (formId === 'clientForm') {
        alert('Find your service now!');
        // Redirect to another page (change 'your-service-page.html' to your desired page)
        window.location.href = 'http://127.0.0.1:5500/client/search.html';
    } else if (formId === 'workerForm') {
        alert('Your request is received!');
    }

    // Returning false to prevent the form from submitting and the page from refreshing
    return false;
}