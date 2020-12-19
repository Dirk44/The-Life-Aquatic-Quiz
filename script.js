// select elements
var startButton = document.getElementById("start");
var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz");
var timer = document.getElementById("counter");
// var highscore = document.getElementById("highscore");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("score");
var questionContainer = document.getElementById("question-container");
var save = document.getElementById("savebtn");
let scoreTally = 0;
var counter = 60;
let randomQuestion;
let currentQuestionIndex = 0;
let viewHighscores = document.getElementById("viewHighscores");
let topScoresList = document.getElementById("topScoresList");
var highScore = JSON.parse(localStorage.getItem("highScores")) || [];



// functions

function startQuiz() {
    console.log("start Quiz");

    questionContainer.classList.remove("hide");
    startButton.classList.add("hide");
    welcome.classList.add("hide");
    console.log("welcome");
    scoreDiv.classList.remove("hide");
    randomQuestion = questions.sort(() => Math.random() - .5);

    nextQuestion();

};

function quizTimer() {
    setInterval(function () {

        if (counter <= 0) {
            clearInterval(counter = 0)
        }
        timer.innerHTML = counter
        counter -= 1
    }, 1000);
    console.log("timer");
};

function nextQuestion() {
    showQuestion(randomQuestion[currentQuestionIndex])
    console.log("newQuestion");

};

function showQuestion(questions) {
    question.innerHTML = questions.question;
    choiceA.innerHTML = questions.choiceA;
    choiceB.innerHTML = questions.choiceB;
    choiceC.innerHTML = questions.choiceC;
    choiceD.innerHTML = questions.choiceD;

};

// function finalScore() {

//     highscore.innerHTML = 'Highscore: ' + scoreTally;
//     console.log("highscore");

// };








// Questions

var questions = [{
    question: "What nickname does Klaus give Steve Zissou?",
    choiceA: "Big Daddy",
    choiceB: "Papa Steve",
    choiceC: "Steve Z",
    choiceD: "The Don",
    correct: "Steve Z"
},

{
    question: "What room has the most technologically advanced equipment on the ship?",
    choiceA: "The Bathroom",
    choiceB: "The Bridge",
    choiceC: "The Sound Room",
    choiceD: "The Kitchen",
    correct: "The Kitchen"
},

{
    question: "What symbol did Ned put on the Team Zissou flag for Klaus?",
    choiceA: "A Dolphin",
    choiceB: "A Dog",
    choiceC: "An Octopus",
    choiceD: "An Eagle",
    correct: "A Dolphin"

},

{
    question: "What was the breed of Steve Zissous cat that died by getting bit in the throat by a rattlesnake? ",
    choiceA: "Persian",
    choiceB: "Siamese",
    choiceC: "Domestic Short Hair",
    choiceD: "Tabby",
    correct: "Tabby"

},

{
    question: "Do the Interns get Glocks?",
    choiceA: "The oldest does",
    choiceB: "Only the boys",
    choiceC: "They all share one",
    choiceD: "No",
    correct: "They all share one"

},

{
    question: "What is Ned's profession outside of team Zissou?",
    choiceA: "Cop",
    choiceB: "School Teacher",
    choiceC: "Marine Biologist",
    choiceD: "Pilot",
    correct: "Pilot"

}
];




/*EVENTS*/





viewHighscores.addEventListener("click", () => {
    highScore1.classList.remove("hide");

});

startButton.addEventListener("click", () => {
    startQuiz();
    quizTimer();
});

answer.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    console.log(currentQuestionIndex);

    if (questions[currentQuestionIndex].correct === e.target.textContent) {
        // right answer
        scoreTally += 1;
        scoreDiv.textContent = 'Score: ' + scoreTally;
        console.log('correct!');
    }
    else {
        // wrong answer
        scoreDiv.textContent = 'Score: ' + scoreTally;
        console.log('wrong');
        // remove 10 seconds from timer
        counter -= 10;
    }



    // check highscore





    currentQuestionIndex = currentQuestionIndex + 1
    if (currentQuestionIndex >= 6) {
        // end of quiz
        localStorage.setItem("mostRecentScore", scoreTally);
        clearInterval(counter = 0);
        questionContainer.classList.add("hide");
        save.classList.remove("hide");


        // finalScore();



        // storeScore();



    } else {
        nextQuestion()


    };

});

  // View Highscores

topScoresList.innerHTML = highScore
    .map(score => {
        return `<li>${score.name}- ${score.score}</li>`;
    })
    .join("");


