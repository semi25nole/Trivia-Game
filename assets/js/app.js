//This function set everything to run once the webpage loads

      var audioElement = document.createElement("audio"); //Here I am creating a new variable called "audio"
      audioElement.setAttribute("src", "./assets/music/gott.mp3"); //Here I am setting that new variable to the source which holds the theme song

      
      $(".theme-button").on("click", function() { //Once the user presses the Play Theme button, the song will play
        audioElement.play();
      });

      $(".pause-button").on("click", function() { //Once the user presses the Pause Theme btton, the song will pause
        audioElement.pause();
    });

var option1 = 'House Tarly'; //An option for an answer the user will select
var option2 = 'House Tyrell'; //An otpion for an answer the user will select

$('.start-button').on("click", function() { 
  $('#main').html('<img src="./assets/images/getready.gif" />'); //Once the user clicks the start button, this gif will play
  $('img').css({width: 800, height: 400}); //This maintains the gif to the height and width of the previous image
  setTimeout(start, 4000); //After 4 seconds this gif will change and take the value of function start
  setTimeout(next, 8000); //After 8 seconds the start function will change and take the value of the function next
  })

  $('.a1-btn').on("click", function () { 
    $('#main').html('<img src="./assets/images/correct1.gif" />'); //If the user clicks the correct button, this gif will appear
});


  
  function start () {
  $('#main').html('<p> Which house does Samwell Tarly belong? </p>');
  $('p').css({width: 800, height: 400});
  $('p').css({"font-size": "60px", color: 'black', "font-family": 'papyrus', "background-color": "inherit", "text-align": "center"});
  
}

  function next () {
  $('#main').html($('<button class="btn btn-default btn-xs a1-btn">' + option1 + '</button>')).append($('<button class="btn btn-default btn-xs a2-btn">' + option2 + '</button>'));
  $('.a1-btn').css({"position": "absolute", "top": 100, "background-color": "white"});
  $('.a2-btn').css({"position": "absolute", "top": 100, "left": 58, "background-color": "white"});
  
};

  function next2 () {
      $('#main').html('<img src="./assets/images/correct1.gif" />');
      $('img').css({width: 800, height: 400});
  }



  


