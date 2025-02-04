const loader = document.getElementById('loader');

document.addEventListener('DOMContentLoaded', () => {
    const isChecked = localStorage.getItem('toggleThemeHutao') === 'true';
    const domContentLoadedTime= new Date();

    if (isChecked) {
        themeHutao.removeAttribute('disabled');
    }
    console.log(`DOM fully loaded at: ${domContentLoadedTime.toISOString()}`);
});

window.addEventListener('load', function() {
    const fullyLoadedTime = new Date();

    loader.style.display = 'none';
    console.log(`Page fully loaded (including resources) at: ${fullyLoadedTime.toISOString()}`)
});