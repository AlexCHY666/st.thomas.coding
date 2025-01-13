const themeHutao = document.getElementById('style_hutao');
const loader = document.getElementById('loader');

window.addEventListener('load', () => {
    const isChecked = localStorage.getItem('toggleThemeHutao') === 'true';
    if (isChecked) {
        themeHutao.removeAttribute('disabled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    loader.style.display = 'none';
});