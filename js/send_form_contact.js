document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeLUzCIfgjmIrQ5_WLAgCwliPWVqVraNd_mS3bSBL7XQs7KfQ/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors" 
    }).then(() => {
        document.querySelector('.success').classList.add('show');
        document.querySelector('.overlay').classList.add('show');
    })
});