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
        choices: ["Specifies the layout of web pages.", "Defines the content of the web pages","Programs the behavior of web pages","All of teh above."],
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
let playerScoreEl = document.querySelector("#player-score");
let initialsInput = document.querySelector("#player-initials");
let submitScoreButton = document.querySelector("#submit-score");

// view high score page elements
let highScoresEl = document.querySelector("#highScores");
let scoresEl = document.querySelector("#scores");
let goBackBtn = document.querySelector("#go-back");

// universal variables 
let viewHighScoresBtnEl = document.querySelector(".view-high-score")
let timerEl = document.querySelector("#timer");
let secondsElapsed = 0;
let currentQ = 0;
let score = 0;
let timeLeft = 120;

// acceptance critera 
// when i click a start button 
// then a timer starts and i am presented with a question
// when i answer a question 
// then i am presented with another question
// when i answer a question incorrectly
// then time is subtracted from the clock 
// all questions are answered or the timer clock reaches 0
// then the game is over 
// when the gmae is over i can save my initials and score 

// start quiz function 
function startQuiz() {
    startTimer();
    populateQuestion();
}
// timer 
function startTimer(){
    let timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft;
        timeLeft--;
        if(timeLeft <= 0){
            clearInterval(timeInterval);
            timerEl.textContent ="Time Up!";
            endQuiz();
        } 
    }, 1000);
}

// hide intro content 
function hideIntro(){
    introEl.style.display = "none";
}
// show intro content 
function showIntro(){
    introEl.style.display = "block";
}

// create question
function populateQuestion(){

    //show the question
    questionEl.textContent = questions[currentQ].title;

    //show answer choices
    for(let i = 0; i < questions[currentQ].choices.length; i++){
        var choiceBtnEl = document.createElement("button");
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
    setTimeout(clearPage, 1500);
    setTimeout(nextQuestion, 1500);
    // add function for next question
}

// function for wrong answer 
function wrongAnswer(){
    timeLeft = timeLeft - 10;
    currentQ++;
    gradingEl.textContent = "Wrong Answer!";
    setTimeout(clearPage, 1500);
    setTimeout(nextQuestion, 1500);
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
    clearPage();
    playerScoreEl.textContent = score;
}

// submit score 


// let playerScoreEl = document.querySelector("#player-score");
// let initialsInput = document.querySelector("#player-initials");

// events 

window.onload = function(){
    showIntro

}
// start quiz
startQuizButton.addEventListener("click", startQuiz());
// save score
submitScoreButton.addEventListener("click", function(event){
    event.preventDefault();

    var userHighScore = {
        initials: initialsInput.value.trim(),
        score: score
    };

    localStorage.setItem("userHighScore", JSON.stringify(userHighScore));
});
// go back
// show high scores