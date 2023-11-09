const prompt = require('prompt-sync')();
function minMoves(diskNumber = prompt('How many disks?'))
{
    let moves = Math.pow(2, diskNumber) - 1;
    console.log(moves);
}
minMoves();