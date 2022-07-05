let score = 0;
let questionIndex = 0;
let timer = 75;
let highScores = [];

let startBtn = document.getElementById('startBtn');
let infoBox = document.getElementById('info-box');
let answerBox = document.getElementById('answer-box');
let timeInSeconds = document.getElementById('timeInSeconds');

let clearHighScores = () => {
    highScores = [];
};

let saveHighScore = () => {
    highScores.push({
        username: document.getElementById('username').value,
        score: score,
    })
    highScores.sort((a, b) => a.score > b.score ? 1 : -1);
};

let displayHighScores = () => {
    let html;

    if (typeof(highScores[0]) === 'undefined') {
        html = `<p>No High Scores</p>`;
    } else {
        highScores.forEach((v) => {
            html += `<p>${v.username}: ${v.score}</p>`;
        });
    }

    html = `<a href="/">Back to Game</p>`;
    infoBox.innerHTML = html;
};

let answer = (answer) => {
    questionIndex++;

    if (answer) {
        score += 5;
    } else {
        timer -= 5;
    }

    displayQuestion(questionIndex);
    displayAnswer(answer);
};

let displayQuestion = (index) => {
    if (timer <= 0) {
        return endGame();
    }

    if (typeof(questions[index]) === 'undefined') {
        return endGame();
    }

    let question = questions[index];
    let html = `<h1>${question.question}</h1>`;
    question.answers.forEach((v) => {
        html += `<div><button onclick="answer(${v.answer})" type="button" class="answerBtn">${v.option}</button></div>`;
    });
    infoBox.innerHTML = html;
};

let displayAnswer = (answer) => {
    let html;

    if (answer) {
        html = `<p class="correct">Correct!</p>`;
    } else {
        html = `<p class="wrong">Wrong!</p>`;
    }

    answerBox.innerHTML = html;
};

let endGame = () => {
    timeInSeconds.innerHTML = 0;
    answerBox.innerHTML = `<p></p>`;
    let html = `
        <h1>Game Over!</h1>
        <p>Final Score: <strong>${score}</strong></p>
        <p>Enter your name</p>
        <input type="text" id="username">
        <button type="button" onclick="saveHighScore()">Save High Score</button>
    `;

    infoBox.innerHTML = html;
};

startBtn.onclick = () => {
    setInterval(() => {
        timer -= 1;

        if (timer <= 0) {
            return endGame();
        }

        timeInSeconds.innerHTML = timer;
    }, 1000);

    // display first question
    displayQuestion(0);
}