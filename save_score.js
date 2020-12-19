
const initials = document.getElementById("initials");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var saveScore = document.getElementById("save_score");
var submit = document.getElementById("submit");

console.log(highScores);




saveScore.innerText = "Score: " + mostRecentScore;

initials.addEventListener("keyup", () => {
    submit.disabled = !initials.value;
    console.log(initials.value);
});


// Save and sort and push highscores.


saveHighscore = e => {
    console.log("Clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: initials.value
    };
    highScores.push(score);
    console.log(highScores);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);


    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("file:///Users/derrickdevilliers/Desktop/bootcamp_code/homework_3/index.html");

};




