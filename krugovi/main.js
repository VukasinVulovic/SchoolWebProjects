(() => {
    document.querySelectorAll('.container .circle').forEach(c => {
        c.onclick = () => {
            document.body.style.color = 'black';
            document.body.style.backgroundColor = c.getAttribute('class').replace('circle circle_', '');
        }
    });
})();