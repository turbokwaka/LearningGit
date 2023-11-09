const prompt = require('prompt-sync')();

let result;
function checkPrime(userNumber = +prompt('What is your number?'))
{
    const primeNumbers = [2, 3, 5, 7];
    if (!primeNumbers.includes(userNumber) ) {

        let notPrime = primeNumbers.some(e => userNumber % e === 0); // перевіряє чи userNumber ділиться націло принаймні на одне число зі списку divideNumbers
        return userNumber < 2 ? false : notPrime !== true;
    }
    return true;
}
result = checkPrime();
console.log(result);    
