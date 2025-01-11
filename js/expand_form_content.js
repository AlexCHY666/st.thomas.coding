const formContent = document.getElementById('content');
            
formContent.addEventListener('input', function () {
    this.style.height = 'auto';
    const minHeight = parseFloat(getComputedStyle(this).minHeight);
    this.style.height = Math.max(this.scrollHeight, minHeight) + 'px';
});