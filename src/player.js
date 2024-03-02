function playMedia(mediaSrc, mediaType, id) {
  // Toggle view
  var videoPlayer = document.getElementById(id);
  console.log(videoPlayer);
  // Get the computed style of the videoPlayer element
  var computedStyle = window.getComputedStyle(videoPlayer);

  // Log the computed display style to the console
  console.log(computedStyle.display);

  if (computedStyle.display === "none") {
    videoPlayer.style.display = "block";
    // videoPlayer.src = "./../static/lucky_dance.mp4";
  } else {
    videoPlayer.style.display = "none";
    videoPlayer.pause();
  }

  var mediaPlayer = document.querySelector("#video-player", +mediaType);
  mediaPlayer.src = mediaSrc;
  mediaPlayer.play();
}

// display video if it is playing
// function toggleVideo() {}
//  controlling the media player

var audioPlayer = document.querySelector("#audio-player audio");
var videoPlayer = document.querySelector("video-player video");

// event listeners to control the players

// audioPlayer.addEventListener("play", () => {
//   console.log("Audio is playing");
// });

// videoPlayer.addEventListener("play", () => {
//   console.log("Video is playing");
// });
