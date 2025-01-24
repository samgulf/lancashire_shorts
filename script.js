document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const audioPlayer = document.getElementById('audio-player');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.grid-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.getAttribute('data-full');
            captionText.innerText = img.alt;
            audioPlayer.src = img.getAttribute('data-audio');
            audioPlayer.play();
        });
    });

    audioPlayer.addEventListener('play', () => {
        const audioFile = audioPlayer.src.split('/').pop(); // Get the file name with extension
        const audioFileName = audioFile.split('.').slice(0, -1).join('.').replace(/\s/g, '+'); // Remove the extension
        if (window.plausible) {
            plausible(audioFileName); // Send event to Plausible
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
    });
});
