// Copy and paste your work, or start typing.//Questions with answers
const questionBank = [
    {
        text: "What's the most popular pet in the US?",
        answerChoices: ['Cat', 'Dog', 'Monkey', 'Racoon'],
        correctAnswer: 'Cat'
    },
    {
        text: "What paw do cats use the most?",
        answerChoices: ['Both', 'Right', 'Left', 'Feet'],
        correctAnswer: 'Both'
    },
    {
        text: "How high can a cat jump?",
        answerChoices: ['2 ft', '5 ft', '20 ft'],
        correctAnswer: '5 ft'
    },
    {
        text: "Cats are anti-social",
        answerChoices: ['Yes', 'No', 'Depends on Human'],
        correctAnswer: 'Depends on Human'
    },
    {
        text: "Do cats rule?",
        answerChoices: ['Yes', 'YESS', 'Why is this even a question? DUH!'],
        correctAnswer: 'Why is this even a question? DUH!'
    },
    
];

let index = 0;
let seconds = 60;
let timerID = null;
let answersCorrect = 0;


function startGame(){
    index = 0;
    seconds = 60;
    timerID = null;
    answersCorrect = 0;
    startTimer();
    displayQuestion();
}

const bigholder = document.getElementById('bigholder');
const input = document.getElementById('input')
const startBtn = document.getElementById('start-btn');
let secondsDisplay = document.querySelector('.seconds');

startBtn.addEventListener('click', startGame);


function startTimer() {
    timerID = setInterval(function(){
        seconds--;
        if (seconds <= 0) gameOver();
        secondsDisplay.textContent = seconds;
    }, 1000);
}

function displayQuestion() {
    let questionText = document.createElement('h1');
    questionText.textContent = questionBank[index].text;
    let answerChoices = document.createElement('ul');
    answerChoices.addEventListener('click', handleAnswerChoice);
    for (let i=0; i< questionBank[index].answerChoices.length; i++) {
        let li = document.createElement('li');
        li.classList.add('answer-choice');
        li.textContent = questionBank[index].answerChoices[i];
        answerChoices.appendChild(li);
    }
    bigholder.innerHTML='';
    bigholder.appendChild(questionText);
    bigholder.appendChild(answerChoices);
}


function handleAnswerChoice(event){
    let userSelection = event.target.textContent;
    if (questionBank[index].correctAnswer === userSelection) {
        answersCorrect++;
        console.log(answersCorrect, 'so far');
    } else {
        console.log('This is incorrect!');
        seconds-=15;
    }
    index++;
    if (index >= questionBank.length) {
        gameOver();
    } else {
        displayQuestion();
    }
}

function gameOver() {
    clearInterval(timerID);
    bigholder.innerHTML = `
    <h1 class="game-over">Game Over - Don't Worry You Can Try Again!</h1>
    <p>${answersCorrect} correct answer(s) out of ${questionBank.length}</p>
    <form id="forminend">
        Username: <input type="text" name="User" id="username"><br>
        <button type="submit">Submit Name</button>
    </form>
    <button id="gameover-btn">Restart Quiz</button> 
    `;
    const gameOverBtn = document.getElementById('gameover-btn');
    gameOverBtn.addEventListener('click', startGame);

    const endform = document.getElementById('forminend');
    endform.addEventListener('submit', Submit);
}

function Submit(event) {
    event.preventDefault();
    const username = document.getElementById('username');
    console.log(username.value, answersCorrect, ' out of ', questionBank.length);
    //clearInterval(timerID);
    bigholder.innerHTML = `
    <h1 class="game-over">Your high score has been submitted!</h1>
    <p>${answersCorrect} correct answer(s) out of ${questionBank.length}</p>
    <button id="gameover-btn">Restart Quiz</button> 
    `;
    const gameOverBtn = document.getElementById('gameover-btn');
    gameOverBtn.addEventListener('click', startGame);

}
