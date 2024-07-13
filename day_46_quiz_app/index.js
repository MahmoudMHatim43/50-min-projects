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
  {
    question: "CSS stands for Cascading Style Sheets.",
    rightAnswer: "True",
    options: ["True", "False", "Maybe", "All the above"],
  },
  {
    question: "Which of the following is not a valid CSS property?",
    rightAnswer: "background-color",
    options: ["background-color", "color", "font-size", "text-align"],
  },
  {
    question: "Which of the following is the correct CSS syntax for setting multiple properties?",
    rightAnswer: "property1: value1; property2: value2;",
    options: [
      "property1: value1; property2: value2;",
      "property1, value1; property2, value2;",
      "property1: value1; property2: value2",
      "property1, value1; property2, value2",
    ],
  },
  {
    question: "Which of the following is a JavaScript data type?",
    rightAnswer: "string",
    options: ["string", "number", "boolean", "object"],
  },
  {
    question: "Which of the following is a way to declare a JavaScript variable?",
    rightAnswer: "var myVariable;",
    options: ["var myVariable;", "let myVariable;", "const myVariable;", "myVariable = undefined;"],
  },
];
let curr = 0;
let score = 0;

setCurrQuestion();
quiz();

btn.addEventListener("click", () => {
  curr++;
  if (curr < questions.length) {
    quiz();
    setCurrQuestion();
  } else {
    container.innerHTML = `
    <h1>${score >= curr / 2 + 1 ? "Congratualtion" : "Ooops! You Failed"}
    <h1>You Scored ${score} of ${curr}</h1>`;
  }
});

function setCurrQuestion() {
  question.innerHTML = questions[curr].question;
  answers.forEach((answer, index) => {
    answer.nextElementSibling.innerHTML = `${questions[curr].options[index]}`;
  });
}
function quiz() {
  answers.forEach((answer) => {
    if (answer.checked && answer.nextElementSibling.innerHTML == `${questions[curr].rightAnswer}`) {
      score++;
    }
  });
}
