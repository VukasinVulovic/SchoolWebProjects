(() => {
    document.querySelector('.farm .chicken').addEventListener('click', () => {
        const audio = new Audio('./zvuci/kokoska.mp3');
        audio.play();
    });

    document.querySelector('.farm .cow').addEventListener('click', () => {
        const audio = new Audio('./zvuci/krava.mp3');
        audio.play();
    });

    document.querySelector('.farm .sheep').addEventListener('click', () => {
        const audio = new Audio('./zvuci/ovca.mp3');
        audio.play();
    });
})();