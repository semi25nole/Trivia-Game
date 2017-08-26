//Once the document loads, run this code
$(document).ready(function() {

    var questions = [{
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
            question: "What is the name of Jon Snow's Direwolf??",
            answer: "Ghost",
            options: ["Gildry", "Jackal", "Ghost", "Recon"],
        },
        {
            question: "What is the official Lannister family motto??",
            answer: "A Lannister Always Pays His Debts",
            options: ["Always Rely On Family", "A Lannister Always Pays His Debts", "Lannisters Never Die", "Loose Lips Sink Ships"],
        },
        {
            question: "Which house’s motto is “Fire and Blood”?",
            answer: "House Targaryen",
            options: ["House Stark", "House Greyjoy", "House Martel", "House Targaryen"],
        },
    ];

    var currentQ = 0;
    var correct = 1;
    var incorrect = 1;



    //This section contains the music player
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/music/gott.mp3");


    $(".theme-button").on("click", function() {
        audioElement.play();
    });

    $(".pause-button").on("click", function() {
        audioElement.pause();
    });




    //This function will restart the game
    function restart() {
        $('.jumbotron').empty().append("<button>Care to Play Again?</button>");
        $('button').on("click", function() {
            var newDiv = ($('<div/>').addClass('text-center'));
            var newH1 = ($('<h1/>').attr('id', 'title').text(questions[currentQ].question));
            newDiv.append(newH1);
            for (var i = 0; i < questions[currentQ].options.length; i++) {
                var option = ($('<input type="button" />').addClass('option').val(questions[currentQ].options[i]));
                newDiv.append(option);
            }
            $('.jumbotron').html(newDiv);
            currentQ++;
        })
        $('img').css({ width: 800, height: 350 });
    };




    //This function, when called will display the next question with the button options for the user to select
    function next() {
        var newDiv = ($('<div/>').addClass('text-center'));
        var newH1 = ($('<h1/>').attr('id', 'title').text(questions[currentQ].question));
        newDiv.append(newH1);
        for (var i = 0; i < questions[currentQ].options.length; i++) {
            var option = ($('<input type="button" />').addClass('option').val(questions[currentQ].options[i]));
            newDiv.append(option);
        }
        $('.jumbotron').html(newDiv);
        currentQ++;
    }




    //We are calling the next function to begin the game
    next();





    //This is the game; on the click of button, if it is equal to the answer in the array, display the appropriate gif
    $(document).on("click", ".option", function() {
        if ($(this).val() === questions[0].answer || $(this).val() === questions[1].answer || $(this).val() === questions[2].answer || $(this).val() === questions[3].answer ||
            $(this).val() === questions[4].answer) {
            $('.jumbotron').html('<img src="./assets/images/correct1.gif" />');
            $('img').css({ width: 800, height: 350 });
            $('.jumbotron').css({ padding: 0 });
            $('#correct').html("Correct: " + correct++);

        } else {

            $('.jumbotron').html('<img src="./assets/images/wrong1.gif" />');
            $('img').css({ width: 800, height: 350 });
            $('.jumbotron').css({ padding: 0 });
            $('#incorrect').html("Incorrect: " + incorrect++);

        }

        setTimeout(next, 4000); //This is our timeout feature, this will cycle through the gifs after 4 seconds and display the next question group

    })

});