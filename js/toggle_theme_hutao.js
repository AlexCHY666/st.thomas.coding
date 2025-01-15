const toggleThemeHutao = document.getElementById('toggle');
const themeHutao = document.getElementById('style_hutao');

// load checked state
document.addEventListener('DOMConentLoaded', () => {
    const isChecked = localStorage.getItem('toggleThemeHutao') === 'true';
    if (isChecked) {
        themeHutao.removeAttribute('disabled');
    } else {
        themeHutao.setAttribute('disabled', 'true');
    }
});

// store checked state
toggleThemeHutao.addEventListener('change', () => {
    localStorage.setItem('toggleThemeHutao', toggleThemeHutao.checked);
    if (toggleThemeHutao.checked){
        themeHutao.removeAttribute('disabled');
    } else{
        themeHutao.setAttribute('disabled', 'true');
    }
});
