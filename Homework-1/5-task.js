const prompt = require('prompt-sync')();

let array = Array.from(prompt('Your array:'));
let newArray = [];
let tempArray = [];
let output = '';
let indexOfSpace;

array = array.concat(' '); // треба додати обин пробел до array, бо надалі будуть з'єднувтаись всі значення між пробілами
console.log(array);

tempArray = array.slice(0, array.indexOf(' ')); // перший символ в масиві !== ' ', тому спочатку додати в tempArray все від нього, до ' '
newArray = newArray.concat(tempArray.join('')); // об'єднати newArray з зліпленим tempArray
while (array.includes(' ')) // цикь
{
    indexOfSpace = array.indexOf(' ');
    array.splice(indexOfSpace, 1);
    tempArray = array.slice(indexOfSpace, array.indexOf(' '));
    newArray = newArray.concat(tempArray.join(''));
}
newArray.pop(); // чомусь завжди в кінці newArray є порожній елемент '', тому я просто його прибираю
newArray = newArray.map(item => parseInt(item)); // для кожного елементу newArray застосовую метор parseInt
console.log(`final array: ${newArray}`);

for (let i = 0; i < newArray.length; i++) // заміни на newArray.map
{
    const checkHighestNumber = newArray.every(el=> el <= newArray[i]); // перевіряє чи кожен el на те, чи є в newArray якийсь елемент, більший за нього
    if (checkHighestNumber) output += String(newArray[i]);
}

for (let i = 0; i < newArray.length; i++) // не заміню я панк
{
    const checkLowestNumber = newArray.every(el=> el >= newArray[i]); // те саме, що зверху, але перевіряє на найменший
    if (checkLowestNumber) output += ' ' + String(newArray[i]);
}

console.log(`highest and lowest: ${output}`);


