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
        answer: "Specifies the layout of the web pages."
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
        answer: "delcare"
    },
    {
        title: "JavaScript arrays store...",
        choices: ["Multiple Values", "One Value", "Elements","Tags"],
        answer: "Multiple Values"
    }
]

// global variables 
var timerEl = document.getElementById('countdown');
var score = [];

// function to manage countdown timers
function countdown(){
    //set countdown inital time
    var timeLeft = 120;
    // call function to be executed every 1000 miliseconds 
    var timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft
        timeLeft--; // timeleft = timeleft - 1 
        if(timeLeft <= 0){
            clearInterval(timeInterval);
            timerEl.textContent = "";
        }
    }, 1000);
};

// function to remove quiz intro content 
function removeIntro(){
    var clearIntro = document.getElementById("intro");
    if(clearIntro.style.display === "none"){
        clearIntro.style.display = "block";
    } else {
        clearIntro.style.display = "none";
    }
};

// start quiz

