$(document).ready(function() {
    var newColor;
    var colorChoices = ['red', 'yellow', 'blue', 'green', 'purple', 'orange', 'thistle', 'papayawhip'];

    boxMaker();
    pickAColor();

    //Welcome message
    function pickAColor() {
        randomColor();
        $('.welcomeMessage').text("Ello. Please click color: " + newColor);
    }

    // click event, if/else to say Correct or Try Again
    $('.blockOfColor').on("click", function() {
        var $el = $(this).data('id');
        if ($el === newColor) {
            $('footer').text("You are correct!");
            $('footer').append('<button class="endGame"> Play Again? </button>');
        } else {
            $('footer').append("Try Again!<br/>");
        }
        $('.endGame').click(function() {
            location.reload(true);
        });
    });


    //random number generator
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    //utilizes random number generator to randomize colors appended to DOM
    function randomColor() {
        var randomizer = randomNumber(0, colorChoices.length - 1);
        newColor = colorChoices[randomizer];
    }

    // appends colored divs to the DOM
    function boxMaker() {
        for (var i = 0; i < colorChoices.length; i++) {
            $('#container').append("<div class ='blockOfColor' style='background-color: " + colorChoices[i] + "'></div>");
            $('#container').children().last().data('id', colorChoices[i]);
        }
    }
});
