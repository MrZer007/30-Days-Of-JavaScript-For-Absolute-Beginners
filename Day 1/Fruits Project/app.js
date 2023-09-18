const fruits = ['🍇', '🍌', '🍍', '🍎', '🥝', '🍒', '🍈', '🍉', '🍊', '🥥', '🍋'];
const answer = ['grape', 'banana', 'pineapple', 'apple', 'kiwifruit', 'cherries', 'melon', 'watermelon', 'tangerine', 'coconut', 'lemon'];
const display = document.querySelector('#display-fruits');
const submit = document.querySelector('#submit');
const start = document.querySelector('#start');
let index;
start.addEventListener('click', () => {
    index = Math.floor(Math.random() * fruits.length);
    display.innerHTML = fruits[index];
})
submit.addEventListener('click', () => {  
    const result = document.querySelector('#result');
    const guess = document.querySelector('#guess');
    const guessToLowerCase = guess.value.toLowerCase();
    if(guessToLowerCase === answer[index]){
        result.innerHTML = 'You are CORRECT!'
        result.style.color = 'green';
    }
    else{
        result.innerHTML = 'You are WRONG!'
        result.style.color = 'red';
    }  
})
