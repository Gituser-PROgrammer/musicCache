if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW registered");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration failed");
      console.log(error);
    });
}

function playFunction() {
  let musicAudioFile = document.getElementById("audio");
    musicAudioFile.src = "./songs/workCycleComplete.wav";
  musicAudioFile.play();
}
