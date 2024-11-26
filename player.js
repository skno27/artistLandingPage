const playlist = [
  "./static/229-lean_01.31.mp3",
  "./static/232-In a Hurry (158 bpm SKNO)_02.03.mp3",
  "./static/234-Adoration (158 bpm SKNO)_02.03.mp3",
];

let currentSong = 0;

const audio = document.getElementById("background-audio");

audio.src = playlist[currentSong];
audio.volume = 0.1;

audio.addEventListener("ended", () => {
  currentSong++;
  if (currentSong >= playlist.length) currentSong = 0;
  audio.src = playlist[currentSong];
  audio.play().catch((error) => {
    console.error("Error playing the next song", error);
  });
});

const songTitleElement = document.createElement("p");
document.getElementById("player").appendChild(songTitleElement);

function updateSongTitle() {
  const fileName =
    "SKNO " + playlist[currentSong].split("/").pop().split("-")[0]; // Extract file name
  songTitleElement.textContent = `Now Playing: ${fileName}`;
}

audio.addEventListener("play", updateSongTitle);

window.addEventListener("click", () => {
  audio.play().catch((error) => {
    console.error("Autoplay error:", error);
  });
});
