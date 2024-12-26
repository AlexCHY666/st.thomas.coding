const toggleThemeHutao = document.getElementById('toggle');
const themeHutao = document.getElementById('style_hutao');

toggleThemeHutao.addEventListener('change', () =>{
    if (toggleThemeHutao.checked){
        themeHutao.removeAttribute('disabled');
    } else{
        themeHutao.setAttribute('disabled', 'true');
    }
});

window.addEventListener('load', () =>{
    const isChecked = localStorage.getItem('toggleThemeHutaoState') === 'true';
    toggleThemeHutao.checked = isChecked;
});
toggleThemeHutao.addEventListener('change', () =>{
    localStorage.setItem('toggleThemeHutaoState', toggleThemeHutao.checked);
});