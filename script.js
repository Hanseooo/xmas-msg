const body = document.querySelector('body');
const audio = document.createElement('audio')
const splineViewer = document.querySelector('spline-viewer')



window.addEventListener('load', async () => {
    var loader = document.querySelector('#loader')
    await new Promise(resolve => setTimeout(resolve, 750));
    loader.style.display = 'none'; // Ensure splineViewer is selected
    splineViewer.style.display = 'block';
})

    document.addEventListener('DOMContentLoaded', function() {
        audio.setAttribute("src", 'blue (instrumental).mp3')
        audio.muted = true
        audio.volume = 0.1;
        body.appendChild(audio)
        playMusic();
    });

    function playMusic() {
        setTimeout(() => {
            audio.muted = false;
            audio.play().then(() => {
                console.log("Audio is playing");
            }).catch((error) => {
                console.error("Error playing audio:", error);
            });
        }, 250);
    }


document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    if (!audio.play()) {
       audio.play(); 
    }
}, { passive: false });

document.addEventListener('touchstart', () => {
    if (!audio.play()) {
        audio.play(); 
     }
})

document.addEventListener('keydown', function(event) {
    audio.play()
})
