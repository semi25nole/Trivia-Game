
var questions = [
  {
    question: "What is the Hound's Real Name?",
    answer: "Sandor Clegane",
    options: ["Gregor Clegane", "Beric Dondarrion", "Euron Greyjoy", "Sandor Clegane"],
  },
  {
    question: "Ramsay Bolton Held Who Captive?",
    answer: "Theon Greyjoy",
    options: ["Sansa Stark", "Jon Snow", "Theon Greyjoy", "Tyrion Lannister"],
  },
  {
    question: "What akjflksjf",
    answer: "House Tarly",
    options: ["House Tarly", "House Tyrell", "House Stark", "House Lannister"],
  },
  {
    question: "What akjflksjf",
    answer: "House Tarly",
    options: ["House Tarly", "House Tyrell", "House Stark", "House Lannister"],
  },
  {
    question: "What akjflksjf",
    answer: "House Tarly",
    options: ["House Tarly", "House Tyrell", "House Stark", "House Lannister"],
  },
];


var currentQ = 0;
var correct = 0;
var incorrect = 0;

change();

var audioElement = document.createElement("audio"); //Here I am creating a new variable called "audio"
audioElement.setAttribute("src", "./assets/music/gott.mp3"); //Here I am setting that new variable to the source which holds the theme song


$(".theme-button").on("click", function() { //Once the user presses the Play Theme button, the song will play
    audioElement.play();
});

$(".pause-button").on("click", function() { //Once the user presses the Pause Theme btton, the song will pause
    audioElement.pause();
});

$(document).on("click", function() {
  if((questions.answer === questions[currentQ].options[i])) {
    $('.jumbotron').html('<img src="./assets/images/correct1.gif" />');
    $('img').css({width: 800, height: 400});
    $('.jumbotron').css({padding: 0});
  }
  else {
    $('.jumbotron').html('<img src="./assets/images/correct1.gif" />');
    $('img').css({width: 800, height: 400});
    $('.jumbotron').css({padding: 0});
  }
})

$('#option1').on("click", function () {
  $('.jumbotron').html('<img src="./assets/images/correct1.gif" />');
  $('img').css({width: 800, height: 400});
  $('.jumbotron').css({padding: 0});
})

$('#option2').on("click", function () {
  $('.jumbotron').html('<img src="./assets/images/wrong1.gif" />');
  $('img').css({width: 800, height: 400});
  $('.jumbotron').css({padding: 0});
})

$('#option3').on("click", function () {
  $('.jumbotron').html('<img src="./assets/images/wrong1.gif" />');
  $('img').css({width: 800, height: 400});
  $('.jumbotron').css({padding: 0});
})

$('#option4').on("click", function () {
  $('.jumbotron').html('<img src="./assets/images/wrong1.gif" />');
  $('img').css({width: 800, height: 400});
  $('.jumbotron').css({padding: 0});
})


function change () {
  var newDiv = ($('<div/>').addClass('text-center'));
  var newH1 = ($('<h1/>').attr('id', 'title').text(questions[currentQ].question));
  newDiv.append(newH1);
  for( var i = 0; i < questions[currentQ].options.length; i++){
    var option = ($('<input type="button" />').attr('id', 'option' + (i+1)).val(questions[currentQ].options[i]));
    newDiv.append(option);
  }
  $('.jumbotron').html(newDiv);

}
