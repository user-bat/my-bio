document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audioPlayer');
  
    function togglePlay() {
      if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
      }
    }
  
    if (audioPlayer) {
      togglePlay();
    }
  })