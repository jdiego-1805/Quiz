let quizDiv = document.querySelector("#Quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let highScores = JSON.parse(localStorage.getItem("#High Scores")) || [];
let timerS = document.querySelector("#timer1");
let timer = 60
let submitButton = document.querySelector("#submit")
let fullName = document.querySelector("#fname")
let startQuiz = document.querySelector("#Start-Quiz")
let timerId
let gameEnd = document.querySelector("#End-Game")
highScores.textContent = "highScores"
let ul = document.querySelector("#scoreboard")
let finEnd = document.querySelector("#finalS")

// starts the quiz
startQuiz.addEventListener("click", function () {

    startQuiz.classList.add("hide");
    quizDiv.classList.remove("hide");
    startTimer();

})

// starts the timer
function startTimer() {

    timerS.textContent = timer;

    timerId = setInterval(function () {

        timer -= 1
        console.log(timer);
        if (timer === 0) {

            endGame();

        }
        timerS.textContent = timer;

    }, 1000)

}

// the questions
let questions = [{ question: "Which Pokemon region came out first?", answers: ["Hoenn", "Unova", "Alola", "Johto"], correctAnswer: "Johto" },
{ question: "Which Pokemon is the god of all Pokemon?", answers: ["Mewtwo", "Arceus", "Regigigas", "Rayquaza"], correctAnswer: "Arceus" },
{ question: "Which Pokemon is not a playable character in Smash Bros?", answers: ["Gyarados", "Jigglypuff", "Greninja", "Incineroar"], correctAnswer: "Gyarados" },
{ question: "What Pokemon type can Eevee not evolve into?", answers: ["Dark", "Ice", "Ghost", "Fairy"], correctAnswer: "Ghost" }

]

let currentQuestion = 0

renderQuestion();

// how to questions show up
function renderQuestion() {

    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0]
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)

}


// how the questions switch between each other
quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        console.log("Clicked!")
        console.log("Value:" + event.target.innerText);
        console.log("Correct Answer:" + questions[currentQuestion].correctAnswer)
        correctAnswer.textContent = "Correct"

        if (event.target.innerText !== questions[currentQuestion].correctAnswer) {

            timer -= 10
            correctAnswer.textContent = "Incorrect"

        }

        console.log(currentQuestion)
        console.log(questions.length)
        currentQuestion++
        if (currentQuestion === questions.length) {

            endGame();

            return
        }
        renderQuestion();
        finEnd.textContent = "Final Score... " + timer
    }
})


// the end of the game 
function endGame() {

    clearInterval(timerId);
    gameEnd.classList.remove("hide")
    startQuiz.classList.add("hide")
    quizDiv.classList.add("hide")

}

// submitting scores
submitButton.addEventListener("click", function (event) {

    event.preventDefault
    let finalScore = {
        name: fullName.value,
        timer: timer,
    }
    highScores.push(finalScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    renderScores();
})

function renderScores() {
    for (let i = 0; i < highScores.length; i++) {
        let highScore = document.createElement("ul")
        highScore.textContent = highScores[i] + "-" + highScores[i].timer;
        ul.appendChild(highScore)
    }
}
