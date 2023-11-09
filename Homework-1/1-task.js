/*const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);*/
const prompt = require('prompt-sync')();
function multiplesSum(userNumber = prompt('What is your number?'))
{
    let sum = 0;
    for (let i = 1; i < userNumber; i++)
    {
        if (i % 5 === 0 | i % 3 === 0) sum += i;
    }
    console.log(sum);
}
multiplesSum();