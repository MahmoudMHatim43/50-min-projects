const question = document.querySelector(".question");
const answers = document.querySelectorAll("input");
const btn = document.querySelector("#submit");
const container = document.querySelector(".container");
const questions = [
  {
    question: "At what year JavaScript was lunched ?",
    rightAnswer: "1995",
    options: ["1995", "1990", "2000", "2010"],
  },
  {
    question: "What is the capital of France?",
    rightAnswer: "Paris",
    options: ["London", "Berlin", "Madrid", "Paris"],
  },
  {
    question: "Who painted the Mona Lisa?",
    rightAnswer: "Leornado",
    options: ["Michelangelo", "Leornado", "Raphael", "Picasso"],
  },
  {
    question: "What is the largest planet in our solar system?",
    rightAnswer: "Jupiter",
    options: ["Saturn", "Mars", "Jupiter", "Uranus"],
  },
];
let curr = 0;
let score = 0;

setCurrQuestion();
quiz();

btn.addEventListener("click", () => {
  if (curr < 4) {
    quiz();
    curr++;
    setCurrQuestion();
    console.log(score, curr);
  } else {
    container.innerHTML = `
    <h1>${score >= 3 ? "Congratualtion" : "Ooops! You Failed"}
    <h1>You Scored ${score} of ${curr}</h1>`;
  }
});

function setCurrQuestion() {
  question.innerHTML = questions[curr].question;
  answers.forEach((answer, index) => {
    answer.nextElementSibling.innerHTML = questions[curr].options[index];
  });
}
function quiz() {
  answers.forEach((answer) => {
    if (answer.checked && answer.nextElementSibling.innerHTML == questions[curr].rightAnswer) {
      score++;
    }
  });
}
