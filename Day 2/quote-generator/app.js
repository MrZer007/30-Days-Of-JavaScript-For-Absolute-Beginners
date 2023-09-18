const quotes = [
    {
        person: 'William Shakespeare',
        quote: 'A rose by any other name would smell as sweet.'
    },

    {
        person: 'John Kennedy',
        quote: 'Ask not what your country can do for you; ask what you can do for your country.'
    },

    {
        person: 'Rhett Butler',
        quote: "Frankly, my dear, I don't give a damn."
    },

    {
        person: 'Martin Luther King',
        quote: 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.'
    },

    {
        person: 'Albert Einstein',
        quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },

    {
        person: 'John Dalberg-Acton',
        quote: 'Power corrupts; absolute power corrupts absolutely.'
    },

    {
        person: 'Abraham Lincoln',
        quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."
    },

    {
        person: 'Hank Aaron',
        quote: 'The only thing that feels better than winning is winning when nobody thought you could.'
    },

    {
        person: 'Winston Churchill',
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
    },

    {
        person: 'Tony Gaskins',
        quote: "If you don't build your dream, someone else will hire you to help them build theirs."
    }
];

const name = document.querySelector('#author-name');
const quoteHandler = document.querySelector('#quote');
const generator = document.querySelector('#generate-quote');
let index;

generator.addEventListener('click', () => {
    index = Math.floor(Math.random() * quotes.length);
    name.innerHTML = '- ' + quotes[index].person;
    quoteHandler.innerHTML = quotes[index].quote;
})