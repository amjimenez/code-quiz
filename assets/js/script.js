//variables
var startButton = document.querySelector('#startBtn');
var timeElement = document.querySelector("#time");
var infoContainer = document.querySelector('.info-box');
var quizContainer = document.querySelector('.quiz-box');
var resultsContainer = document.querySelector('#results')
var option_list = document.querySelector(".optionList");

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 75;
var timeInterval;
var score = 0;
