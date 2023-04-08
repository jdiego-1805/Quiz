
let quizDiv = document.querySelector("#Quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let highScores = JSON.parse(localStorage.getItem("High Scores")) || [];

let timer = 90

let timerId = setInterval(function () {

    timer -= 1
    console.log(timer);

}, 1000)


let questions = [{ question: "Which Pokemon region came out first?", answers: ["Hoenn", "Unova", "Alola", "Johto"], correctAnswer: "Johto" },
{ question: "Which Pokemon is the god of all Pokemon?", answers: ["Mewtwo", "Arceus", "Regigigas", "Rayquaza"], correctAnswer: "Arceus" },
{ question: "Which Pokemon is not a playable character in Smash Bros?", answers: ["Gyarados", "Jigglypuff", "Greninja", "Incineroar"], correctAnswer: "Gyarados" },
{ question: "What Pokemon type can Eevee not evolve into?", answers: ["Dark", "Ice", "Ghost", "Fairy"], correctAnswer: "Ghost" }

]

let currentQuestion = 0

renderQuestion();

function renderQuestion() {

    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0]
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)
}

quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        console.log("Clicked!")
        console.log("Value:" + event.target.innerText);
        console.log("Correct Answer:" + questions[currentQuestion].correctAnswer)

        currentQuestion++
        renderQuestion();
    }
})