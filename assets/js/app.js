$(document).ready(function() {
      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "./assets/music/gott.mp3");

      // Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
    });
});
