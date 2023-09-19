let count = 0;
const counter = document.getElementById('counter');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const decrease = document.querySelector('#decrease');

increase.addEventListener('click', () => {
    count += 1;
    counter.innerHTML = count;
    if(count > 0){
        counter.style.color = 'green';
    }
    else if(count < 0){
        counter.style.color = 'red';
    }
    else{
        counter.style.color = 'black';
    }
});

reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = 'black';
});

decrease.addEventListener('click', () => {
    count -= 1;
    counter.innerHTML = count;
    if(count > 0){
        counter.style.color = 'green';
    }
    else if(count < 0){
        counter.style.color = 'red';
    }
    else{
        counter.style.color = 'black';
    }
});

