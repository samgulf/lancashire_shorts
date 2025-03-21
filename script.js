document.addEventListener('DOMContentLoaded', () => {
    const showcaseImage = document.getElementById('showcase-image');
    const showcaseAudio = document.getElementById('showcase-audio');
    const showcaseAudioSource = showcaseAudio.querySelector('source');

    document.querySelectorAll('.grid-item img').forEach(img => {
        img.addEventListener('click', function () {
            const fullImage = img.getAttribute('data-full');
            const audioSrc = img.getAttribute('data-audio');

            showcaseImage.src = fullImage;
            showcaseImage.alt = img.alt;

            // Update both <audio> and <source>
            showcaseAudioSource.src = audioSrc;
            showcaseAudio.load();
            showcaseAudio.play();
        });
    });

    showcaseAudio.addEventListener('play', () => {
        const src = showcaseAudioSource.src || showcaseAudio.currentSrc;
        const audioFileName = decodeURIComponent(src.split('/').pop()).split('.').slice(0, -1).join('.');
        if (window.plausible) {
            console.log('Plausible event sent:', audioFileName);
            plausible(audioFileName);
        }
    });
});
