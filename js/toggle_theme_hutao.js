const toggleThemeHutao = document.getElementById('toggle');
const themeHutao = document.getElementById('style_hutao');

toggleThemeHutao.addEventListener('change', () =>{
    if (toggleThemeHutao.checked){
        themeHutao.removeAttribute('disabled');
    } else{
        themeHutao.setAttribute('disabled', 'true');
    }
});