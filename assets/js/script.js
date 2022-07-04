//variables
var startBtn = document.querySelector('#startBtn');
var timeElement = document.querySelector("#time");
var infoContainer = document.querySelector('.info-box');
var exitBtn = infoBox.querySelector(".button .quit");
var beginBtn = infoBox.querySelector(".button .restart");
var quizContainer = document.querySelector('.quiz-box');
var optionList = document.querySelector(".optionList");
var resultsContainer = document.querySelector('#results')
var option_list = document.querySelector(".optionList");

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 75;
var timeInterval;
var score = 0;

startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo");
}

exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
}

beginBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
    quizContainer.classList.add("activeQuiz");
    showQuestions (0);
    queCounter (1);
    startTimer (75);
}
