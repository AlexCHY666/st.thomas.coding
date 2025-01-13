// make Enter key jump to next field instead of submit
document.getElementById('contact').addEventListener('keydown', function(event) {

    const inputsAny = Array.from(this.querySelectorAll('input[type=text], input[type=email], textarea'));
    const indexCurrent = inputsAny.indexOf(document.activeElement);

    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();

        if (indexCurrent !== -1 && indexCurrent < inputsAny.length - 1) {
            inputsAny[indexCurrent + 1].focus();
        }
    }
});

// check if the form is filled and submit to Google Form
document.getElementById('contact').addEventListener('submit', function(event) {

    const form = event.target;
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, textarea');
    const buttonSubmit = document.getElementById('submit');
    const formSuggestion = document.getElementById('criteria_form');

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
            formSuggestion.classList.add('hidden');
        });
    } else {
        alert('Fill in the form before submitting.')
    }
});