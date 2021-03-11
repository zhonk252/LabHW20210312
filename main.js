const questionEl = document.querySelector('#question');
const answerEl = document.querySelector('#answer');
const linkEl = document.querySelector('#link');
const clickEl = document.querySelector('#click');


const askQuestions = function(){
    const answer = prompt('Hi, What is your name?')
    answerEl.innerHTML = answer;
}
clickEl.addEventListener('click', askQuestions);