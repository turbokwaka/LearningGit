function landPerimeter(arr) {
    island = arr;
    let i = 0;
    addWater = ''
    for (let m = 0; m < island[0].length; m++) addWater += 'O'
    island.push(addWater);
    island.unshift(addWater);
    island = island.map(i => 'O' + i + 'O');
    function findPerimetr(island) {
        for (let el in island) {
            line = island[el]

            for (let unit in line) {
                pixel = line[unit]
                function checkWater(x) {
                    symbol = line[unit];
                    targetLine = island[+el + x]
                    if (targetLine) {
                        targetSymbol = targetLine[+unit]
                    }
                    if (symbol === 'X' && targetSymbol === 'O') {
                        i++
                    }
                }

                if (line[+unit - 1] === 'X' && line[+unit - 1] !== undefined && pixel !== 'X') i++
                if (line[+unit + 1] === 'X' && line[+unit + 1] !== undefined && pixel !== 'X') i++
                checkWater(-1);
                checkWater(1);
            }
        }
        return i;
    }

    return `Total land perimeter: ${findPerimetr(island)}`
}
landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]);