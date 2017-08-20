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

var a1 = 'House Tarly';
var a2 = 'House Tyrell';

  function start () {
  $('#main').html('<p> Which house does Samwell Tarly belong? </p>');
  $('p').css({width: 800, height: 400});
  $('p').css({"font-size": "60px", color: 'black', "font-family": 'papyrus', "background-color": "inherit", "text-align": "center"});
}

  function answers () {
  $('#main').html('<button>' ({"class": 'btn btn-default btn-xs'}) + a1 + '</button>');
  $('#btn-xs').css({"background-color": white});
  
}

$('.start-button').on("click", function() {
  $('#main').html('<img src="./assets/images/getready.gif" />');
  $('img').css({width: 800, height: 400});
  setTimeout(start, 5000);
  setTimeout(answers, 10000);
});








