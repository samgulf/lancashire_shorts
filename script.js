document.addEventListener('DOMContentLoaded', () => {
    const showcaseImage = document.getElementById('showcase-image');
    const showcaseAudio = document.getElementById('showcase-audio');

    document.querySelectorAll('.grid-item img').forEach(img => {
        img.addEventListener('click', function () {
            const fullImage = img.getAttribute('data-full');
            const audioSrc = img.getAttribute('data-audio');

            showcaseImage.src = fullImage;
            showcaseImage.alt = img.alt;
            showcaseAudio.src = audioSrc;
            showcaseAudio.play();
        });
    });

    showcaseAudio.addEventListener('play', () => {
        const audioFileName = decodeURIComponent(audioPlayer.src.split('/').pop()).split('.').slice(0, -1).join('.');
        if (window.plausible) {
            console.log('Plausible event sent:', audioFileName);
            plausible(audioFileName); // Send event to Plausible
        }
    });

});