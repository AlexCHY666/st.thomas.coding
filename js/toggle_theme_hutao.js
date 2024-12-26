const toggleThemeHutao = document.getElementById('toggle');
const themeHutao = document.getElementById('style_hutao');

// Load checked state
window.addEventListener('load', () => {
    const isChecked = localStorage.getItem('toggleThemeHutao') === 'true';
    if (isChecked) {
        themeHutao.removeAttribute('disabled');
    } else {
        themeHutao.setAttribute('disabled', 'true');
    }
});

// Store checked state
toggleThemeHutao.addEventListener('change', () => {
    localStorage.setItem('toggleThemeHutao', toggleThemeHutao.checked);
    if (toggleThemeHutao.checked){
        themeHutao.removeAttribute('disabled');
    } else{
        themeHutao.setAttribute('disabled', 'true');
    }
});
