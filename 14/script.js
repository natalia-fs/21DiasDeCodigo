const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionsIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
  currentQuestionsIndex++;
  setNextQuestion();
});

function startGame(){
  startBtn.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionsIndex = 0;
  setNextQuestion();
}

function setNextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(question){
  questionElement.innerHTML = question.question;
  question.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.innerText = answer.text;
    btn.classList.add('btn');
    if(answer.correct){
      btn.dataset.correct = answer.correct
    }
    btn.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(btn)
  })
}

function selectAnswer(e){
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  });
  if(shuffledQuestions.length > currentQuestionsIndex + 1) nextBtn.classList.remove('hide');
  else {
    startBtn.innerText = 'Restart';
    startBtn.classList.remove('hide');
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element);
  if(correct) { element.classList.add('correct'); }
  else { element.classList.add('incorrect');}
}

function clearStatusClass(element){
  element.classList.remove('correct');
  element.classList.remove('incorrect');
}

function resetState(){
  clearStatusClass(document.body);
  nextBtn.classList.add('hide');
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

const questions = [
  {
    question: 'Melhor framework front-end Javascript?',
    answers: [
      { text: 'Angular', correct: false },
      { text: 'React', correct: false },
      { text: 'Vue', correct: false },
      { text: 'Depende', correct: true },
    ]
  }
]