document.getElementById('contact').addEventListener('submit', function(event) {

    const form = event.target;
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, textarea');
    const buttonSubmit = document.getElementById('submit');

    let isFilled = false;
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            isFilled = true;
        }
    });

    if (isFilled) {
        event.preventDefault();

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSeLUzCIfgjmIrQ5_WLAgCwliPWVqVraNd_mS3bSBL7XQs7KfQ/formResponse", {
            method: "POST",
            body: formData,
            mode: "no-cors" 
        }).then(() => {
            document.querySelector('.success').classList.add('show');
            document.querySelector('.overlay').classList.add('show');
            document.querySelector('.h2_container').classList.add('hidden');
        });
    } else {
        alert('Fill in the form before submitting.')
    }
});