// array of quiz questions, choices & answers 
var questions = [
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "An HTML document must start with _____.",
        choices: ["<!DOCTYPE html>", "<H1>", "<body>", "<head>"],
        answer: "<!DOCTYPE html>"
    },
    {
        title: "Which of the following is the correct way to format an element:",
        choices: ["start tag, content, end tag", "start tag, content", "content, end tag", "content"],
        answer: "start tag, content, end tag"
    },
    {
        title: "An unordered list starts with the _____ tag.",
        choices: ["<ol>", "<li>", "<ul>", "None of the above."],
        answer: "<ul>"
    },
    {
        title: "To reference a class in CSS you use which of the following characters:",
        choices: ["#", "*", ".", "!"],
        answer: "."
    },
    {
        title: "CSS...",
        choices: ["Specifies the layout of web pages.", "Defines the content of the web pages","Programs the behavior of web pages","All of the above."],
        answer: "Specifies the layout of web pages."
    },
    {
        title: "CSS selectors can be...",
        choices: ["Simple Selectors", "Combinator Selectors", "Pseudo-class Selectors", "All of the above."],
        answer: "All of the above."
    },
    {
        title: "JavaScript code is inserted between _____ tags.",
        choices: ["Java", "Header", "Script", "None of the above."],
        answer: "Script"
    },
    {
        title: "Which of the following is not a way to delcare a JavaScript Variable?",
        choices: ["var","let", "const","declare"],
        answer: "declare"
    },
    {
        title: "JavaScript arrays store...",
        choices: ["Multiple Values", "One Value", "Elements","Tags"],
        answer: "Multiple Values"
    }
]
// welcome page elements
let introEl = document.querySelector("#intro");
let startQuizButton = document.querySelector("#intro-btn");

// quiz page elements
let quizEl = document.querySelector(".quiz");
let questionEl = document.querySelector("#question");
let choicesEl = document.querySelector("#choices")
let answerEl = document.querySelector("#answer");
let gradingEl = document.querySelector("#grading")

// final score page elements
let finalScoreEl = document.querySelector(".final-score");
let playerScoreEl = document.querySelector("#player-score");
let initialsInput = document.querySelector("#player-initials");
let submitScoreButton = document.querySelector("#submit-score");
let viewHighScoreButton = document.querySelector("#view-high-scores");
// view high score page elements
let highScoresEl = document.querySelector("#highScores");
let scoresEl = document.querySelector("#scores");
let goBackBtn = document.querySelector("#go-back");
let playAgainBtn = document.querySelector("#play-again");
// universal variables 
let viewHighScoresBtnEl = document.querySelector(".view-high-score")
let timerEl = document.querySelector("#timer");
let secondsElapsed = 0;
let currentQ = 0;
let score = 0;
let timeLeft = 90;

// start quiz function
function startQuiz() {
    hideIntro();
    startTimer();
    populateQuestion();
}

// timer 
function startTimer(){
timeInterval = setInterval(function(){
    timerEl.textContent = timeLeft;
    timeLeft--;
    if(timeLeft <= 0){
        clearInterval(timeInterval);
        timerEl.textContent = "Times Up!";
        endQuiz();
    } else if (timeLeft > 0 && currentQ >= questions.length){
        clearInterval(timeInterval);
        timerEl.textContent = "Game Over!";
        endQuiz();
    } 
    }, 1000);
}

// create question
function populateQuestion(){
    showQuestions();
    //show the question
    questionEl.textContent = questions[currentQ].title;

    //show answer choices
    for(let i = 0; i < questions[currentQ].choices.length; i++){
        var choiceBtnEl = document.createElement("button");
        choiceBtnEl.className = "choice-btn";
        choiceBtnEl.textContent = questions[currentQ].choices[i];
        answerEl.appendChild(choiceBtnEl);
        
        //check answer 
        choiceBtnEl.addEventListener('click', function(){
            if(questions[currentQ].choices[i] === questions[currentQ].answer){
                correctAnswer();
            } else{
                wrongAnswer();
            }
        });
    } 
}
// function for correct answer 
function correctAnswer(){
    score++;
    currentQ++;
    gradingEl.textContent = "Correct Answer!";
    setTimeout(clearPage, 1000);
    setTimeout(nextQuestion, 1000);
    // add function for next question
}
// function for wrong answer 
function wrongAnswer(){
    timeLeft = timeLeft - 10;
    currentQ++;
    gradingEl.textContent = "Wrong Answer!";
    setTimeout(clearPage, 1000);
    setTimeout(nextQuestion, 1000);
}
// next question
function nextQuestion(){
    if (currentQ < questions.length){
        populateQuestion();
    } else {
        endQuiz();
    }
}
// clear page
function clearPage() {
    questionEl.textContent = "";
    choicesEl.textContent = "";
    answerEl.textContent = "";
    gradingEl.textContent = "";
}

//end quiz - view score 
function endQuiz(){
    if(timeLeft > 0){
        clearPage();
        showFinalScore();
        //clearInterval(timeInterval);
    }
    playerScoreEl.textContent = score;
}

// show high scores 
function highScorePage(){
    clearPage();
    hideIntro();
    hideQuestions();
    hideFinalScore();
    showHighScore();
}

submitScoreButton.addEventListener("click", function(){
    var userInfo = {
        initials: initialsInput.value,
        quizScore: score
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
        alert("Your score has been saved.");
});


// events 
//initial load setup
window.onload = function(){
    hideFinalScore();
    hideHighScore();
    hideQuestions();
}
// start quiz
startQuizButton.addEventListener("click", function(){
    startQuiz();
});

// go back
goBackBtn.addEventListener("click", function(){
    showIntro();
    hideHighScore();
    hideFinalScore();
})
// show high scores
viewHighScoreButton.addEventListener("click",function(){
    highScorePage();
    var allScores = JSON.parse(localStorage.getItem("userInfo"));
    document.getElementById("scores").innerHTML = allScores.initials + " - " + allScores.quizScore;

});

// hide questions 
function hideQuestions(){
    quizEl.style.display = "none"
}
// show questions
function showQuestions(){
    quizEl.style.display = "block"
}
// hide final score elements 
function hideFinalScore(){
    finalScoreEl.style.display = "none";
}
// show final score elements
function showFinalScore(){
    finalScoreEl.style.display = "block";
}
// hide high scores 
function hideHighScore(){
    highScoresEl.style.display = "none";
}
function showHighScore(){
    highScoresEl.style.display = "block";
}
// hide intro content 
function hideIntro(){
    introEl.style.display = "none";
}
// show intro content 
function showIntro(){
    introEl.style.display = "block";
}