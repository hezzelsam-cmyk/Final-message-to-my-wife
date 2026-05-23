const btn = document.getElementById("musicBtn");
const audio = document.getElementById("audio");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸ Pause music";
  } else {
    audio.pause();
    btn.innerText = "▶ Play music";
  }
});
