$(document).ready(function () {

    var friendsQuestion = [{
        question: "What is Chandlers middle name ?",
        answerList: ["Marey-Lee", "Ding", "Muriel", "Maney"],
        validAnswer: "Muriel"
    }, {
        question: "When Ross finds out Rachel is pregnant he also finds out condoms are only ___ percent effective ?",
        answerList: ["99.9", "90", "87", "97"],
        validAnswer: "97"
    }, {
        question: "When Joey tries to prove his masculinity what colour womens underwear does he wear ?",
        answerList: ["White with hearts", "Purple with a flower", "Red with pink lace", "Doesn't wear womens underwea"],
        validAnswer: "Red with pink lace"
    }, {
        question: "The boys win the game of football when playing against the girls",
        answerList: ["True", "False"],
        validAnswer: "False"
    }, {
        question: "When Rachel orders a cake for Emma's birthday instead of a bunny shape it's a... ?",
        answerList: ["Lion", "Rachel", "Penis", "Soccer-ball"],
        validAnswer: "Penis"
    }, {
        question: "When Rachel says she made out with a girl in college who doesn't believe her ?",
        answerList: ["Monica", "Ross", "Phoebe", "Chandler"],
        validAnswer: "Phoebe"
    }, {
        question: "What is Rachel's favourite flower ?",
        answerList: ["Rose", "Lily", "Violet", "Orchid"],
        validAnswer: "Lily"
    }, {
        question: "Joey tries to save Ross from a bullet",
        answerList: ["Yes", "No"],
        validAnswer: "No"
    }, {
        question: "When Pheobe makes a doll house what happens to it ?",
        answerList: ["It falls and breaks", "Monica breaks it", "It burns down", "She gets tired of it"],
        validAnswer: "Monica breaks it"
    }, {
        question: "What are the three things Chandler says he hates ?",
        answerList: ["Cats,crying and his Dad", "His mom, his dad and ice cream", "Dogs, thanksgiving and taking picture"],
        validAnswer: "Dogs, thanksgiving and taking picture"
    }];

    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unAnswered;
    var seconds;
    var time;
    var answered;
    var userSelect;
    var messages = {
        correct: "You are right!",
        incorrect: "You are wrong",
        endTime: "Sorry, out of time!",
        finished: "Ok, Let's see how well you did"
    }

    $("#startBtn").on("click", function () {
        $(this).hide();
        newGame();
    });

    $("#startOverBtn").on("click", function () {
        $(this).hide();
        newGame();
    });



    function newGame() {
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("incorrectAnswers").empty();
        $("unAnswered").empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unAnswered = 0;
        newQuestion();
    }



    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        answered = true;


        var h1 = $("<h1>").text(friendsQuestion[currentQuestion].question);
        $("#currentQuestion").append(h1);
        for (var i = 0; i < friendsQuestion[currentQuestion].answerList.length; i++) {
            var radioBtn = $('<button>');
            radioBtn.attr('id', "answer")
            radioBtn.text(friendsQuestion[0].answerList[i]);
            $("#answerList").append(radioBtn);
        }
        $("#answerList").on("click", "#answer", function () {
                userSelect = $(this).text();
                answerPage();
            })
        };




        function answerPage() {
            $("currentQuestion").empty();
            $("#answer").empty();
            $("#currentQuestion").empty();
            answered = true;

            var rightAnswerText = friendsQuestion[currentQuestion].validAnswer;
            if (userSelect === rightAnswerText && answered == true) {
                correctAnswer++;
                $("#message").html(messages.correct);
                $("#currentQuestion").empty();
                newquestion();
            } else if (userSelect !== friendsQuestion[currentQuestion].validAnswer && answered == true) {
                incorrectAnswer++;
                $("#message").html(messages.incorrect);
            } else {
                unAnswered++;
                $("#message").html(messages.endTime);
                answered = true;
            }
            if (currentQuestion == (friendsQuestion.length-1)){
                
            }

        };



















});