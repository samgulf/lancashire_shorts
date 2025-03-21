document.addEventListener('DOMContentLoaded', () => {
    // const modal = document.getElementById('modal');
    // const modalImage = document.getElementById('modal-image');
    // const captionText = document.getElementById('caption');
    const audioPlayer = document.getElementById('audio-player');
    // const closeBtn = document.getElementsByClassName('close')[0];

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

    // document.querySelectorAll('.grid-item img').forEach(img => {
    //     img.addEventListener('click', () => {
    //         modal.style.display = 'flex';
    //         modalImage.src = img.getAttribute('data-full');
    //         captionText.innerText = img.alt;
    //         audioPlayer.src = img.getAttribute('data-audio');
    //         audioPlayer.play();
    //     });
    // });

    audioPlayer.addEventListener('play', () => {
        const audioFileName = decodeURIComponent(audioPlayer.src.split('/').pop()).split('.').slice(0, -1).join('.');
        if (window.plausible) {
            console.log('Plausible event sent:', audioFileName);
            plausible(audioFileName); // Send event to Plausible
        }
    });

    // closeBtn.addEventListener('click', () => {
    //     modal.style.display = 'none';
    //     audioPlayer.pause();
    //     audioPlayer.currentTime = 0;
    // });

    // window.addEventListener('click', (event) => {
    //     if (event.target === modal) {
    //         modal.style.display = 'none';
    //         audioPlayer.pause();
    //         audioPlayer.currentTime = 0;
    //     }
    // });
});