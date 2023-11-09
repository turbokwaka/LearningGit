const prompt = require('prompt-sync')();

let myNumber = prompt('Your number:');
let inputArray = Array.from(myNumber);
let output = ''
console.log(inputArray);

for (let i = 0; inputArray.length !== 0; i++)
{
    inputArray.map(item =>
    {
        let checkHighestNumber = inputArray.every(el=> el <= item);
        if (checkHighestNumber)
        {
            output += String(item);
            inputArray.splice(inputArray.indexOf(item), 1);
        }

    });
}

console.log(output);



