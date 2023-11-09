const prompt = require('prompt-sync')();
function findNumberOf(userInput = +prompt('What is your volume?'))
{
    let sum = 0;
    let n = 0;
    while (sum < userInput)
    {
        n++
        sum += Math.pow(n, 3);
    }
    return sum === userInput ? console.log(n) : console.log(-1);
}
findNumberOf();