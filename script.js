document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const fileInput = document.getElementById('file-input');
    
    playBtn.addEventListener('click', function() {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });
    
    pauseBtn.addEventListener('click', function() {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                audio.src = e.target.result;
                audio.play();
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'inline-block';
            };
            reader.readAsDataURL(file);
        }
    });
});
