//your JS code here. If required.
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionA = document.getElementById('a_text');
const optionB = document.getElementById('b_text');
const optionC = document.getElementById('c_text');
const optionD = document.getElementById('d_text');
const options = document.querySelectorAll('input[type="radio"]');
const submitButton = document.getElementById('submit');
const responseContainer = document.getElementById('response');
const resultElement = document.getElementById('result');
const reloadButton = document.getElementById('reload');

let currentQuestion = 0;
let score = 0;
const questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  }
];

function loadQuestion() {
  const currentQuiz = questions[currentQuestion];
  questionElement.innerText = currentQuiz.question;
  optionA.innerText = currentQuiz.a;
  optionB.innerText = currentQuiz.b;
  optionC.innerText = currentQuiz.c;
  optionD.innerText = currentQuiz.d;
}

function resetOptions() {
  options.forEach((option) => {
    option.checked = false;
  });
}

function checkAnswer() {
  const currentQuiz = questions[currentQuestion];
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  if (selectedOption && selectedOption.id === currentQuiz.correct) {
    score++;
  }
}

function showResult() {
  quizContainer.style.display = 'none';
  responseContainer.style.display = 'block';
  resultElement.innerText = `You scored ${score} out of ${questions.length}.`;
}

function loadNextQuestion() {
  checkAnswer();
  resetOptions();
  currentQuestion++;

